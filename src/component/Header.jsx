import React, { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll-spy: highlight the nav link of the section currently under the header.
  useEffect(() => {
    const ids = navLinks.map((link) => link.id);
    let ticking = false;

    const compute = () => {
      ticking = false;
      const probe = window.scrollY + 110; // just below the sticky header
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= probe) {
          current = id;
        }
      }

      // Near the very bottom, the last section always wins.
      const doc = document.documentElement;
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Elamaran_CV.pdf";
    link.download = "Elamaran_CV.pdf";
    link.click();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-night-950/60 backdrop-blur-xl">
      {/* subtle top glow line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/70 to-transparent"
      />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[4.5rem]">
        <a href="#home" aria-label="Go to Home" className="group flex items-center">
          <span className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1.5px] transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(139,92,246,0.55)]">
            <img
              src="/portfolio.png"
              alt="logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-white/5 text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li className="ml-3">
            <button
              onClick={handleDownload}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-2 text-sm font-medium text-white shadow-[0_4px_20px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(139,92,246,0.55)] active:translate-y-0"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/25 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[350%]"
              />
              <Download
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
              Download Resume
            </button>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.06] bg-night-950/85 backdrop-blur-xl md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-xl px-4 py-3 font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 text-white"
                        : "text-slate-200 hover:bg-gradient-to-r hover:from-blue-500/15 hover:via-purple-500/15 hover:to-pink-500/15 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <button
                onClick={() => {
                  handleDownload();
                  setOpen(false);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-4 py-3 font-medium text-white shadow-[0_4px_20px_rgba(139,92,246,0.35)]"
              >
                <Download size={16} aria-hidden="true" />
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
