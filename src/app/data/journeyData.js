import { GraduationCap, BookOpen, Sparkles, Store, Briefcase, Computer } from "lucide-react";

export const journeyItems = [
  {
    year: "2022-Present",
    title: "Computer Science Major",
    description: "Fourth-year at The University of Texas at Austin, focusing on software development and AI, with minors in Business and Educational Psychology. GPA: 3.73/4.0",
    icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    year: "Summer 2025",
    title: "Quality Engineering Intern, Crestron Electronics",
    description: "Collaborated on an Agile/Scrum team to validate 13+ media drivers, debug AV integration issues with Wireshark, and deliver cross-team automation features. Presented a wireless energy harvesting proposal to 70+ employees",
    icon: <Computer className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    year: "2024–2025",
    title: "Advanced Coursework & Independent Projects",
    description: "Explored advanced algorithms, machine learning, and systems courses while building personal passion projects in my free time",
    icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    year: "Summer 2024",
    title: "Sales Associate, Nina Berenato Jewelry",
    description: "Applied precision tech in custom jewelry fitting while refining user experience through client engagement",
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    year: "Summer 2023",
    title: "Style Advisor, Aritzia",
    description: "Developed customer service and training skills while adapting to a fast-paced retail tech environment",
    icon: <Store className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    year: "Summer 2022 - October 2023",
    title: "Digital Strategist Intern, Stokes Sign Company",
    description: "Applied web scraping and SEO strategies to enhance digital marketing reach",
    icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
  }
];