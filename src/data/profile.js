/**
 * Edit safely — this file is read by the components to render the site.
 */

// import { assetUrl } from "../lib/assetUrl";

import { withBase } from "../lib/withBase";

export const profile = {
  name: "Jasah Shamsudheen",
  tagline: "CS Student @ TMU • Full‑Stack Developer",
  avatar: withBase("avatar.jpg"),
  links: {
    email: "jasah.shamsudheen@torontomu.ca",
    github: "https://github.com/jsprogram2014",
    linkedin: "https://linkedin.com/in/jasahs",
    // resume: withBase("Jasah_Shamsudheen_Resume_Main.pdf")
  },
  skills: [
    "Python", "JavaScript", "Java", "C#", "C/C++", "HTML/CSS", "SQL",
    "React", "Redux", "Node.js", "Express", "Bootstrap", "Tailwind",
    "Git", "VS Code", "Jupyter", "Linux/UNIX", "Flask"
  ],
  education: [
    {
      school: "Toronto Metropolitan University",
      degree: "Bachelor of Science in Computer Science (Co‑op)",
      period: "Sept 2024 — Present",
      notes: ""
    },
    {
      school: "Centennial College",
      degree: "Advanced Diploma in Software Engineering",
      period: "Jan 2018 — Apr 2020",
      notes: ""
    }
  ],
  experience: [
    {
      company: "Scotiabank",
      title: "Investment Advisor, CBCC",
      location: "Toronto, ON",
      period: "Oct 2022 — Aug 2024",
      bullets: [
        "Advised clients on investment strategies (mutual funds, ETFs, GICs, equities), handling 600+ calls monthly while exceeding targets.",
        "Delivered tailored portfolio recommendations aligned with KYC/AML and regulatory standards; ensured accurate documentation and risk suitability.",
        "Translated ambiguous client goals into actionable steps, achieving ~95% client satisfaction and repeat business."
      ]
    },
    {
      company: "Walmart",
      title: "Retail Manager",
      location: "Scarborough, ON",
      period: "Jan 2021 — Sept 2022",
      bullets: [
        "Managed and coached a 15–20 person team across front-end operations and backroom logistics; improved unloading efficiency by ~20%.",
        "Optimized scheduling and task allocation, reducing checkout wait times by ~15% and improving customer satisfaction."
      ]
    }
  ],
  projects: [
    {
      name: "E‑commerce Storefront",
      blurb: "Responsive store with browse/search, cart and checkout; Redux Toolkit for state and reusable components for scalability.",
      stack: ["React", "Redux Toolkit", "Vite", "JavaScript", "Tailwind/Bootstrap"],
      links: {
        demo: "https://jsprogram2014.github.io/E-commerce-Storefront/",
        code: ""
      }
    },
    // {
    //   name: "Car Purchase App",
    //   blurb: "SPA showing a catalog of cars; Express backend API; dynamic listings, search, and detail views with React + Axios.",
    //   stack: ["React", "Node.js", "Express", "Axios", "Bootstrap/Tailwind"],
    //   links: {
    //     demo: "",
    //     code: "https://github.com/jsprogram2014/Car-Purchase-App"
    //   }
    // },
    {
      name: "Personal Portfolio",
      blurb: "A fast, responsive portfolio website built from scratch with modular React components, a clean light theme, and data-driven sections.",
      stack: ["React", "Vite", "Tailwind CSS", "react-icons", "JavaScript"],
      links: {
        demo: "https://jsprogram2014.github.io/My-Website/",   
        code: ""    
      }
    },
     {
      name: "AI Sentiment Analyzer",
      blurb: "Natural Language Processing (NLP) tool that evaluates the emotional tone of user input in real-time. Built with a Python Flask backend using the VADER lexicon for accurate sentiment scoring, featuring a responsive Bootstrap interface for instant feedback.",
      stack: ["Python", "NLP (VADER)", "Flask", "Bootstrap", "JavaScript"],
      links: {
        demo: "https://sentiment-analysis-using-flask.onrender.com/",   
        code: ""    
      }
    }
  ]
};
