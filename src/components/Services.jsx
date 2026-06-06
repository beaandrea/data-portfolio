export default function Services() {
    return (
        <section id="services" className="bg-[#FFFCF5] py-20 px-10 md:px-24">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-[#374375] tracking-wide uppercase">What I do</h2>
                <div className="w-12 h-1 bg-[#895159] mx-auto mt-4"></div>
            </div>

            {/* 3-column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Section 1 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[4/3] bg-[#BABDE2] mb-6"></div>
                    <h3 className="font-bold text-[#374375] text-lg mb-3 uppercase tracking-wide">Business Intelligence</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        I design and develop interactive visualization dashboards using Power BI, DAX, Tableau to track resource utilization and monitor key performance indicators.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[4/3] bg-[#BABDE2] mb-6"></div>
                    <h3 className="font-bold text-[#374375] text-lg mb-3 uppercase tracking-wide">Data Modeling & NLP</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        I build rebust data pipelines using Python, specializaing in transforming massive datasets and extracting actionable insights from unstructured text.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[4/3] bg-[#BABDE2] mb-6"></div>
                    <h3 className="font-bold text-[#374375] text-lg mb-3 uppercase tracking-wide">Digital Transformation</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        I leverage technology consulting experience to bridge the gap between complex technical architectures and strategic business objectives.
                    </p>
                </div>
            </div>
        </section>
    )
}