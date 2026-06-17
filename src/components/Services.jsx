export default function Services() {
    return (
        <section id="services" className="py-12 px-6 md:px-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-azurite tracking-wide uppercase">What I do</h2>
                <div className="w-12 h-1 bg-earth mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Service 1 */}
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-md transition duration-300">
                    <div className="mb-6 p-5 bg-parchment rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-lapis" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-azurite text-lg mb-4 uppercase tracking-wide">Business Intelligence</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        I translate operational data into executive Power BI dashboards. I handle the underlying Star Schema modeling and DAX calculations to ensure leadership can make decisions with total confidence.
                    </p>
                </div>

                {/* Service 2 */}
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-md transition duration-300">
                    <div className="mb-6 p-5 bg-parchment rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-lapis" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-azurite text-lg mb-4 uppercase tracking-wide">Data Eng & Analysis</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        I build structured data pipelines using Python and SQL. My core focus is taking messy datasets and transforming them into a reliable foundation for enterprise reporting.
                    </p>
                </div>

                {/* Service 3 */}
                <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-md transition duration-300">
                    <div className="mb-6 p-5 bg-parchment rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-lapis" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-azurite text-lg mb-4 uppercase tracking-wide">AI & Automation</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        I design intelligent systems using Microsoft Copilot Studio, Power Apps, and Power Automate. By applying agentic AI, I help automate operational processes.
                    </p>
                </div>
            </div>
        </section>
    )
}