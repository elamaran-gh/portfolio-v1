import React from "react";
import { useNavigate } from "react-router-dom";
import Reveal from "./Reveal";
import { ArrowLeft, Download } from "lucide-react";

const Resume = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Elamaran_CV.pdf";
    link.download = "Elamaran_CV.pdf";
    link.click();
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-white/[0.06] bg-night-950/60 backdrop-blur-xl">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"
        />
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Back to Portfolio
            </button>
            <span className="hidden truncate font-display text-sm font-medium text-slate-200 sm:block">
              Resume - Elamaran M
            </span>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-[0_6px_22px_rgba(139,92,246,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)]"
          >
            <Download size={15} aria-hidden="true" />
            Download PDF
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Icon */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="animate-pulse-soft absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-purple-500/25 to-pink-500/30 blur-xl"
              />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-[0_12px_36px_rgba(139,92,246,0.5)] sm:h-24 sm:w-24">
                <Download size={32} className="text-white" aria-hidden="true" />
              </div>
            </div>

            <h1 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Elamaran M - Resume
            </h1>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Click below to view the resume in a new tab or download it directly to your device.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button
                onClick={() => window.open("/Elamaran_CV.pdf", "_blank")}
                className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 font-medium text-white shadow-[0_8px_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(139,92,246,0.55)]"
              >
                View Resume
              </button>
              <button
                onClick={handleDownload}
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)]"
              >
                Download PDF
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Resume;
