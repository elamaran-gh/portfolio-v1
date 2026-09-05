import React from "react";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <div className={`mb-12 flex flex-col items-center gap-4 sm:mb-16 ${className}`}>
      <h2 className="font-display text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {children}
      </h2>
      <span
        aria-hidden="true"
        className="h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_18px_rgba(139,92,246,0.65)]"
      />
    </div>
  );
};

export default SectionTitle;
