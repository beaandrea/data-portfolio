export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center py-8 px-10 md:px-24 bg-white text-gray-800">
      <div className="font-bold text-xl tracking-widest uppercase">
        Bea Gamilong
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
        <a href="#home" className="hover:text-gray-500 transition">HOME</a>
        <a href="#about" className="hover:text-gray-500 transition">ABOUT ME</a>
        <a href="#work" className="hover:text-gray-500 transition">WORK</a>
        <a href="#contact" className="hover:text-gray-500 transition">CONTACT</a>
      </div>
    </nav>
  )
}