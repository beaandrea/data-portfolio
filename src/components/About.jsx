import gradImg from '../assets/graduation_pic.jpg'; 

export default function About() {
    return (
        <section id="about" className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                <div className="md:col-span-5 bg-white rounded-[2rem] p-4 shadow-sm border border-gray-100 flex flex-col justify-center items-center">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-azurite relative min-h-[300px]">
                        <img 
                            src={gradImg} 
                            alt="Bea Gamilong" 
                            className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition duration-500"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-2 bg-earth"></div>
                    </div>
                </div>

                <div className="md:col-span-7 bg-azurite rounded-[2rem] p-10 md:p-14 shadow-md flex flex-col justify-center text-white relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-lapis rounded-full blur-3xl opacity-50"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-extrabold text-earth tracking-wide mb-6">
                            About Me
                        </h2>

                        {/* FIXED: Graduation Status */}
                        <p className="text-gray-200 leading-relaxed mb-10 text-lg">
                            I'm a Computer Science senior graduating June 2026, specializing in Data Science at the University of Santo Tomas. My focus is operational business intelligence. I spent my internship at KPMG Philippines analyzing workforce data for a Big 4 consulting team, building dashboards that reached Partner level and got flagged for cross-departmental rollout. I'm looking for data analyst roles where clean data and honest analysis actually change how decisions get made.
                        </p>

                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-4 bg-lapis p-4 rounded-2xl">
                                <div className="w-8 h-8 rounded-full bg-earth flex items-center justify-center text-azurite font-bold text-sm shadow-sm">✓</div>
                                <span className="text-base text-white font-medium tracking-wide">Power BI, DAX & Tableau Expert</span>
                            </div>
                            <div className="flex items-center gap-4 bg-lapis p-4 rounded-2xl">
                                <div className="w-8 h-8 rounded-full bg-earth flex items-center justify-center text-azurite font-bold text-sm shadow-sm">✓</div>
                                <span className="text-base text-white font-medium tracking-wide">SQL, Python & Operational Data Analytics</span>
                            </div>
                            <div className="flex items-center gap-4 bg-lapis p-4 rounded-2xl">
                                <div className="w-8 h-8 rounded-full bg-earth flex items-center justify-center text-azurite font-bold text-sm shadow-sm">✓</div>
                                <span className="text-base text-white font-medium tracking-wide">Microsoft Power Platform & AI Workflows</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}