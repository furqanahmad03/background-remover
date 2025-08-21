'use client';

import { useState } from 'react';
import { removeBackground } from '@imgly/background-removal';
import Navbar from "@/components/Navbar";
import ImageUpload from "@/components/ImageUpload";
import BackgroundRemoved from "@/components/BackgroundRemoved";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    setProcessedImage(null); // Reset processed image when new image is selected
  };

  const handleRemoveBackground = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);
    try {
      const result = await removeBackground(selectedImage);
      const url = URL.createObjectURL(result);
      setProcessedImage(url);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Failed to remove background. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Remove Image Background
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Upload any image and automatically remove the background with AI-powered technology. 
              Perfect for product photos, portraits, and design projects.
            </p>
          </div>

          {selectedImage && !processedImage && (
            <div className="text-center mb-8">
              {isProcessing ? (
                <div className="inline-flex items-center space-x-3 bg-blue-50 border border-blue-200 text-blue-700 px-8 py-4 rounded-lg">
                  <div className="w-6 h-6 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  <span className="text-lg font-medium">Processing image...</span>
                </div>
              ) : (
                <button
                  onClick={handleRemoveBackground}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Remove Background
                </button>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image Upload */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <ImageUpload onImageSelect={handleImageSelect} isProcessing={isProcessing} />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <BackgroundRemoved
                originalImage={selectedImage}
                processedImage={processedImage}
                isProcessing={isProcessing}
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Background Remover?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">AI-powered processing that works in seconds</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High Quality</h3>
                <p className="text-gray-600">Preserves image quality and details</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Download</h3>
                <p className="text-gray-600">Download in PNG or JPG format</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
