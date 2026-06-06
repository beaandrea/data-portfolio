export default function Contact() {
  return (
    <footer id="contact" className="w-full">
      {/* Call to Action Banner */}
      <div className="bg-[#BABDE2] py-16 px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#374375] uppercase tracking-wide mb-8">
          Have a project in mind? Let's build<br className="hidden md:block" /> something great together.
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-white hover:bg-gray-100 text-[#374375] px-8 py-3 font-bold text-sm tracking-wide transition">
            HIRE ME
          </button>
          <button className="bg-[#374375] hover:opacity-90 text-white px-8 py-3 font-bold text-sm tracking-wide transition">
            VIEW MY WORK
          </button>
        </div>
      </div>

      {/* Final Footer Details */}
      <div className="bg-white py-10 px-10 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200">
        
        {/* Left Side: Name & Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-extrabold text-[#374375] tracking-widest uppercase mb-1">
            Bea Gamilong
          </h3>
          <div className="inline-block bg-[#374375] text-white px-3 py-1 text-xs font-medium mb-3">
            Data Analyst & Digital Transformation
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Bea Andrea P. Gamilong. All rights reserved.</p>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-col gap-3 text-sm font-semibold text-[#374375]">
          <a href="beaandreagamilong@gmail.com" className="hover:text-[#895159] transition flex items-center gap-2">
            <span>✉</span> Email Me
          </a>
          <a href="https://github.com/beaandrea" target="_blank" rel="noreferrer" className="hover:text-[#895159] transition flex items-center gap-2">
            <span>⌨</span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/bea-andrea-gamilong" target="_blank" rel="noreferrer" className="hover:text-[#895159] transition flex items-center gap-2">
            <span>💼</span> LinkedIn
          </a>
        </div>

      </div>
    </footer>
  )
}