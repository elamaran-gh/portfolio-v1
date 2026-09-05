import React from 'react'
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { GitBranchPlus, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MBBS AI Study Assistant (Syllabus-Oriented RAG Study System)",
    image: "mbbs.png",
    alt: "MBBS AI Study Assistant",
    code: "https://github.com/elamaran-gh/MBBS-Preparation-assitant",
    live: "https://mbbs-preparation-assitant.vercel.app",
    description:
      "Built a full-stack RAG-based exam prep platform for MBBS students, letting them search previous-year questions across multiple universities and subjects, retrieve verified textbook references (Robbins Pathology, Harrison's Internal Medicine, Bailey & Love's Surgery), and generate structured, syllabus-aligned AI answers grounded in those sources. Implemented a similarity-graph \"Similar Questions\" feature via Qdrant vector search, plus a Study from PDF flow where users upload their own material and ask questions grounded specifically in that document, with the app explicitly stating when no relevant content is found rather than fabricating an answer.",
    highlight:
      "✔ Generates structured, source-grounded AI study answers from real exam questions and lets students query their own uploaded PDFs",
    tech: ["React", "Tailwind CSS", "React Router", "Node.js", "Express.js", "MongoDB", "Qdrant Vector DB", "RAG", "PDF Processing"],
  },
  {
    title: "AgriTech Marketplace (B2B Crop Trading Platform)",
    image: "/agritech.png",
    alt: "AgriTech Marketplace",
    code: "https://github.com/elamaran-gh/AgriTech-Marketplace",
    live: "https://agri-tech-marketplace-coral.vercel.app",
    description:
      "Built a full-stack MERN marketplace connecting crop farmers and buyers through a bulk-trade enquiry system, instead of a traditional online checkout. Buyers browse crop listings by category, submit purchase enquiries with quantity and delivery details, and admins manage listings and follow up on enquiries in real time from a dashboard. Implemented a strict layered backend architecture — Route, Controller, Service, Repository, Model — with JWT authentication in HTTP-only cookies, Joi request validation, and Cloudinary-based image uploads.",
    highlight:
      "✔ Connects farmers and bulk buyers through a validated enquiry workflow, with role-based admin and buyer dashboards",
    tech: ["React", "Tailwind CSS", "Redux Toolkit (RTK Query)", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT", "Joi Validation"],
  },
  {
    title: "DevMind (AI Agent for Developer Debugging)",
    image: "/Devmind.png",
    alt: "DevMind",
    code: "https://github.com/elamaran-gh/DevMind",
    live: "https://dev-mind-indol.vercel.app",
    description:
      "Built a full-stack AI agent application that helps developers debug code autonomously. Connect your GitHub repo and describe your bug — the agent reads your actual code files, checks recent commits, searches the web, and returns an exact fix with file name and line number. Implemented the ReAct (Reason + Act) pattern with Groq tool calling, where the LLM decides which tools to use rather than following a hardcoded flow. Solutions are automatically saved to a per-project notes panel.",
    highlight:
      "✔ AI agent autonomously reads your GitHub code, searches the web, and gives exact bug fixes with file and line number",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Groq AI", "ReAct Agent", "Tool Calling", "JWT"],
  },
  {
    title: "NovaShare (Secure File Sharing Platform)",
    image: "/novashare.png",
    alt: "NovaShare",
    code: "https://github.com/elamaran-gh/Nova-Share",
    live: "https://nova-share-tau.vercel.app",
    description:
      "Developed a full-stack secure file sharing web application using React.js, Node.js, Express, and integrated Groq's Llama 3.3 AI for intelligent file search and summarization. Users can register, upload files to the cloud, and share them via unique short links with optional password protection. Features a personal dashboard with AI-powered smart search, file summarization, upload statistics, file management, and a profile section. Built with JWT-based authentication, Cloudinary for cloud storage, and MongoDB for persistent data management.",
    highlight:
      "✔ Enables users to securely upload, manage, and share files with anyone via protected short links",
    tech: ["React", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT"],
  },
  {
    title: "DailyDesk",
    image: "/dailydesk.png",
    alt: "DailyDesk",
    code: "https://github.com/elamaran-gh/Daily-Desk",
    live: "https://daily-desk-mu.vercel.app",
    description:
      "Built a full-stack MERN personal journal app with a RAG-based AI assistant that answers questions about your journal entries using semantic search. Features JWT authentication with HTTP-only cookies, Redux Toolkit (RTK Query) for state management, and MongoDB for persistent storage. Integrated Qdrant vector database and OpenRouter LLM to enable context-aware journal querying with zero hallucination.",
    highlight:
      "✔ Enables users to securely document and manage personal journal entries with encrypted authentication",
    tech: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "MongoDB", "Redux Toolkit (RTK Query)", "JWT"],
  },
  {
    title: "AI-Resume Analyzer",
    image: "/resumind.png",
    alt: "AI Resume Analyzer",
    code: "https://github.com/elamaran-gh/ai-resume-analyzer-",
    live: "https://ai-resume-analyzer-pied-one.vercel.app",
    description:
      "Developed an AI-powered Resume Analyzer using React.js, Tailwind CSS, and Puter AI integration. Users upload resumes and receive intelligent feedback tailored to specific job descriptions. Analyzes strengths, weaknesses, and provides actionable improvement suggestions to enhance job readiness. Implemented multi-page navigation using React Router with a clean, responsive UI.",
    highlight:
      "✔ Enables users to improve resumes with AI-driven insights and job matching",
    tech: ["React", "Tailwind CSS", "Zustand", "React Router", "Puter AI"],
  },
  {
    title: "Credix-Sphere",
    image: "/credix.png",
    alt: "Credix-Sphere",
    code: "https://github.com/elamaran-gh/Credix-sphere",
    live: "https://credix-sphere.vercel.app",
    description:
      "Developed a CreditBook web application for small grocery store owners to digitally manage customer credit transactions. The system replaces traditional notebooks by allowing shop owners to track credits, payments, and outstanding balances in a simple dashboard. Built with protected routes to ensure only the owner can access and manage financial data.",
    highlight:
      "✔ Enables shop owners to track customer credits, payments, and balances efficiently",
    tech: ["React", "Tailwind CSS", "React Router", "Firebase(Authentication & Firestore)"],
  },
  {
    title: "Aspirant Compass (AI-based Government Exam Guidance System)",
    image: "/govpath.png",
    alt: "Aspirant Compass",
    code: "https://github.com/elamaran-gh/Aspirant-Compass",
    live: "https://gov-guide-blush.vercel.app",
    description:
      "Developed an AI-powered web application that helps government job aspirants (TNPSC, SSC, Banking, Railways) gain clarity on exam selection, follow structured preparation roadmaps, and track daily progress. The platform provides personalized exam recommendations based on user profile and generates AI-driven study plans to guide beginners effectively.",
    highlight:
      "✔ Guides government job aspirants from confusion to clarity with AI-powered exam selection and preparation tracking",
    tech: ["React", "Tailwind CSS", "React Router", "OpenAI API", "Firebase(Authentication & Firestore)"],
  },
  {
    title: "Weather App",
    image: "/weather.png",
    alt: "Weather App",
    code: "https://github.com/elamaran-gh/weather-app-v2/tree/main",
    live: "https://weather-app-v2-flax.vercel.app",
    description:
      "Developed a beginner-friendly Weather App using React and Tailwind CSS, integrated with the OpenWeather API. Users can search for any city and get real-time weather details like temperature, humidity, and conditions. Implemented API handling, error management, and responsive UI for a smooth user experience.",
    highlight:
      "✔ Displays real-time weather data with clean and responsive design React Tailwind CSS OpenWeather API",
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
  },
];

const Project = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionTitle>Projects</SectionTitle>
        </Reveal>

        <div className="flex flex-col gap-10 sm:gap-12">
          {projects.map((project, index) => (
            <Reveal key={index} delay={80}>
              <article className="group rounded-2xl bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-pink-500/80 p-px shadow-[0_12px_44px_-16px_rgba(139,92,246,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-18px_rgba(139,92,246,0.6)]">
                <div className="relative overflow-hidden rounded-[calc(1rem-1px)] bg-night-900/95">
                  {/* Screenshot */}
                  <div className="relative h-52 overflow-hidden sm:h-60">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-night-900 via-night-900/10 to-transparent"
                    />
                  </div>

                  <div className="relative p-6 sm:p-8">
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {project.title}
                      </h2>

                      <div className="flex shrink-0 gap-3">
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)]"
                        >
                          <GitBranchPlus size={16} aria-hidden="true" />
                          <span>Code</span>
                        </a>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-blue-400/25 bg-blue-500/10 px-3.5 py-2 text-sm text-blue-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)]"
                        >
                          <ExternalLink size={16} aria-hidden="true" />
                          <span>Live</span>
                        </a>
                      </div>
                    </div>

                    <p className="mb-4 leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <p className="mb-5 font-medium text-emerald-400">
                      {project.highlight}
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition-colors duration-300 hover:border-purple-400/50 hover:text-white sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;
