/* IMPORTS */

/* --- AEGIS --- */
import aegisImg from '../assets/images/01_aegis/aegis_dashboard.png';
/* --- MERIDIAN --- */
import meridianImg1 from '../assets/images/02_meridian/page1_territory.png';
import meridianImg2 from '../assets/images/02_meridian/page2_utilization.png';
import meridianImg3 from '../assets/images/02_meridian/page3_roi.png';
/* PRESCOTT-VANCE */
import pvImg1 from '../assets/images/06_prescott-vance/pv_dashboard.png';
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
    description: "Arbitrated an executive dispute between seasonal vs. structural overtime waste and delivered a cost-neutral fix requiring zero new budget.",
    keyFinding: "$4.4M in OT premiums identified as sufficient to fully fund 15 new hires",
    images: [aegisImg],
    badge: null,
    link: "https://github.com/beaandrea/aegis-workforce-capacity",
    tags: ['All', 'Operations Analytics', 'Power BI', 'Python & SQL', 'Data Analytics'],
    scenario: "Aegis GBS was bleeding $2.53 billion in annual overtime. The executive team was deadlocked: Was this caused by seasonal spikes, or chronic structural understaffing? And what would right-sizing actually cost? I analyzed a 550,000-row legacy HRIS extract to answer these questions and settle the debate.",
    bullets: [
      "Identified $4.4M in avoidable overtime costs isolated to a specific cohort (Stationary Engineers) working mathematically impossible 1,180+ overtime hours.",
      "Engineered a Python + SQL cleaning pipeline on 550,000+ fragmented legacy records resolving entity fragmentation across 300,000+ rows to produce the reliable FTE cost model that underpinned the final recommendation.",
      "Delivered a Power BI executive dashboard with a cost-neutral restructuring plan: reallocating $4.4M from the overtime budget to base salaries funds 15 Stationary Engineer hires at zero net-new cost to Finance."
    ]
  },
  {
    id: "meridian",
    title: "Meridian IS: Sales Force Capacity Analytics",
    category: "Python, SQL, Power BI",
    description: "Resolved an executive deadlock over a B2B revenue plateau by proving the cause was internal pipeline concentration, not market conditions, and quantifying a $4.93M unlock opportunity.",
    keyFinding: "$4.93M in stalled B2B revenue unlocked",
    images: [meridianImg1, meridianImg2, meridianImg3],
    badge: "3-page Dashboard",
    link: "https://github.com/beaandrea/meridian-sales-analytics",
    tags: ['All', 'Sales Analytics', 'Power BI', 'Python & SQL', 'Data Analytics'],
    scenario: "I analyzed Meridian IS's B2B sales pipeline to identify where territory imbalances and pipeline concentration were stalling revenue, and developed a financial model to determine which executive hypothesis the data actually supported.",
    bullets: [
      "Identified that Central's 50% volume surplus over East was eroding revenue efficiency rather than amplifying it — ruling out market conditions as the root cause and pointing to structural pipeline overload.",
      "Surfaced a CRM routing failure confirmed across two managers that had concentrated 194 active deals onto a single rep, 2.5× the team average, masking $4.93M in stalled pipeline from Finance's utilization review.",
      "Translated the routing analysis into a quantified ROI model projecting a conservative $169K immediate revenue floor from redistributing one rep's excess pipeline, giving Finance the empirical proof needed to unblock action without approving new headcount."
    ]
  },
  {
    id: "prescott-vance",
    title: "P&V Financial: Operations Capacity & Throughput Optimizer",
    category: "Python, SQL, Tableau",
    description: "Resolved a headcount budget dispute between a COO and Compliance Head by proving a 23% processing time surge was a structural allocation failure — not a staffing shortage — and identifying a cost-neutral fix.",
    keyFinding: "83.35% SLA breach rate traced to one dispute type",
    images: [pvImg1],
    badge: null,
    link: "https://github.com/beaandrea/pv-financial-operations",
    tags: ['All', 'Banking Operations', 'Tableau', 'Python & SQL', 'Data Analytics'],
    scenario: "I analyzed P&V Financial's 500K+ legacy transaction records to determine whether a year-over-year surge in processing times reflected a global staffing shortage or a localized structural failure — and to identify whether the business could resolve it without net-new headcount.",
    bullets: [
      "Identified that the 40.15% overall SLA breach rate was driven almost entirely by Merchant Disputes at 83.35% — while Identity Theft and Credit Card Fraud divisions held near-zero breach rates — ruling out a global capacity crisis and isolating the failure to one dispute category.",
      "Resolved ~25,000 geographic dimension mismatches in legacy records by engineering an Agent_ID prefix extraction pipeline, reconstructing hub assignments as a canonical source of truth and making all hub-level throughput comparisons valid.",
      "Proved a cost-neutral resolution by calculating true per-agent capacity via LOD expressions: New York's 3-agent team clears 22,000 cases/agent at 0% breach versus Manila's 14,000 cases/agent at 47% breach — a 57% throughput gap that validates cross-training over headcount expansion."
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