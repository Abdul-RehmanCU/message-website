import React from "react";

export default function Modal({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null; // Don't render the modal if it isn't open.

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-4xl p-4 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full px-3 py-1"
        >
          ✕
        </button>

        {/* PDF Viewer */}
        <iframe
          src={pdfUrl}
          title="Resume"
          className="w-full h-[75vh]"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}
