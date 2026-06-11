import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-10 sm:py-12 px-4">

      <div className="max-w-lg mx-auto text-center">

        <h1 className="text-2xl sm:text-3xl font-bold underline decoration-4 decoration-blue-500 underline-offset-6 mb-6">
          Get In Touch
        </h1>

        <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
          I'm open to new opportunities and exciting projects — let's connect and build something great together!
        </p>

        <div className="flex flex-col gap-3">

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <a href="mailto:elamaran@gmail.com" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:shadow-lg hover:-translate-y-0.5 transition duration-200">
              <img src="/gmail.png" alt="email" className="w-5 h-5 shrink-0" />
              <span className="font-semibold text-gray-700 text-sm">Email</span>
              <span className="text-gray-400 text-sm ml-auto">elamaran@gmail.com</span>
            </a>
          </div>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <a href="https://github.com/elamaran-gh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:shadow-lg hover:-translate-y-0.5 transition duration-200">
              <img src="/github.png" alt="github" className="w-5 h-5 shrink-0" />
              <span className="font-semibold text-gray-700 text-sm">GitHub</span>
              <span className="text-gray-400 text-sm ml-auto">elamaran-gh</span>
            </a>
          </div>

          <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <a href="https://www.linkedin.com/in/elamaranm/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 hover:shadow-lg hover:-translate-y-0.5 transition duration-200">
              <img src="/linkedin.png" alt="linkedin" className="w-5 h-5 shrink-0" />
              <span className="font-semibold text-gray-700 text-sm">LinkedIn</span>
              <span className="text-gray-400 text-sm ml-auto">ELAMARAN M</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact