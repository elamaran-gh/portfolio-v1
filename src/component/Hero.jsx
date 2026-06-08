import React from 'react'

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
        >
            <div className="text-center max-w-2xl">

                {/* Greeting */}
                <h4 className="text-gray-500 text-sm sm:text-base mb-2">
                    Hi there, I'm 👋
                </h4>

                {/* Name */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-3 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                text-transparent bg-clip-text">
                    ELAMARAN M
                </h1>

                {/* Role */}
                <h2 className="text-xl sm:text-2xl text-gray-700 mb-4">
                    Full Stack MERN Developer
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    A beginner fullstack developer learning React and Node.js and continuously
                    improving through real-world projects.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center gap-4">

                    {/* Resume Button */}
                    <a
                        href="/Elamaran_CV.pdf" target="_blank" rel="noopener noreferrer"
                        className="group relative flex items-center gap-2 px-6 py-3 
                        bg-gradient-to-r from-blue-500 to-purple-500 
                        text-white rounded-xl font-medium overflow-hidden
                        transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >

                        {/* Glow Effect */}
                        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

                        {/* Icon */}
                        <img
                            src="/download.png"
                            alt="Resume"
                            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-y-1"
                        />

                        {/* Text */}
                        <span className="relative z-10">Resume</span>
                    </a>

                    {/* Contact Button */}
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-5 py-2.5 
                        bg-white text-blue-600 border border-gray-300 
                        rounded-lg font-medium 
                        hover:shadow-md hover:scale-105 transition"
                    >
                        <img src="/mailbox.png" alt="contact" className="w-4 h-4" />
                        Contact
                    </a>

                </div>
            </div>
        </section>
    )
}

export default Hero
