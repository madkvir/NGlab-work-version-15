export const dynamic = "force-dynamic";

import React, { useState, useRef } from "react";
import { Save, X, Upload } from "lucide-react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { generateSlug } from "../../utils/slug";
import { BlogPost, blogTranslation } from "../../types/blog";
import { useParams } from "next/navigation";

interface BlogPostEditorProps {
  post: Partial<BlogPost> | null;
  onSave: () => void;
  onCancel: () => void;
}

const languages = ["de", "uk", "ru", "es"];

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
      translations: [
        {
          locale: "de",
          title: "",
          excerpt: "",
          content: "",
          category: "",
        },
        {
          locale: "uk",
          title: "",
          excerpt: "",
          content: "",
          category: "",
        },
        {
          locale: "ru",
          title: "",
          excerpt: "",
          content: "",
          category: "",
        },
        {
          locale: "es",
          title: "",
          excerpt: "",
          content: "",
          category: "",
        },
      ],
    }
  );

  const [imgPreviews, setImgPreviews] = useState<string[] | []>([]);

  const [uploadedImages, setUploadedImages] = useState<File[] | []>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);

  const apiUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : process.env.NEXT_PUBLIC_API_URL || "https://neurogenlab.de";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTranslationChange = (lang: string, field: keyof blogTranslation, value: string) => {
    setFormData((prev) => ({
      ...prev,
      translations: prev.translations?.map((t) =>
        t.locale === lang ? { ...t, [field]: value } : t
      ),
    }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { title, content, excerpt, translations } = formData;

      if (!title || !content || !excerpt) {
        throw new Error("Please fill in all required fields");
      }

      const slug = generateSlug(title, locale);
      const postData: Record<string, any> = {
        ...formData,
        slug,
        content,
      };

      delete postData.images;

      const formDataToSend = new FormData();

      Object.entries(postData).forEach(([key, value]) => {
        if (key === "translations") {
          formDataToSend.append("translations", JSON.stringify(value));
        } else if (typeof value !== "undefined") {
          formDataToSend.append(key, value as string);
        }
      });

      uploadedImages?.forEach((file) => {
        formDataToSend.append("images", file);
      });

      const url = `${apiUrl}/api/blog`;
      const method = post && post._id ? axios.put : axios.post;
      const savedPost = await method(url, formDataToSend);

      onSave();
    } catch (error) {
      console.error("Error saving post:", error);
      setError(error instanceof Error ? error.message : "Failed to save post. Please try again.");
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

      <div>
        <p className="mb-2 text-center text-xl">Translations</p>
        {languages &&
          languages.map((lang, idx) => {
            const translation = formData.translations?.find((t) => t.locale === lang);
            if (translation) {
              return (
                <div key={idx} className="mb-5">
                  <p className="mb-3">Locale: {lang.toUpperCase()}</p>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Title *</label>
                    <input
                      type="text"
                      name="title"
                      value={translation.title}
                      onChange={(e) => handleTranslationChange(lang, "title", e.target.value)}
                      className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Excerpt *
                    </label>
                    <textarea
                      name="excerpt"
                      value={translation.excerpt}
                      onChange={(e) => handleTranslationChange(lang, "excerpt", e.target.value)}
                      rows={2}
                      className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Category *
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={translation.category}
                      onChange={(e) => handleTranslationChange(lang, "category", e.target.value)}
                      className="w-full bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Content *
                    </label>
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
                        content_style:
                          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                        skin: "oxide-dark",
                        content_css: "dark",
                      }}
                      value={translation.content}
                      onEditorChange={(content) =>
                        handleTranslationChange(lang, "content", content)
                      }
                    />
                  </div>
                </div>
              );
            }
          })}
      </div>
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
