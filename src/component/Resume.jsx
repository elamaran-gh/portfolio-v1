import React from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Elamaran_CV.pdf";
    link.download = "Elamaran_CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/")} className="text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
            Back to Portfolio
          </button>
          <span className="text-sm font-medium">Resume - Elamaran M</span>
        </div>
        <button onClick={handleDownload} className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition">
          Download PDF
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-16">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
          <img src="/download.png" alt="pdf" className="w-10 h-10 invert" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Elamaran M - Resume</h2>
        <p className="text-gray-500 text-sm text-center max-w-sm">
          Click below to view the resume in a new tab or download it directly to your device.
        </p>
        <div className="flex gap-4">
          <button onClick={() => window.open("/Elamaran_CV.pdf", "_blank")} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:opacity-90 transition">
            View Resume
          </button>
          <button onClick={handleDownload} className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
