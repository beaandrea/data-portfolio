import aegisImg from '../assets/images/01_aegis/aegis_dashboard.png';
import meridianImg1 from '../assets/images/02_meridian/page1_territory.png';
import meridianImg2 from '../assets/images/02_meridian/page2_utilization.png';
import meridianImg3 from '../assets/images/02_meridian/page3_roi.png';
import literaryImg from '../assets/images/03_literary/emotional_arc.png';

export const allProjectsData = [
  // 1. AEGIS GOES FIRST!
  {
    id: "aegis",
    title: "Aegis GBS: Workforce Optimizer",
    category: "Python, SQL, Power BI",
    description: "Analyzed 550k+ HR records to deliver a cost-neutral hiring strategy and eliminate structural waste.",
    keyFinding: "$4.4M in avoidable overtime costs identified",
    images: [aegisImg],
    badge: null,
    link: "https://github.com/beaandrea/aegis-workforce-optimizer",
    tags: ['All', 'Operations Analytics', 'Power BI', 'Python & SQL', 'Data Analytics'],
    scenario: "Aegis GBS was bleeding $2.53 billion in annual overtime. I analyzed a 550,000-row legacy HRIS extract to identify the root cause of this structural waste and settle an executive debate between HR and the COO.",
    bullets: [
      "Identified $4.4M in avoidable overtime costs isolated to a specific cohort (Stationary Engineers) working mathematically impossible 1,300+ overtime hours.",
      "Cleaned and normalized 300,000+ fragmented legacy union records using Pandas regex dictionaries and SQL to calculate true FTE ROI.",
      "Delivered a cost-neutral restructuring plan via Power BI, proving that wasted premiums could fully fund 35 net-new staff members."
    ]
  },
  // 2. MERIDIAN IS SECOND
  {
    id: "meridian",
    title: "Meridian IS: Sales Force Capacity Analytics",
    category: "Business Intelligence",
    description: "An executive Power BI dashboard and SQL financial model identifying pipeline bottlenecks.",
    keyFinding: "$4.93M in stalled B2B revenue unlocked",
    images: [meridianImg1, meridianImg2, meridianImg3],
    badge: "3-Page Dashboard",
    link: "https://github.com/beaandrea/meridian-sales-analytics",
    tags: ['All', 'Power BI', 'Sales Analytics', 'Python & SQL', 'Data Analytics'],
    scenario: "I analyzed Meridian IS's B2B sales pipeline to identify where territory imbalances and pipeline concentration were stalling revenue — and built a financial model to prove which executive hypothesis the data actually supported.",
    bullets: [
      // FIXED: Clarified the $4.93M total vs $169K immediate unlock
      "Identified severe pipeline concentration stalling $4.93M in total potential revenue — a single rep holding 194 active deals (2.5x team average) — through SQL analysis of 9,000+ CRM records.",
      "Proved that redistributing 114 stalled deals to underutilized East-region reps could unlock $169K in immediate revenue without requiring Finance to approve new headcount.",
      "Built a three-page executive Power BI dashboard communicating territory efficiency, rep utilization, and ROI projections to the VP of Sales and Finance Director."
    ]
  },
  // 3. NLP DATA
  {
    id: "nlp",
    title: "Literary Time Machine",
    category: "Python, SQL, Data Analysis",
    description: "Analyzed behavioral and sentiment trends across 500,000+ words of multi-period unstructured text.",
    // FIXED: Stronger quantified finding
    keyFinding: "Identified statistically significant sentiment pattern shifts across 500,000+ words using NLP",
    images: [literaryImg],
    badge: "Data Analysis",
    link: "https://github.com/beaandrea/literary-time-machine",
    tags: ['All', 'Python & SQL', 'Data Analytics'],
    scenario: "To understand the quantitative shifts in cultural values, I analyzed behavioral and sentiment trends across 500,000+ words of multi-period unstructured text.",
    bullets: [
      "Discovered significant volatility in thematic metrics by tracking lexical variations across 100+ years of historical data.",
      "Cleaned and processed massive unstructured datasets using Python and NLTK to establish reliable statistical baselines.",
      "Visualized findings through statistical sentiment arcs to prove distinct historical anomalies and shifting emotional trends."
    ]
  },
  // 4. SMART JOURNAL
  {
    id: "smart-journal",
    title: "Smart Journal Application",
    category: "Full-Stack Web Development",
    description: "A comprehensive web application featuring integrated mood-tracking functionality and a responsive user interface.",
    keyFinding: "Deployed a full-stack CRUD application with sub-second load times",
    images: [], 
    badge: "Software Engineering",
    link: "https://github.com/beaandrea",
    tags: ['All', 'Software Engineering'],
    scenario: "Users needed a seamless, responsive way to track daily moods and journal entries. I designed and engineered a full-stack web application to deliver a frictionless, accessible user experience.",
    bullets: [
      "Architected a responsive, component-based front-end using React and Tailwind CSS to ensure cross-device compatibility.",
      "Engineered a secure backend API to handle user authentication and persistent data storage.",
      "Optimized database queries and state management to achieve sub-second load times and seamless UI updates."
    ]
  },
  // 5. KPMG AIC CHALLENGE
  {
    id: "kpmg",
    title: "KPMG AIC Challenge",
    category: "Agentic AI & Workflow Automation",
    description: "Strategic case study competition focusing on digital transformation, architecture, and actionable business intelligence.",
    keyFinding: "Delivered audit-ready Microsoft Copilot Studio architecture",
    images: [], 
    badge: "Hackathons & Academic",
    link: null, 
    tags: ['All', 'Hackathons & Academic'],
    scenario: "Tasked with a strategic enterprise case study, I analyzed a complex digital transformation scenario to deliver audit-ready architecture utilizing Microsoft's AI stack.",
    bullets: [
      "Engineered an automated workflow solution utilizing Copilot Studio, Power Apps, and Dataverse to eliminate manual operational bottlenecks.",
      "Bridged the gap between technical architecture and strategic business objectives, ensuring proposed solutions met Big 4 audit standards.",
      "Presented a roadmap for automated governance and actionable reporting to a panel of executive judges."
    ]
  }
];