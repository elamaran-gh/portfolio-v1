import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-section bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
         <p className="text-sm text-white">
          © {new Date().getFullYear()} Elamaran. All rights reserved.
        </p>
        </div>

    </footer>
  )
}

export default Footer