export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-10 px-6 md:px-10 flex justify-center scroll-mt-32">
      <div className="w-full max-w-7xl bg-white rounded-[2.5rem] p-10 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text */}
        <div className="md:w-3/5">
          <span className="text-earth font-extrabold tracking-widest uppercase text-sm mb-4 block">
            Data Analyst
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-azurite leading-tight mb-6">
            Turning complex data into <span className="text-lapis">clear decisions.</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
            I analyze complex operational data, surface the findings that matter, and translate them into executive-ready dashboards that change how decisions get made.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#work" className="bg-azurite hover:bg-earth text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition shadow-md">
              View Portfolio
            </a>
            <a href="#contact" className="bg-transparent border-2 border-azurite text-azurite hover:bg-azurite hover:text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Abstract Custom "Bento Dashboard" Visual */}
        <div className="md:w-2/5 flex justify-center relative">
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-lapis rounded-full blur-[90px] opacity-20"></div>
            
            {/* The Main Container */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-parchment rounded-[2.5rem] border-8 border-white shadow-xl p-6 flex flex-col justify-between relative z-10 overflow-hidden group">
                
                {/* Abstract Header / Top Nav */}
                <div className="flex justify-between items-center w-full mb-4">
                    <div className="w-1/3 h-3 bg-earth/40 rounded-full"></div>
                    <div className="w-1/4 h-3 bg-gray-200 rounded-full"></div>
                </div>

                {/* Floating "Donut Chart" Card */}
                <div className="absolute top-12 right-6 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100 group-hover:-translate-y-1 transition duration-500">
                   <div className="w-8 h-8 border-[5px] border-lapis border-t-earth rounded-full"></div>
                </div>

                {/* Abstract Bar Chart */}
                <div className="flex items-end justify-between gap-3 h-32 mt-auto border-b-2 border-gray-200/50 pb-2">
                    <div className="w-full h-[40%] bg-macaw/60 rounded-t-xl group-hover:h-[45%] transition-all duration-500"></div>
                    <div className="w-full h-[70%] bg-lapis/80 rounded-t-xl group-hover:h-[80%] transition-all duration-500 delay-75"></div>
                    <div className="w-full h-[50%] bg-topaz/60 rounded-t-xl group-hover:h-[40%] transition-all duration-500 delay-100"></div>
                    
                    {/* The "Highlight" Bar */}
                    <div className="w-full h-[90%] bg-azurite rounded-t-xl relative group-hover:h-[100%] transition-all duration-500 delay-150">
                        {/* Glowing dot on top of the highest bar */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-earth rounded-full shadow-[0_0_12px_rgba(213,162,94,0.8)]"></div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  )
}