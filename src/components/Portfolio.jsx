import aegisImg from '../assets/images/01_aegis/aegis_dashboard.png';
import meridianImg from '../assets/images/02_meridian/page1_territory.png';
import literaryImg from '../assets/images/03_literary/emotional_arc.png';

export default function Portfolio() {
  const projects = [
    {
      title: "Literary Time Machine",
      category: "NLP & Python",
      description: "An NLP pipeline analyzing over 500,000 words of unstructured text to extract thematic and temporal insights.",
      image: literaryImg,
      badge: "Multiple Analysis",
      link: "https://github.com/beaandrea/literary-time-machine.git"
    },
    {
      title: "FY23 Workforce Utilization Analysis - Aegis GBS",
      category: "Python, SQL, Power BI",
      description: "Analyzed 550k+ HR records to uncover $4.4M in avoidable overtime costs, delivering a cost-neutral hiring recommendation to address chronic understaffing.",
      image: aegisImg,
      badge: null,
      link: "https://github.com/beaandrea/aegis_workforce_capacity.git"
    },
    {
      title: "Meridian IS: Sales Force Capacity Analytics",
      category: "Python, SQL, Power BI",
      description: "An executive Power BI dashboard and SQL financial model that identifies pipeline concentration bottlenecks and provides a data-driven strategy to unlock $4.93M in stalled B2B revenue.",
      image: meridianImg,
      badge: "3-Page Dashboard",
      link: "https://github.com/beaandrea/meridian-sales-analytics.git"
    }
  ];

  return (
    <section id="work" className="bg-[#FFFCF5] py-20 px-10 md:px-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-[#374375] tracking-wide uppercase">Portfolio</h2>
        <div className="w-12 h-1 bg-[#895159] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border border-gray-200 hover:shadow-lg transition duration-300 flex flex-col">
            
            {/* Image Handling Area with Badge Logic */}
            <div className="w-full aspect-video bg-[#BABDE2] flex items-center justify-center overflow-hidden relative">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-[#374375] font-semibold text-sm">[ Dashboard / UI Image Here ]</span>
              )}
              
              {/* This renders the sleek dark badge over the image if one exists */}
              {project.badge && (
                <div className="absolute top-4 right-4 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider shadow-md">
                  {project.badge}
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <span className="text-xs font-bold text-[#895159] uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-[#374375] mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="self-start text-[#374375] font-bold text-sm border-b-2 border-[#DFAEA1] hover:text-[#895159] hover:border-[#895159] transition pb-1"
              >
                VIEW PROJECT ➔
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 mt-8">
        <button className="bg-[#374375] hover:opacity-90 text-[#FFFCF5] px-10 py-4 font-bold text-sm tracking-widest uppercase transition">
          View All Data Projects
        </button>
        <a 
          href="https://github.com/beaandrea" 
          target="_blank" 
          rel="noreferrer"
          className="text-sm text-gray-500 border-b border-transparent hover:border-gray-500 transition"
        >
          P.S. Looking for my full-stack web development projects?
        </a>
      </div>
    </section>
  )
}