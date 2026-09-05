import React from 'react'
import Reveal from "./Reveal";
import { Download } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-4 pb-28 pt-20 sm:px-6 lg:pt-24"
        >
            {/* Local cinematic ambience */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-pink-600/10 blur-[130px]" />
                <div className="absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-purple-600/10 blur-[110px]" />
                <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_10%,transparent_75%)]" />
            </div>

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                {/* ---- Intro text ---- */}
                <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
                    {/* Greeting */}
                    <Reveal>
                        <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur sm:text-base">
                            Hi there, I'm 👋
                        </p>
                    </Reveal>

                    {/* Name */}
                    <Reveal delay={100}>
                        <h1 className="text-gradient font-display mt-6 text-5xl font-bold tracking-tight drop-shadow-[0_0_28px_rgba(139,92,246,0.35)] sm:text-6xl xl:text-7xl">
                            ELAMARAN M
                        </h1>
                    </Reveal>

                    {/* Role */}
                    <Reveal delay={200}>
                        <p className="mt-5 inline-flex items-center gap-3 font-display text-lg font-semibold text-slate-100 sm:text-2xl">
                            <span
                                aria-hidden="true"
                                className="hidden h-px w-8 bg-gradient-to-r from-transparent to-purple-400 lg:block"
                            />
                            Full Stack MERN Developer
                            <span
                                aria-hidden="true"
                                className="hidden h-px w-8 bg-gradient-to-l from-transparent to-purple-400 lg:block"
                            />
                        </p>
                    </Reveal>

                    {/* Description */}
                    <Reveal delay={300}>
                        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-slate-400 sm:text-base lg:mx-0">
                            A beginner fullstack developer learning React and Node.js and continuously
                            improving through real-world projects.
                        </p>
                    </Reveal>

                    {/* Buttons */}
                    <Reveal delay={400}>
                        <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
                            {/* Resume Button */}
                            <a
                                href="/Elamaran_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-7 py-3.5 font-medium text-white shadow-[0_8px_30px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_42px_rgba(139,92,246,0.55)] active:translate-y-0"
                            >
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-y-0 -left-10 w-9 rotate-12 bg-white/25 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[320%]"
                                />
                                <Download
                                    size={17}
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                                <span className="relative z-10">Resume</span>
                            </a>

                            {/* Contact Button */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-slate-100 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)] active:translate-y-0"
                            >
                                <span aria-hidden="true">✉️</span>
                                Contact
                            </a>
                        </div>
                    </Reveal>
                </div>

                {/* ---- Premium profile-photo slot ---- */}
                <Reveal delay={250} className="flex justify-center">
                    <div className="relative h-72 w-72 sm:h-80 sm:w-80 xl:h-[22rem] xl:w-[22rem]">
                        {/* Soft static glow behind the photo */}
                        <div
                            aria-hidden="true"
                            className="absolute -inset-5 rounded-full bg-gradient-to-tr from-blue-500/30 via-purple-500/25 to-pink-500/30 blur-2xl opacity-80"
                        />

                        {/* Clear photo filling the circle with a crisp gradient edge */}
                        <div className="relative h-full w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[3px] shadow-[0_10px_50px_-12px_rgba(139,92,246,0.55)]">
                            <div className="h-full w-full overflow-hidden rounded-full">
                                <img
                                    src="/profile.jpeg"
                                    alt="Elamaran M"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Scroll cue */}
            <a
                href="#about"
                aria-label="Scroll down to About section"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
            >
                <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/20 p-1.5 transition-colors duration-300 hover:border-purple-400/70">
                    <span className="animate-scroll-dot h-1.5 w-1 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
                </span>
            </a>
        </section>
    )
}

export default Hero
