export default function Skills() {
    const skills = [
    {
      title: "DATA VISUALIZATION",
      tech: "Power BI | Tableau | DAX",
      desc: "Designing interactive dashboards to track KPIs and resource utilization."
    },
    {
      title: "DATA SCIENCE & NLP",
      tech: "Python | Pandas | NLTK",
      desc: "Building data pipelines and extracting insights from unstructured text."
    },
    {
      title: "DIGITAL TRANSFORMATION",
      tech: "Tech Consulting | Strategy | Architecture",
      desc: "Bridging the gap between technical infrastructure and business goals."
    },
    {
      title: "FULL-STACK DEV",
      tech: "React | Tailwind | Node.js",
      desc: "Developing complete, responsive web applications like mood-tracking journals."
    }
  ];

  return (
    <section className="bg-white py-16 px-10 md:px-24">
        <div className="text-center mb-12">
            <h2 className="text-2xl font-extrabold text-[#374375] tracking-wide uppercase">Skills</h2>
            <div className="w-12 h-1 bg-[#895159] mx-auto mt-4"></div>
        </div>

        {/* 4-Block Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="border border-gray-200 p-6 flex flex-col items-center text-center hover:border-[#374375] transition">
            {/* Simple decorative icon box */}
            <div className="w-12 h-12 bg-[#BABDE2] flex items-center justify-center text-[#374375] font-bold mb-4">
              {index + 1}
            </div>
            <h3 className="font-bold text-[#374375] text-sm mb-2">{skill.title}</h3>
            <span className="text-xs font-semibold text-[#895159] mb-3">{skill.tech}</span>
            <p className="text-xs text-gray-500 leading-relaxed">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}