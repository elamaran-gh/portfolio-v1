import React from 'react'

const About = () => {
    return (
        <section id="about" className="about-section bg-gray-100 py-10 sm:py-12 px-4">

            {/* Gradient Border Wrapper */}
            <div className="max-w-4xl mx-auto p-[2px] 
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                rounded-2xl">

                {/* Card */}
                <div className="bg-white rounded-2xl px-5 sm:px-8 py-8 sm:py-10 
                    shadow-md transition-all duration-300 
                    hover:shadow-xl hover:-translate-y-1">

                    {/* Title */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-center 
                        underline decoration-4 decoration-blue-500 underline-offset-6 sm:underline-offset-8 mb-6 sm:mb-8">
                        About Me
                    </h1>

                    {/* Image */}
                    <img
                        src="/deve.png"
                        alt="Profile"
                        className="w-28 h-28 sm:w-36 sm:h-36 object-cover 
                        rounded-full mx-auto mb-5 sm:mb-6 
                        transition-transform duration-300 hover:scale-105"
                    />

                    {/* Subtitle */}
                    <h2 className="text-center text-base sm:text-lg font-medium mb-3 sm:mb-4">
                        Hello!
                    </h2>

                    {/* Description */}
                    <p className="text-center text-gray-600 text-sm sm:text-base 
                        leading-relaxed space-y-4">
                        I’m a Full Stack MERN Developer building end-to-end web applications with MongoDB, Express, React, and Node.js. I enjoy turning ideas into seamless digital experiences by combining sharp, user-focused interfaces with solid and scalable backend architecture.

                        <br /> <br />

                        I’m also exploring the intersection of web development and AI, looking for ways to build smarter, more adaptive applications. I’m driven by the challenge of solving real-world problems through technology and continuously pushing my skills to create impactful solutions.
                    </p>

                </div>
            </div>

        </section>
    )
}

export default About
   