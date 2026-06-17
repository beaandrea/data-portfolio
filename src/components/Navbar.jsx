import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6 md:px-10 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex justify-between items-center py-4 px-8 w-full max-w-6xl bg-white/90 backdrop-blur-md text-azurite shadow-sm border border-gray-100 rounded-full">
        
        <Link to="/" className="font-extrabold text-xl tracking-widest uppercase hover:text-earth transition">
          Bea Gamilong
        </Link>
        
        {/* FIXED: Swapped <a> tags for <Link to="..."> components to handle SPA routing */}
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-wide">
          <Link to="/#home" className="hover:text-earth transition">HOME</Link>
          <Link to="/#about" className="hover:text-earth transition">ABOUT ME</Link>
          <Link to="/#work" className="hover:text-earth transition">WORK</Link>
          <Link to="/#contact" className="hover:text-earth transition">CONTACT</Link>
        </div>
      </nav>
    </div>
  )
}