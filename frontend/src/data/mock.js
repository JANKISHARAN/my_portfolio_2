export const portfolioData = {
  personal: {
    name: "Janki Sharan",
    title: "Software Development | Machine Learning | Data Analyst | Problem Solving",
    location: "Bengaluru, India",
    email: "js.jankisharan@gmail.com",
    phone: "+91 9019941317",
    profileImage: "https://customer-assets.emergentagent.com/job_portfolio-craft-203/artifacts/wn1dh07i_WhatsApp%20Image%202025-06-29%20at%2018.24.20.jpeg",
    github: "https://github.com/JANKISHARAN",
    linkedin: "https://www.linkedin.com/in/janki-sharan-468052310",
    // Served from frontend/public/resume.pdf (Vite copies public/ to site root as /resume.pdf)
    resumeUrl: "/resume.pdf"
  },
  about: {
    summary: "I am a Data Science and Full-Stack Developer with experience in Machine Learning, Cloud Computing, and real-world projects. I have worked on energy forecasting systems and published research on XGBoost optimization. With certifications from IIT Roorkee, Microsoft, Cisco, and IBM, I am passionate about building scalable, data-driven solutions  for continuous learning and problem-solving. Committed to delivering high-quality solutions by combining creativity, technical expertise, and analytical thinking while collaborating effectively in team environments."
  },
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C", "C++", "JavaScript", "MySQL"]
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "React.js", "Responsive Design"]
    },
    {
      category: "Machine Learning",
      items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "XGBoost", "Deep Learning", "ML Algorithms"]
    },
    {
      category: "Data Analysis",
      items: ["Data Cleaning", "Statistical Analysis", "Data Visualization", "Preprocessing"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Data Centre's Energy Consumption Forecasting",
      description: "Multi-output Regression using XGBoost and Bayesian Hyperparameter Tuning. Building a machine learning model to predict two environmental metrics using real-world data.",
      technologies: ["Python", "XGBoost", "Machine Learning", "Data Analysis"],
      duration: "Feb 2025 - Jun 2025",
      github: "https://github.com/JANKISHARAN/data_centres.git",
      liveUrl: "https://demos.jankisharan.com/data-centre-energy",
      featured: true
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Built a responsive Weather Dashboard in React using Open-Meteo APIs with automatic browser geolocation. Developed hourly visualization layer with separate charts per parameter using recharts. Created date-range insights page with comparative charts for temperature trends, precipitation, wind speed, and particulate matter.",
      technologies: ["React.js", "Open-Meteo API", "Recharts", "JavaScript"],
      github: "https://github.com/JANKISHARAN",
      liveUrl: "https://demos.jankisharan.com/weather-dashboard",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Developed a responsive, single-page portfolio to present skills, projects, and contact details. Features responsive layout with CSS Grid/Flexbox, project gallery with modal detail view, smooth scrolling navigation, mobile hamburger menu, and contact form with validation.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/JANKISHARAN/my_portfolio.git",
      liveUrl: "https://demos.jankisharan.com/portfolio",
      featured: false
    }
  ],
  education: [
    {
      degree: "Master of Computer Applications",
      institution: "Reva University",
      location: "Bengaluru, India",
      year: "2023 - 2025"
    },
    {
      degree: "Bachelor of Science in Electronics",
      institution: "A.N College",
      location: "Patna, India",
      year: "2019 - 2022"
    },
    {
      degree: "Intermediate of Science",
      institution: "Bihar School Examination Board",
      location: "Bihar, India",
      year: "2017 - 2019"
    },
    {
      degree: "Matriculation",
      institution: "Central Board of School Examination",
      location: "Bihar, India",
      year: "2017 - 2019"
    }

  ],
  certifications: [
    {
      title: "Cisco CyberSecurity",
      issuer: "Cisco",
      year: "2024",
      description: "Cybersecurity fundamentals and best practices certification",
      certificateFile: "/certificates/Cisco_CyberSecurity.pdf"
    },
    {
      title: "Microsoft Azure",
      issuer: "Microsoft",
      year: "2025",
      description: "Cloud computing and Azure services certification",
      certificateFile: "/certificates/Microsoft Azure.pdf"
    },
    {
      title: "Natural Laungage Processing for Developers",
      issuer: "Infosys Springboard",
      year: "2025",
      description: "Awarded for completing the Natural Laungage Processing for developers course (verify.onwingspan.com).",
      certificateFile: "/certificates/Natural_Language_Processing_for_Developers.pdf"
    },
    {
      title: "Advanced Certification in Cloud Computing and DevOps",
      issuer: "iHUB DivyaSampark, IIT Roorkee",
      year: "2026",
      description: "Conducted by iHUB DivyaSampark at Indian Institute of Technology Roorkee",
      certificateFile: "/certificates/PHOTO-2026-04-03-22-05-19.pdf"
    },
    {
      title: "Machine Learning with Scikit-learn",
      issuer: "Infosys Springboard",
      year: "2024",
      description: "Machine learning techniques and scikit-learn library",
      certificateFile: "/certificates/Machine_Learning_with_Scikit-learn.pdf"
    },
    {
      title: "Java Swing GUI Widget Toolkit",
      issuer: "Infosys Springboard",
      year: "2024",
      description: "Java GUI development using Swing framework",
      certificateFile: "/certificates/Java_Swing_GUI_Widget_Toolkit.pdf"
    }
  ],
  research: [
    {
      title: "Optimized Multi-Output Regression using XGBoost and Bayesian Hyperparameter Tuning",
      description: "Research paper on advanced machine learning techniques for regression problems",
      year: "2025"
    }
  ]
};
