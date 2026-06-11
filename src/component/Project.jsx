import React from 'react'
import { GitBranchPlus, ExternalLink } from "lucide-react";

const Project = () => {

  return (
    <section id="projects" className="p-5 py-16 bg-gray-100">

      {/* Title */}
      <h1 className="text-center text-3xl font-bold underline decoration-4 underline-offset-8 decoration-blue-500 mb-14">
        Projects
      </h1>

      {/* wrapper */}
      <div className="flex flex-col gap-10">

        {/* Card 1 */}
<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden 
hover:shadow-2xl hover:-translate-y-1 transition duration-300">

  <img src="/novashare.png" alt="NovaShare"  className="w-full h-56 object-cover blur-[2px] scale-105" />

  <div className="p-6">

    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold">
        NovaShare (Secure File Sharing Platform)
      </h2>

      <div className="flex gap-3">
        <a href={"https://github.com/elamaran-gh/Nova-Share"} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:shadow-md hover:scale-105 transition">
          <GitBranchPlus size={18} />
          <span className="text-sm">Code</span>
        </a>

        <a href={"https://nova-share-tau.vercel.app"} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:shadow-md hover:scale-105 transition">
          <ExternalLink size={18} />
          <span className="text-sm">Live</span>
        </a>
      </div>
    </div>

    <p className="text-gray-600 mb-4 leading-relaxed">
      Developed a full-stack secure file sharing web application using React.js, Node.js, Express, and integrated Groq's Llama 3.3 AI for intelligent file search and summarization. Users can register, upload files to the cloud, and share them via unique short links with optional password protection. Features a personal dashboard with AI-powered smart search, file summarization, upload statistics, file management, and a profile section. Built with JWT-based authentication, Cloudinary for cloud storage, and MongoDB for persistent data management.
    </p>

    <p className="text-green-600 font-medium mb-4">
      ✔ Enables users to securely upload, manage, and share files with anyone via protected short links
    </p>

    <div className="flex flex-wrap gap-3">
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React</span>
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Tailwind CSS</span>
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Redux Toolkit</span>
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Node.js</span>
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Express.js</span>
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">MongoDB</span>
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Cloudinary</span>
      <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">JWT</span>
    </div>

  </div>
</div>

        {/* Card 2 */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden 
hover:shadow-2xl hover:-translate-y-1 transition duration-300">

          <img src="/dailydesk.png" alt="DailyDesk" className="w-full h-56 object-cover blur-[2px] scale-105" />

          <div className="p-6">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                DailyDesk
              </h2>

              <div className="flex gap-3">
                <a href={"https://github.com/elamaran-gh/Daily-Desk"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <GitBranchPlus size={18} />
                  <span className="text-sm">Code</span>
                </a>

                <a href={"https://daily-desk-mu.vercel.app"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
             Built a full-stack MERN personal journal app with a RAG-based AI assistant that answers questions about your journal entries using semantic search. Features JWT authentication with HTTP-only cookies, Redux Toolkit (RTK Query) for state management, and MongoDB for persistent storage. Integrated Qdrant vector database and OpenRouter LLM to enable context-aware journal querying with zero hallucination.
            </p>

            <p className="text-green-600 font-medium mb-4">
              ✔ Enables users to securely document and manage personal journal entries with encrypted authentication
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">DaisyUI</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Node.js</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Express.js</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Redux Toolkit (RTK Query)</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">JWT</span>
            </div>

          </div>
        </div>

        {/* Card 3  */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden 
        hover:shadow-2xl hover:-translate-y-1 transition duration-300">

          <img src="/resumind.png" alt="AI Resume Analyzer"  className="w-full h-56 object-cover blur-[2px] scale-105" />

          <div className="p-6">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                AI-Resume Analyzer
              </h2>

              <div className="flex gap-3">
                <a href={"https://github.com/elamaran-gh/ai-resume-analyzer-"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <GitBranchPlus size={18} />
                  <span className="text-sm">Code</span>
                </a>

                <a href={"https://ai-resume-analyzer-pied-one.vercel.app"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
               Developed an AI-powered Resume Analyzer using React.js, Tailwind CSS, and Puter AI integration. Users upload resumes and receive intelligent feedback tailored to specific job descriptions. Analyzes strengths, weaknesses, and provides actionable improvement suggestions to enhance job readiness. Implemented multi-page navigation using React Router with a clean, responsive UI.
            </p>

            <p className="text-green-600 font-medium mb-4">
              ✔ Enables users to improve resumes with AI-driven insights and job matching
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Zustand</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React Router</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Puter AI</span>
            </div>

          </div>
        </div>

        {/* Card 4 */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden 
        hover:shadow-2xl hover:-translate-y-1 transition duration-300">

          <img src="/credix.png" alt="Credix-Sphere"  className="w-full h-56 object-cover blur-[2px] scale-105"/>

          <div className="p-6">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Credix-Sphere
              </h2>

              <div className="flex gap-3">
                <a href={"https://github.com/elamaran-gh/Credix-sphere"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <GitBranchPlus size={18} />
                  <span className="text-sm">Code</span>
                </a>

                <a href={"https://credix-sphere.vercel.app"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Developed a CreditBook web application for small grocery store owners to digitally manage customer credit transactions. The system replaces traditional notebooks by allowing shop owners to track credits, payments, and outstanding balances in a simple dashboard. Built with protected routes to ensure only the owner can access and manage financial data.
            </p>

            <p className="text-green-600 font-medium mb-4">
              ✔  Enables shop owners to track customer credits, payments, and balances efficiently
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React Router</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Firebase(Authentication & Firestore)</span>
            </div>

          </div>
        </div>

        {/* Card 5 */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden 
        hover:shadow-2xl hover:-translate-y-1 transition duration-300">

          <img src="/govpath.png" alt="Aspirant Compass"  className="w-full h-56 object-cover blur-[2px] scale-105" />

          <div className="p-6">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Aspirant Compass (AI-based Government Exam Guidance System)
              </h2>

              <div className="flex gap-3">
                <a href={"https://github.com/elamaran-gh/Aspirant-Compass"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <GitBranchPlus size={18} />
                  <span className="text-sm">Code</span>
                </a>

                <a href={"https://gov-guide-blush.vercel.app"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Developed an AI-powered web application that helps government job aspirants (TNPSC, SSC, Banking, Railways) gain clarity on exam selection, follow structured preparation roadmaps, and track daily progress. The platform provides personalized exam recommendations based on user profile and generates AI-driven study plans to guide beginners effectively.
            </p>

            <p className="text-green-600 font-medium mb-4">
              ✔  Guides government job aspirants from confusion to clarity with AI-powered exam selection and preparation tracking
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React Router</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">OpenAI API</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Firebase(Authentication & Firestore)</span>
            </div>

          </div>
        </div>

        {/* Card 6 */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden 
        hover:shadow-2xl hover:-translate-y-1 transition duration-300">

          <img src="/weather.png" alt="Weather App" className="w-full h-56 object-cover blur-[2px] scale-105" />

          <div className="p-6">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                Weather App
              </h2>

              <div className="flex gap-3">
                <a href={"https://github.com/elamaran-gh/weather-app-v2/tree/main"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <GitBranchPlus size={18} />
                  <span className="text-sm">Code</span>
                </a>

                <a href={"https://weather-app-v2-flax.vercel.app"} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-600 rounded-lg hover:shadow-md hover:scale-105 transition">
                  <ExternalLink size={18} />
                  <span className="text-sm">Live</span>
                </a>
              </div>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Developed a beginner-friendly Weather App using React and Tailwind CSS, integrated with the OpenWeather API. Users can search for any city and get real-time weather details like temperature, humidity, and conditions. Implemented API handling, error management, and responsive UI for a smooth user experience.
            </p>

            <p className="text-green-600 font-medium mb-4">
              ✔ Displays real-time weather data with clean and responsive design
              React Tailwind CSS OpenWeather API
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">React</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-sm">OpenWeather API</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Project;