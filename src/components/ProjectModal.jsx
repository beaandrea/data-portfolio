import { useState, useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsVisible(true));
    });

    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!project) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 400); // Wait for exit animation
  };

  const nextImage = () => setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    // 1. The Outer Overlay (Fades in)
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-azurite/40 backdrop-blur-sm transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* 2. The Main Modal Box (Slides up) */}
      <div className={`relative w-full max-w-[85rem] h-[95vh] md:h-[90vh] bg-grid-pattern rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-200 transition-all duration-400 delay-75 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

        {/* Global Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-6 right-6 z-50 bg-white text-azurite hover:bg-earth hover:text-white w-12 h-12 flex items-center justify-center rounded-full font-bold shadow-sm border border-gray-100 transition-all duration-300 hover:rotate-90 hover:scale-110"
        >
          ✕
        </button>

        {/* LEFT PANEL */}
        <div className="w-full lg:w-[55%] relative flex items-center justify-center h-[40vh] lg:h-full overflow-hidden bg-lapis/5">
          {project.images && project.images.length > 0 ? (
            project.images.map((img, index) => {
              const numImages = project.images.length;
              const isCurrent = index === currentImgIndex;
              const isPrev = index === (currentImgIndex - 1 + numImages) % numImages;
              const isNext = index === (currentImgIndex + 1) % numImages;

              let positionClasses = "opacity-0 scale-75 z-0 pointer-events-none"; 

              if (isCurrent) {
                positionClasses = "z-30 scale-100 opacity-100 translate-x-0 border-4 border-white rounded-xl";
              } else if (numImages === 2 && isNext) {
                positionClasses = "z-20 scale-90 opacity-40 translate-x-[25%] cursor-pointer hover:opacity-70 rounded-xl";
              } else if (numImages > 2) {
                if (isPrev) positionClasses = "z-20 scale-90 opacity-40 -translate-x-[25%] cursor-pointer hover:opacity-70 rounded-xl";
                if (isNext) positionClasses = "z-20 scale-90 opacity-40 translate-x-[25%] cursor-pointer hover:opacity-70 rounded-xl";
              }

              return (
                <img 
                  key={index}
                  src={img} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  onClick={() => {
                    if (isPrev) prevImage();
                    if (isNext) nextImage();
                  }}
                  className={`absolute max-w-[80%] max-h-[80%] object-contain transition-all duration-700 ease-in-out ${positionClasses}`} 
                />
              );
            })
          ) : (
            <span className="text-azurite/50 font-bold tracking-widest uppercase text-sm">No Screenshots Available</span>
          )}

          {/* Dots Indicator */}
          {project.images && project.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-40">
              {project.images.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentImgIndex ? 'bg-earth w-6' : 'bg-azurite/20'}`}></div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-[45%] h-full overflow-y-auto bg-white/70 backdrop-blur-md p-10 sm:p-14 border-l border-white/50">
          
          <div className="pr-4"> {/* Padding so scrollbar doesn't clip the text */}
            <span className="text-sm font-extrabold text-earth uppercase tracking-widest mb-3 block mt-2">
              {project.category}
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-azurite mb-8 leading-tight">
              {project.title}
            </h2>

            <div className="bg-white border-l-4 border-earth p-6 mb-10 rounded-r-2xl shadow-sm">
              <span className="text-xs font-extrabold text-earth uppercase tracking-wider block mb-2">
                💡 Key Finding
              </span>
              <span className="text-lg text-azurite font-bold leading-snug block">
                {project.keyFinding}
              </span>
            </div>

            <h3 className="text-xl font-bold text-azurite mb-4 border-b border-gray-100 pb-2">The Business Scenario</h3>
            <p className="text-gray-600 leading-relaxed mb-10 text-base">
              {project.scenario}
            </p>

            <h3 className="text-xl font-bold text-azurite mb-4 border-b border-gray-100 pb-2">Execution & Insights</h3>
            <ul className="list-disc pl-5 mb-12 text-gray-600 space-y-4 text-base">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="leading-relaxed marker:text-earth">{bullet}</li>
              ))}
            </ul>

            <div className="flex justify-start pb-8">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="bg-azurite hover:bg-earth text-white px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition shadow-sm flex items-center gap-2">
                  View on GitHub ➔
                </a>
              ) : (
                <span className="bg-gray-100 text-gray-500 border border-gray-200 px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase shadow-inner cursor-not-allowed">
                  Proprietary / No Repo
                </span>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}