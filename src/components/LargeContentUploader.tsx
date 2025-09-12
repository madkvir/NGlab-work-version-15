import React, { useState } from "react";
import { useLargeContentUpload, UploadProgress } from "@/hooks/useLargeContentUpload";
import { checkContentLimit } from "@/utils/contentValidation";

interface LargeContentUploaderProps {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  children?: React.ReactNode;
}

export default function LargeContentUploader({
  onSuccess,
  onError,
  children,
}: LargeContentUploaderProps) {
  const { uploadPost, uploadProgress, resetUpload } = useLargeContentUpload();
  const [content, setContent] = useState("");
  const [showProgress, setShowProgress] = useState(false);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);

    if (contentCheck.size.bytes > 5 * 1024 * 1024) {
      // > 5MB
      setShowProgress(true);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    try {
      resetUpload();
      const result = await uploadPost(formData);
      onSuccess?.(result);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Upload failed";
      onError?.(errorMessage);
    }
  };

  const contentCheck = checkContentLimit(content);
  const isLargeContent = contentCheck.size.bytes > 10 * 1024 * 1024; // > 10MB

  return (
    <div className="large-content-uploader">
      {/* Информация о размере контента */}
      <div className="content-size-info mb-4 p-3 rounded-lg border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            Размер контента: <strong>{contentCheck.size.readable}</strong>
          </span>
          <span
            className={`text-sm px-2 py-1 rounded ${
              contentCheck.isValid
                ? contentCheck.size.bytes > 5 * 1024 * 1024
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {contentCheck.isValid ? "OK" : "Превышен лимит"}
          </span>
        </div>

        {isLargeContent && (
          <div className="mt-2 text-sm text-blue-600">
            <i className="fas fa-info-circle mr-1"></i>
            Большой контент будет загружен по частям для лучшей производительности
          </div>
        )}
      </div>

        <div className="upload-progress mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-800">
              {uploadProgress.totalChunks > 0
                ? `Загрузка части ${uploadProgress.currentChunk} из ${uploadProgress.totalChunks}`
                : "Загрузка..."}
            </span>
            <span className="text-sm text-blue-600">{Math.round(uploadProgress.progress)}%</span>
          </div>

          <div className="w-full bg-blue-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress.progress}%` }}
            ></div>
          </div>

          {uploadProgress.totalChunks > 0 && (
            <div className="mt-2 text-xs text-blue-600">
              Используется загрузка по частям для лучшей производительности
            </div>
          )}
        </div>
      )}

        <div className="upload-error mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-center">
            <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
            <span className="text-red-800 font-medium">Ошибка загрузки:</span>
          </div>
          <p className="text-red-700 mt-1">{uploadProgress.error}</p>
          <button
            onClick={resetUpload}
            className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
          >
            Попробовать снова
          </button>
        </div>
      )}

        <div className="upload-success mb-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-500 mr-2"></i>
            <span className="text-green-800 font-medium">Загрузка завершена успешно!</span>
          </div>
        </div>
      )}

        React.cloneElement(children as React.ReactElement, {
          onContentChange: handleContentChange,
          onSubmit: handleSubmit,
          isUploading: uploadProgress.isUploading,
        })}
    </div>
  );
}
