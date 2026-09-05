import React from 'react'
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "elamaran@gmail.com",
    icon: "/gmail.png",
    alt: "email",
    href: "mailto:elamaran@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "elamaran-gh",
    icon: "/github.png",
    alt: "github",
    href: "https://github.com/elamaran-gh",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "ELAMARAN M",
    icon: "/linkedin.png",
    alt: "linkedin",
    href: "https://www.linkedin.com/in/elamaranm/",
    external: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-lg text-center">
        <Reveal>
          <SectionTitle>Get In Touch</SectionTitle>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-slate-400 sm:text-base">
            I'm open to new opportunities and exciting projects — let's connect and build something great together!
          </p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {contactItems.map((item, index) => (
            <Reveal key={item.label} delay={150 + index * 100}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block rounded-2xl bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-pink-500/80 p-px shadow-[0_10px_36px_-16px_rgba(139,92,246,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_-16px_rgba(139,92,246,0.65)]"
              >
                <span className="flex items-center gap-4 rounded-[calc(1rem-1px)] bg-night-900/95 px-4 py-3.5 text-left transition-colors duration-300 group-hover:bg-night-900/80 sm:px-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105">
                    <img src={item.icon} alt={item.alt} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-slate-100">
                      {item.label}
                    </span>
                  </span>
                  <span className="ml-auto flex min-w-0 items-center gap-2">
                    <span className="truncate text-sm text-slate-400 transition-colors duration-300 group-hover:text-purple-200">
                      {item.value}
                    </span>
                    {item.external && (
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                        className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-300"
                      />
                    )}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
