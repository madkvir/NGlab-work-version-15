import React, { useState, useRef, FormEvent } from "react";
import { Save, X, Upload } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { generateSlug } from "../../utils/slug";
import { BlogPost } from "../../types/blog";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface BlogPostEditorProps {
  post: Partial<BlogPost> | null;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ post, onSave, onCancel }) => {
  const { locale } = useParams();
  const [formData, setFormData] = useState<Partial<BlogPost>>(
    post || {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      author: "",
      date: new Date().toISOString().split("T")[0],
    }
  );
  const [imgPreviews, setImgPreviews] = useState<string[] | []>([]);

  const [uploadedImages, setUploadedImages] = useState<File[] | []>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);
  const router = useRouter();

  const apiUrl = '/.netlify/functions/blog';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newPreviews: string[] = [];
    const newFiles: File[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const objectUrl = URL.createObjectURL(file);

      newPreviews.push(objectUrl);
      newFiles.push(file);
    }

    setImgPreviews((prev) => [...prev, ...newPreviews]);
    setUploadedImages((prev) => [...prev, ...newFiles]);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      // Проверка, что у нас есть содержимое
      if (!formData.content || formData.content.trim() === '<p></p>') {
        throw new Error('Содержимое статьи не может быть пустым');
      }
      
      // Создаем объект данных с включением id и метода
      const submitData = {
        _id: formData._id,
        method: formData._id ? 'PUT' : 'POST', // Указываем метод внутри запроса
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        author: formData.author || 'Admin',
        category: formData.category || 'Uncategorized',
        date: formData.date || new Date().toISOString().split('T')[0],
        images: formData.images || [],
      };
      
      console.log('Отправляем данные блога методом POST:', submitData);
      
      // Отправляем данные методом POST (всегда!)
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        },
        body: JSON.stringify(submitData)
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Ошибка API:', response.status, errorText);
        throw new Error(`Ошибка при сохранении: ${response.status} ${errorText}`);
      }
      
      const result = await response.json();
      console.log('Пост успешно сохранен:', result);
      
      // Обновляем успех и редиректим
      onSave(result);
      setTimeout(() => {
        router.push('/admin/manage-blogs');
      }, 1500);
      
    } catch (error) {
      console.error('Ошибка при сохранении поста:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Произошла неизвестная ошибка при сохранении');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="bg-red-500/10 text-red-400 p-4 rounded-lg">{error}</div>}

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Featured Image</label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              multiple
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 text-white rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <Upload className="w-5 h-5" />
              Upload Images
            </button>
            {formData.images &&
              formData.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="Featured"
                  className="w-16 h-16 object-cover rounded-lg"
                />
              ))}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Excerpt *</label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          rows={2}
          className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Content *</label>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          apiKey="deft1xkbwh9g1bnviiz9smu90citep0mpsipf8hhleq78wx6"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            skin: "oxide-dark",
            content_css: "dark",
          }}
          value={formData.content}
          onEditorChange={handleEditorChange}
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Category *</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Author *</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            required
          />
        </div>
      </div>

      {imgPreviews.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Uploaded Images</label>
          <div className="grid grid-cols-6 gap-4">
            {imgPreviews.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Uploaded ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800/50 transition-colors flex items-center gap-2"
        >
          <X className="w-5 h-5" />
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white px-6 py-3 rounded-lg transition-all hover:animate-glow flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="w-5 h-5" />
          {isSubmitting ? "Saving..." : "Save Post"}
        </button>
      </div>
    </form>
  );
};

export default BlogPostEditor;
