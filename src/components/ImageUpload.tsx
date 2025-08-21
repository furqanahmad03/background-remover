'use client';

import { useState, useRef } from 'react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isProcessing?: boolean;
}

export default function ImageUpload({ onImageSelect, isProcessing = false }: ImageUploadProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        onImageSelect(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleClick = () => {
    if (!isProcessing) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="w-full h-full p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-2">
          Upload Image
        </h2>
        <p className="text-gray-600">Select an image to remove its background</p>
      </div>
      
      {!selectedImage ? (
        <div
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
            isDragOver 
              ? 'border-blue-500 bg-blue-50/50 scale-105' 
              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50/50'
          } ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          onDrop={isProcessing ? undefined : handleDrop}
          onDragOver={isProcessing ? undefined : handleDragOver}
          onDragLeave={isProcessing ? undefined : handleDragLeave}
          onClick={handleClick}
        >
          <div className="space-y-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-gray-700">
                {isProcessing ? 'Processing in progress...' : 'Drop your image here, or click to browse'}
              </p>
              <p className="text-gray-500">
                {isProcessing ? 'Please wait for background removal to complete' : 'Supports JPG, PNG, GIF up to 10MB'}
              </p>
            </div>
            {!isProcessing && (
              <div className="pt-4">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Click or drag to upload</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto max-h-96 object-contain bg-gradient-to-br from-gray-50 to-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              disabled={isProcessing}
              className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-200 shadow-lg ${
                isProcessing 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-red-500 hover:bg-red-600 text-white hover:scale-110'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button
            onClick={handleClick}
            disabled={isProcessing}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg ${
              isProcessing 
                ? 'bg-gray-400 cursor-not-allowed text-gray-600' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:shadow-xl transform hover:-translate-y-1'
            }`}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </div>
            ) : (
              'Choose Different Image'
            )}
          </button>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
        disabled={isProcessing}
      />
    </div>
  );
}
