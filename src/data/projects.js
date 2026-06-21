/* IMPORTS */

/* --- AEGIS --- */
import aegisImg from '../assets/images/01_aegis/aegis_dashboard.png';
/* --- MERIDIAN --- */
import meridianImg1 from '../assets/images/02_meridian/page1_territory.png';
import meridianImg2 from '../assets/images/02_meridian/page2_utilization.png';
import meridianImg3 from '../assets/images/02_meridian/page3_roi.png';
/* --- LITERARY --- */
import literaryImg1 from '../assets/images/03_literary/emotional_arc.png';
import literaryImg2 from '../assets/images/03_literary/diversity.png';
import literaryImg3 from '../assets/images/03_literary/literary_map.png';
import literaryImg4 from '../assets/images/03_literary/sentiment_arc.png';
/* --- SMART JOURNAL --- */
import journalImg1 from '../assets/images/04_journal/smart_journal1.png';
import journalImg2 from '../assets/images/04_journal/smart_journal2.png';
/* --- KPMG EVA --- */
import kpmgImg1 from '../assets/images/05_kpmg/kpmg_eva1.png';
import kpmgImg2 from '../assets/images/05_kpmg/kpmg_eva2.png';

export const allProjectsData = [
  {
    id: "aegis",
    title: "Aegis GBS: Workforce Optimizer",
    category: "Python, SQL, Power BI",
    description: "Analyzed 550k+ HR records to deliver a cost-neutral hiring strategy and eliminate structural waste.",
    keyFinding: "$4.4M in avoidable overtime costs identified",
    images: [aegisImg],
    badge: null,
    link: "https://github.com/beaandrea/aegis-workforce-capacity",
    tags: ['All', 'Operations Analytics', 'Power BI', 'Python & SQL', 'Data Analytics'],
    scenario: "Aegis GBS was bleeding $2.53 billion in annual overtime. The executive team was deadlocked: Was this caused by seasonal spikes, or chronic structural understaffing? And what would right-sizing actually cost? I analyzed a 550,000-row legacy HRIS extract to answer these questions and settle the debate.",
    bullets: [
      "Identified $4.4M in avoidable overtime costs isolated to a specific cohort (Stationary Engineers) working mathematically impossible 1,180+ overtime hours.",
      "Cleaned and normalized 550,000+ fragmented legacy union records using Pandas regex dictionaries and SQL to calculate true FTE ROI.",
      "Delivered a cost-neutral restructuring plan via Power BI, proving that wasted premiums could fully fund 15 additional staff members at zero budget cost."
    ]
  },
  {
    id: "meridian",
    title: "Meridian IS: Sales Force Capacity Analytics",
    category: "Business Intelligence & Data Strategy",
    description: "Resolved an executive deadlock over a B2B revenue plateau by proving the cause was internal pipeline concentration, not market conditions, and quantifying a $4.93M unlock opportunity.",
    image: [meridianImg1, meridianImg2, meridianImg3],
    badge: "3-page Dashboard",
    link: "https://github.com/beaandrea/meridian-sales-analytics", // Update with your actual link
    tags: ['All', 'Sales Operations', 'Power BI', 'Python & SQL', 'Data Analytics'],
    scenario: "I analyzed Meridian IS's B2B sales pipeline to identify where territory imbalances and pipeline concentration were stalling revenue, and developed a financial model to determine which executive hypothesis the data actually supported.",
    bullets: [
      "Identified a massive territory imbalance where the Central region carried 50% more volume than the East but generated lower revenue per rep.",
      "Exposed a localized routing bottleneck where a single manager assigned 747 deals to one representative, creating an unsustainable 194-deal active pipeline.",
      "Delivered territory efficiency, rep utilization, and ROI projections to the VP of Sales and Finance Director through a three-page executive Power BI dashboard, enabling the leadership team to act without requiring Finance to approve new headcount."
    ]
  },
  {
    id: "nlp",
    title: "The Literary Time Machine",
    category: "Python & NLP",
    description: "An NLP pipeline that ingests, cleans, and analyzes over 500,000 words of unstructured text to quantify the evolution of literature.",
    keyFinding: "Mathematically mapped the emotional arcs of classic novels using VADER sentiment analysis",
    images: [literaryImg1, literaryImg2, literaryImg3, literaryImg4],
    badge: null,
    link: "https://github.com/beaandrea/literary-time-machine",
    tags: ['All', 'Python & SQL', 'Data Analytics'],
    scenario: "Does human emotion change over centuries? Do we use simpler words today than we did in the 1800s? I built a Data Science pipeline to ingest, clean, and analyze over 500,000 words of unstructured text from Project Gutenberg to answer these questions and quantify the 'shape' of stories.",
    bullets: [
      "Mapped the mathematical 'signature' of literary archetypes, proving that tragedies like Frankenstein steadily crash in sentiment while comedies like Pride and Prejudice consistently trend upward.",
      "Calculated Lexical Diversity across centuries, revealing that text complexity is driven primarily by author style and genre rather than a linear historical degradation.",
      "Evaluated model limitations by analyzing The Great Gatsby, demonstrating that lexicon-based models (VADER) struggle with tragic irony and establishing the use case for context-aware models (BERT)."
    ]
  },
  {
    id: "smart-journal",
    title: "Smart Journal: NLP Sentiment Tracker",
    category: "Python, React, NLP",
    description: "A full-stack application that transforms unstructured daily reflections into trackable time-series data using Natural Language Processing.",
    keyFinding: "Discovered that mathematical sentiment dips often precede conscious burnout",
    images: [journalImg1, journalImg2],
    badge: "Full-Stack Data App",
    link: "https://github.com/beaandrea/smart-journal",
    tags: ['All', 'Software Engineering', 'Python & SQL', 'Data Analytics'],
    scenario: "Most digital diaries treat daily reflections as entirely unstructured text. I engineered a full-stack application with an integrated NLP pipeline to bridge the gap between qualitative reflection and quantitative analysis, extracting latent emotional trends to visualize a user's psychological baseline.",
    bullets: [
      "Engineered a Python/FastAPI backend with an SQLite schema designed specifically for chronological time-series analysis of unstructured text.",
      "Integrated TextBlob NLP pipelines to evaluate lexical polarity, mapping raw journal strings into dynamic trend lines using React and Recharts.",
      "Identified critical model limitations where lexicon-based scoring was masked by 'forced positivity' during stressful events, reinforcing the business case for context-aware models."
    ]
  },
  {
    id: "kpmg",
    title: "KPMG AIC 2026: Project EVA",
    category: "AI & Workflow Automation",
    description: "Architected an autonomous AI orchestrator using Microsoft Power Platform to transform unstructured syllabi into proactive, conflict-aware study schedules.",
    keyFinding: "Engineered a strict 'Human-in-the-Loop' AI architecture with transparent reasoning logs",
    images: [kpmgImg1, kpmgImg2],
    badge: "Hackathon",
    link: null,
    tags: ['All', 'Hackathons & Academic'],
    scenario: "University students experience burnout because tracking requirements across unstructured syllabi is a reactive, manual process. For the 2026 KPMG Academic Innovation Challenge, my team built Educational Virtual Assistant (EVA) to proactively identify deadline conflicts and act as an intelligent bridge between course materials and personal productivity.",
    bullets: [
      "Designed the system architecture and relational schema in Dataverse to support a multi-step reasoning engine powered by Power Automate and Microsoft Copilot Studio.",
      "Developed a custom Power Apps dashboard featuring an 'Agent Reasoning Log' and a strict 'Human-in-the-Loop' approval gate, requiring explicit user review before calendar synchronization.",
      "Integrated Microsoft AI Builder to extract unstructured syllabus data from OneDrive, instantly transforming static PDF deadlines into chronological, conflict-flagged Dataverse records."
    ]
  }
];