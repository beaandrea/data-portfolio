import emailImg from '../assets/email_icon.png';
import githubImg from '../assets/github_icon.png';
import linkedinImg from '../assets/linkedin_icon.png';

export default function Contact() {
  return (
    <footer id="contact" className="w-full pb-10">
      
      {/* Call to Action Banner */}
      <div className="bg-azurite rounded-[2.5rem] p-16 mx-6 md:mx-10 mb-10 relative overflow-hidden text-center shadow-xl border border-lapis">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lapis rounded-full blur-[80px] opacity-50"></div>
        
        <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-8 leading-tight">
            Have a project in mind? <br className="hidden md:block" /> Let's build <span className="text-earth">something great together.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:beaandreagamilong@gmail.com?subject=Reaching%20out%20from%20your%20Portfolio" className="bg-earth hover:bg-white text-azurite px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition shadow-md">
                Email Me
            </a>
            <a href="#work" className="bg-transparent border-2 border-earth hover:bg-earth text-earth hover:text-azurite px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition">
                View My Work
            </a>
            </div>
        </div>
      </div>

      <div className="px-10 md:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-extrabold text-azurite tracking-widest uppercase mb-1">
            Bea Gamilong
          </h3>
          <div className="inline-block bg-lapis text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-3">
            Data Analyst
          </div>
          <p className="text-xs text-gray-500 font-medium">© {new Date().getFullYear()} Bea Andrea P. Gamilong. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-azurite">
          <a href="mailto:beaandreagamilong@gmail.com?subject=Reaching%20out%20from%20your%20Portfolio" className="hover:text-earth transition flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <img src={emailImg} alt="Email Icon" className="w-5 h-5 object-contain" /> 
            Email
          </a>
          <a href="https://github.com/beaandrea" target="_blank" rel="noreferrer" className="hover:text-earth transition flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <img src={githubImg} alt="GitHub Icon" className="w-5 h-5 object-contain" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bea-andrea-gamilong" target="_blank" rel="noreferrer" className="hover:text-earth transition flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <img src={linkedinImg} alt="LinkedIn Icon" className="w-5 h-5 object-contain" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}