import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Elamaran_CV.pdf";
    link.download = "Elamaran_CV.pdf";
    link.click();
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home">
          <img src="/portfolio.png" alt="logo" className="w-10 h-10 cursor-pointer" />
        </a>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="relative group transition">
                <span className="group-hover:text-blue-500 transition">{link.name}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <button onClick={handleDownload} className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
              <img src="/download.png" alt="download" className="w-4 h-4 invert" />
              Download Resume
            </button>
          </li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1 p-2 rounded hover:bg-gray-100 transition">
          <span className="w-5 h-[2px] bg-black" />
          <span className="w-5 h-[2px] bg-black" />
          <span className="w-5 h-[2px] bg-black" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white border-t">
          <ul className="flex flex-col gap-3 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setOpen(false)} className="block p-3 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button onClick={() => { handleDownload(); setOpen(false); }} className="flex items-center gap-2 w-full p-3 rounded-md font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500">
                <img src="/download.png" alt="download" className="w-4 h-4 invert" />
                Download Resume
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
