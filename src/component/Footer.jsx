import React from 'react'
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] bg-night-950/70 py-8 backdrop-blur">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Elamaran. All rights reserved.
        </p>
        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-[0_6px_18px_rgba(139,92,246,0.45)]"
        >
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
