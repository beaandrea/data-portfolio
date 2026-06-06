import gradImg from '../assets/graduation_pic.jpg';

export default function About() {
    return (
        <section id="about" className="bg-white py-20 px-10 md:px-24 flex flex-col md:flex-row items-center gap-16">

            {/* Left Column: Image Box */}
            <div className="w-full md:w-1/2 flex justify-end">
                {/* Swapped the empty box for your actual graduation image! */}
                <img 
                    src={gradImg} 
                    alt="Bea Gamilong" 
                    className="w-3/4 aspect-square object-cover border-l-8 border-b-8 border-[#374375] shadow-lg"
                />
            </div>

            {/* Right Column: Text & Checklist */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-extrabold text-[#374375] tracking-wide uppercase mb-2">About Me</h2>
                <div className="w-12 h-1 bg-[#895159] mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-8">
                    I'm a Computer Science graduate specializing in Data Science at the University of Santo Tomas. My focus is operational business intelligence. I spent my internship at KPMG Philippines analyzing workforce data for a Big 4 consulting team, building dashboards that reached Partner level and got flagged for cross-departmental rollout. I'm looking for data analyst roles where clean data and honest analysis actually change how decisions get made.
                </p>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 border-2 border-[#374375] flex items-center justify-center text-[#374375] font-bold">✓</div>
                        <span className="text-sm text-gray-700 font-medium">Power BI, DAX & Tableau Expert</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 border-2 border-[#374375] flex items-center justify-center text-[#374375] font-bold">✓</div>
                        <span className="text-sm text-gray-700 font-medium">SQL, Python & Operational Data Analytics</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 border-2 border-[#374375] flex items-center justify-center text-[#374375] font-bold">✓</div>
                        <span className="text-sm text-gray-700 font-medium">Technology Consulting & Enterprise BI Delivery</span>
                    </div>
                </div>
            </div>
        </section>
    )
}