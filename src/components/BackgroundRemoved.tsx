'use client';

import { useState } from 'react';

interface BackgroundRemovedProps {
  originalImage: File | null;
  processedImage: string | null;
  isProcessing: boolean;
}

export default function BackgroundRemoved({ 
  originalImage, 
  processedImage, 
  isProcessing 
}: BackgroundRemovedProps) {
  const [downloadFormat, setDownloadFormat] = useState<'png' | 'jpg'>('png');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!processedImage) return;

    setIsDownloading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = `bg-removed-${Date.now()}.${downloadFormat}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  if (!originalImage) {
    return (
      <div className="w-full h-full p-8 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload an image to remove background</h3>
          <p className="text-gray-500">Your processed image will appear here</p>
        </div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="w-full h-full p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin shadow-lg"></div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Removing background...</h3>
          <p className="text-gray-500">This may take a few moments</p>
        </div>
      </div>
    );
  }

  if (!processedImage) {
    return (
      <div className="w-full h-full p-8 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
            <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Ready to process</h3>
          <p className="text-gray-500">Click &apos;Remove Background&apos; to start</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent mb-2">
          Background Removed
        </h2>
        <p className="text-gray-600">Your image is ready for download</p>
      </div>
      
      <div className="space-y-8">
        <div className="relative group">
          <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4">
            <img
              src={processedImage}
              alt="Background removed"
              className="w-full h-auto max-h-96 object-contain rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-semibold text-gray-700">Download Format:</label>
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Transparent</span>
              </div>
            </div>
            <select
              value={downloadFormat}
              onChange={(e) => setDownloadFormat(e.target.value as 'png' | 'jpg')}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 bg-gray-50 hover:bg-white transition-colors duration-200"
            >
              <option value="png">PNG (Transparent)</option>
              <option value="jpg">JPG (Transparent)</option>
            </select>
          </div>
          
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg ${
              isDownloading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white hover:shadow-xl transform hover:-translate-y-1'
            }`}
          >
            {isDownloading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Downloading...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Image</span>
              </div>
            )}
          </button>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Image Information</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Background completely removed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Original quality preserved</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Transparency maintained</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Ready for design projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
