import { useState } from 'react';
import { Link } from 'react-router-dom';
import { allProjectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = allProjectsData.slice(0, 3);
  const filters = ['All', 'Power BI', 'Python & SQL', 'Operations Analytics', 'Sales Analytics'];
  const filteredProjects = featuredProjects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="work" className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-azurite tracking-wide uppercase">Work</h2>
        <div className="w-12 h-1 bg-earth mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 text-sm font-bold rounded-full transition duration-300 border-2 
              ${activeFilter === filter 
                ? 'bg-azurite text-white border-azurite shadow-md' 
                : 'bg-white text-azurite border-white hover:border-azurite shadow-sm'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition duration-300 flex flex-col group">
            
            <div className="w-full aspect-video bg-lapis flex items-center justify-center overflow-hidden relative">
              {project.images && project.images.length > 0 ? (
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100" />
              ) : (
                <span className="text-white font-semibold text-sm">[ Dashboard Image ]</span>
              )}
              {project.badge && (
                <div className="absolute top-4 right-4 bg-azurite text-earth text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md border border-white/10">
                  {project.badge}
                </div>
              )}
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-xs font-extrabold text-earth uppercase tracking-wider mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-azurite mb-4 leading-tight">
                {project.title}
              </h3>

              <div className="bg-parchment border-l-4 border-earth p-4 mb-5 rounded-r-lg">
                <span className="text-[10px] font-extrabold text-earth uppercase tracking-wider block mb-1">
                  💡 Key Finding
                </span>
                <span className="text-sm text-azurite font-bold">
                  {project.keyFinding}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <button 
                onClick={() => setSelectedProject(project)}
                className="self-start text-azurite font-bold text-sm border-b-2 border-earth hover:text-earth transition pb-1 cursor-pointer uppercase tracking-wider"
              >
                View Case Study ➔
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 mt-8">
        <Link to="/projects" className="bg-azurite hover:bg-earth text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition shadow-md">
          View All Projects
        </Link>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}