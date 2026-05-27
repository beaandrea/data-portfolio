export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-24 py-20 bg-white">
      
      {/* Left Column: Text & Buttons */}
      <div className="md:w-1/2 flex flex-col gap-4 mt-10 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-900 tracking-wide">Hi There!</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          I'm Bea Andrea<br />P. Gamilong
        </h1>
        
        {/* The dark accent badge from your wireframe */}
        <div className="inline-block bg-gray-800 text-white px-4 py-2 mt-2 mb-4 w-max text-sm font-medium">
          Data Analyst
        </div>
        
        <p className="text-gray-600 leading-relaxed max-w-md">
          I build data-driven solutions, interactive visualization dashboards, and NLP pipelines to help businesses uncover actionable insights and drive growth.
        </p>
        
        {/* Buttons matching the wireframe */}
        <div className="flex gap-4 mt-6">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-8 py-3 font-bold text-sm tracking-wide transition">
            HIRE ME
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-3 font-bold text-sm tracking-wide transition">
            VIEW MY WORK
          </button>
        </div>
      </div>

      {/* Right Column: Image Placeholder */}
      <div className="md:w-1/3 bg-gray-200 w-full aspect-[4/5] border border-gray-300">
        {/* We will swap this gray box for your actual photo later! */}
      </div>

    </section>
  )
}