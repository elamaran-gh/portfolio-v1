import React from 'react'
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { LayoutTemplate, Braces, Wrench, Sparkles } from "lucide-react";

const Skill = () => {
    const categories = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript (ES6+)", "React", "Zustand", "Tailwind CSS"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "Mongodb", "Mongoose", "Jwt"]
        },
        {
            title: "Tools & Deployment",
            skills: ["Git & GitHub", "Vercel", "Render", "Postman"]
        },
        {
            title: "Additional Skills",
            skills: ["openRouter", "Prompt Engineering"]
        }
    ];

    const categoryIcons = [LayoutTemplate, Braces, Wrench, Sparkles];

    return (
        <section id="skills" className="relative scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28">
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <SectionTitle>Skills</SectionTitle>
                </Reveal>

                <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                    {categories.map((section, index) => {
                        const Icon = categoryIcons[index % categoryIcons.length];
                        return (
                            <Reveal key={index} delay={(index % 2) * 120} className="h-full">
                                {/* Gradient border */}
                                <div className="group h-full rounded-2xl bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-pink-500/70 p-px shadow-[0_10px_40px_-14px_rgba(139,92,246,0.4)] transition-shadow duration-500 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.6)]">
                                    {/* Card */}
                                    <div className="flex h-full flex-col rounded-[calc(1rem-1px)] bg-night-900/95 p-6 backdrop-blur transition-transform duration-500 group-hover:-translate-y-1 sm:p-7">
                                        {/* Section header */}
                                        <div className="mb-5 flex items-center gap-3">
                                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 text-slate-100 ring-1 ring-white/10">
                                                <Icon size={20} aria-hidden="true" />
                                            </span>
                                            <h2 className="font-display text-lg font-semibold text-white sm:text-xl">
                                                {section.title}
                                            </h2>
                                        </div>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2.5">
                                            {section.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="cursor-default rounded-lg border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-[0_6px_18px_rgba(139,92,246,0.45)]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skill
