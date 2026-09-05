import React from 'react'
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const About = () => {
    return (
        <section
            id="about"
            className="relative scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
        >
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <SectionTitle>About Me</SectionTitle>
                </Reveal>

                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    {/* Visual side */}
                    <Reveal className="flex justify-center">
                        <div className="relative w-full max-w-sm">
                            {/* aura */}
                            <div
                                aria-hidden="true"
                                className="animate-pulse-soft absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/25 via-purple-500/20 to-pink-500/25 blur-2xl"
                            />
                            {/* decorative corner orb */}
                            <div
                                aria-hidden="true"
                                className="animate-float-slow absolute -right-4 -top-4 h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_40px_-10px_rgba(139,92,246,0.35)]"
                            />
                            {/* tiny glow accents for diagonal balance */}
                            <span
                                aria-hidden="true"
                                className="animate-float absolute -left-3 top-1/4 h-3 w-3 rounded-full bg-blue-400/70 blur-[3px] shadow-[0_0_16px_rgba(59,130,246,0.9)]"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute -bottom-2 -right-5 h-16 w-16 rounded-full bg-pink-500/15 blur-2xl"
                            />
                            {/* gradient frame */}
                            <div className="relative rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-[0_20px_60px_-20px_rgba(139,92,246,0.5)]">
                                <div className="relative overflow-hidden rounded-[calc(2rem-2px)] bg-night-900">
                                    <img
                                        src="/deve.png"
                                        alt="Profile"
                                        className="h-80 w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04] sm:h-[26rem]"
                                    />
                                    {/* bottom fade into frame */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-t from-night-900/40 via-transparent to-transparent"
                                    />
                                </div>
                            </div>

                        </div>
                    </Reveal>

                    {/* Text side */}
                    <Reveal delay={150}>
                        <div className="text-center lg:text-left">
                            <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                                Hello!
                            </h3>
                            <p className="mt-6 leading-relaxed text-slate-300 sm:text-base">
                                I’m a Full Stack MERN Developer building end-to-end web applications with MongoDB, Express, React, and Node.js. I enjoy turning ideas into seamless digital experiences by combining sharp, user-focused interfaces with solid and scalable backend architecture.
                            </p>
                            <p className="mt-5 leading-relaxed text-slate-300 sm:text-base">
                                I’m also exploring the intersection of web development and AI, looking for ways to build smarter, more adaptive applications. I’m driven by the challenge of solving real-world problems through technology and continuously pushing my skills to create impactful solutions.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default About
