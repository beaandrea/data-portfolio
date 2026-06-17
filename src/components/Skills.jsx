export default function Skills() {
  const skills = [
    {
      title: "DATA VISUALIZATION",
      tech: "Power BI | Tableau | DAX",
      desc: "Designing interactive dashboards to track KPIs and resource utilization."
    },
    {
      title: "DATA ENGINEERING & ANALYSIS",
      tech: "Python | Pandas | SQL",
      desc: "Building structured data pipelines and transforming raw datasets into reliable analytical foundations."
    },
    {
      title: "AI & WORKFLOW AUTOMATION",
      tech: "Copilot Studio | Power Automate | Power Apps",
      desc: "Designing intelligent workflow systems and agentic AI assistants using Microsoft's enterprise automation stack."
    },
    {
      title: "FULL-STACK DEV",
      tech: "React | Tailwind | Node.js",
      desc: "Developing complete, responsive web applications and APIs."
    }
  ];

  return (
    <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-azurite tracking-wide uppercase">Skills</h2>
            <div className="w-12 h-1 bg-earth mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white rounded-[2rem] p-8 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-full bg-lapis flex items-center justify-center text-white font-bold mb-5 shadow-inner">
              {index + 1}
            </div>
            <h3 className="font-bold text-azurite text-sm mb-2">{skill.title}</h3>
            <span className="text-xs font-bold text-earth mb-4">{skill.tech}</span>
            <p className="text-xs text-gray-500 leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}