import React from 'react'

const Skill = () => {
    return (
        <section id="skills" className='skill-section bg-gray-100 py-10 sm:py-12 px-4'>
            <div className='max-w-5xl mx-auto'>

                {/* Title */}
                <h1 className='text-center text-2xl sm:text-3xl font-bold 
                underline decoration-4 decoration-blue-500 underline-offset-6 sm:underline-offset-8 mb-10'>
                    Skills
                </h1>

                {/* Card Wrapper Function Style */}
                {[
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
                ].map((section, index) => (
                    
                    <div key={index} className="mb-8">

                        {/* Gradient Border */}
                        <div className="p-[2px] rounded-xl 
                            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

                            {/* Card */}
                            <div className="bg-white rounded-xl p-5 sm:p-6 
                                transition-all duration-300 
                                hover:shadow-xl hover:-translate-y-1">

                                {/* Section Title */}
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                                    {section.title}
                                </h2>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-3">
                                    {section.skills.map((skill, i) => (
                                        <span 
                                            key={i}
                                            className="px-4 py-1.5 
                                            bg-gray-100 text-blue-600 
                                            rounded-lg text-sm 
                                            hover:bg-blue-500 hover:text-white 
                                            transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    )
}

export default Skill