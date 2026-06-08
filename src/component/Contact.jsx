import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-10 sm:py-12 px-4">

      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold 
        underline decoration-4 decoration-blue-500 underline-offset-6 mb-10">
          Get In Touch
        </h1>

        {/* Contact Cards */}
        <div className="grid gap-6 sm:grid-cols-2">

          {/* Email */}
          <div className="p-[2px] rounded-xl 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            
            <a 
              href="mailto:elamaran@gmail.com"
              className="block bg-white rounded-xl p-6 
              hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex flex-col items-center gap-3">
                <img src="/gmail.png" alt="email" className="w-6 h-6" />
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-gray-500 text-sm break-all">
                  elamaran@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* GitHub */}
          <div className="p-[2px] rounded-xl 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            
            <a 
              href="https://github.com/elamaran-gh"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl p-6 
              hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex flex-col items-center gap-3">
                <img src="/github.png" alt="github" className="w-6 h-6" />
                <p className="font-semibold text-gray-700">GitHub</p>
                <p className="text-gray-500 text-sm">
                  elamaran-gh
                </p>
              </div>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="p-[2px] rounded-xl 
            bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 sm:col-span-2">
            
            <a 
              href="https://www.linkedin.com/in/elamaranm/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-xl p-6 
              hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex flex-col items-center gap-3">
                <img src="/linkedin.png" alt="linkedin" className="w-6 h-6" />
                <p className="font-semibold text-gray-700">LinkedIn</p>
                <p className="text-gray-500 text-sm">
                  ELAMARAN M
                </p>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact