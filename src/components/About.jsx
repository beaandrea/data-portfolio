export default function About() {
    return (
        <section id="about" className="bg-white py-20 px-10 md:px-24 flex flex-col md:flex-row items-center gap-16">

            {/* Left Column: Image Box */}
            <div className="w-full md:w-1/2 flex justify-end">
                <div className="w-3/4 aspect-square bg-[#DFAEA1] border-l-8 border-b-8 border-[#374375]"></div>
            </div>

            {/* Right Column: Text & Checlist */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-extrabold text-[#374375] tracking-wide uppercase mb-2">About Me</h2>
                <div className="w-12 h-1 bg-[#895159] mb-6"></div>

                <p className="text-gray-600 leading-relaxed mb-8">
                    I am a senior Computer Science student specializing in Data Science at the University of Santo Tomas. With a strong foundation in enterprise consulting and full-stack development, I focus on transforming raw data into structured, strategic insights that help organizations make smarter decisions.
                </p>

                {/* Custom Checklist */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 border-2 border-[#374275] flex items-center justify-center text-[#374375] font-bold">✓</div>
                        <span className="text-sm text-gray-700 font-medium">Power BI, DAX, & Tableau Expert</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 border-2 border-[#374275] flex items-center justify-center text-[#374375] font-bold">✓</div>
                        <span className="text-sm text-gray-700 font-medium">Python & Natural Language Processing</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-6 h-6 border-2 border-[#374275] flex items-center justify-center text-[#374375] font-bold">✓</div>
                        <span className="text-sm text-gray-700 font-medium">Technology Consulting & Digital Transformation</span>
                    </div>
                </div>
            </div>
        </section>
    )
}