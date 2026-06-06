import aegisImg from '../assets/aegis_dashboard.png';

export default function Portfolio() {
  const projects = [
    {
      title: "FY23 Workforce Utilization Analysis - Aegis GBS",
      category: "Python, SQL, Power BI",
      description: "Analyzed 550k+ HR records to uncover $4.4M in avoidable overtime costs, delivering a cost-neutral hiring recommendation to address chronic understaffing.",
      image: aegisImg,
      link: "https://github.com/beaandrea/aegis_workforce_capacity.git"
    },
    {
      title: "Literary Time Machine",
      category: "NLP & Python",
      description: "An NLP pipeline analyzing over 500,000 words of unstructured text to extract thematic and temporal insights.",
      image: null,
      link: "#"
    },
    {
      title: "Smart Journal",
      category: "Full-Stack Development",
      description: "A comprehensive web application featuring integrated mood-tracking functionality and a responsive user interface.",
      image: null,
      link: "#"
    },
    {
      title: "KPMG Ace the Case",
      category: "Technology Consulting",
      description: "Strategic case study competition focusing on digital transformation, architecture, and actionable business intelligence.",
      image: null,
      link: "#"
    },
    {
      title: "Sales Forecasting Model",
      category: "Predictive Analytics",
      description: "Time-series forecasting model built to predict quarterly revenue trends and optimize future planning.",
      image: null,
      link: "#"
    },
    {
      title: "Customer Segmentation",
      category: "Tableau Visualization",
      description: "Interactive dashboard clustering customer behaviors to identify key demographics and drive targeted campaigns.",
      image: null,
      link: "#"
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
            
            {/* Image Handling Area */}
            <div className="w-full aspect-video bg-[#BABDE2] flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              ) : (
                <span className="text-[#374375] font-semibold text-sm">[ Dashboard / UI Image Here ]</span>
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
              
              {/* This is now an anchor tag that links to your GitHub Repo */}
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

      <div className="flex justify-center">
        <button className="bg-[#374375] hover:opacity-90 text-[#FFFCF5] px-10 py-4 font-bold text-sm tracking-widest uppercase transition">
          View All Projects
        </button>
      </div>
    </section>
  )
}