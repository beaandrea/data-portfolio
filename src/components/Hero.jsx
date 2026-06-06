export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-24 py-20 bg-white">

      {/* Left Column: Text & Buttons */}
      <div className="md:w-1/2 flex flex-col gap-4 mt-10 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-900 tracking-wide">Hi There!</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          I'm Bea Andrea<br />P. Gamilong
        </h1>

        {/* FIXED: Single, focused identity tag */}
        <div className="flex flex-wrap gap-4 mt-2 mb-4">
          <div className="bg-[#DFAEA1] text-gray-900 px-4 py-2 w-max text-sm font-medium">
            Data Analyst
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-md">
          I turn messy operational data into clear, decision-ready insights for enterprise teams — with Big 4 consulting experience and a track record of analysis that reaches senior leadership.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="bg-[#895159] hover:opacity-90 text-[#FFFCF5] px-8 py-3 font-bold text-sm tracking-wide transition">
            HIRE ME
          </button>
          <button className="bg-[#DFAEA1] hover:opacity-90 text-[#374375] px-8 py-3 font-bold text-sm tracking-wide transition">
            VIEW MY WORK
          </button>
        </div>
      </div>

      {/* Right Column: Image Placeholder */}
      <div className="md:w-1/3 bg-gray-200 w-full aspect-[4/5] border border-gray-300">
        {/* Placeholder */}
      </div>

    </section>
  )
}