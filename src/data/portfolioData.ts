import { Project, SkillGroup, Education, Achievement } from '../types';

export const PROFILE = {
  name: "DEEKSHA BR",
  tagline: "Fullstack Developer & AI Engineer",
  location: "Madikeri, Karnataka, India (571201)",
  phone: "+91-8904342982",
  email: "deekshabr026@gmail.com",
  linkedin: "https://linkedin.com/in/deeksha-biliyara-31a233293",
  github: "https://github.com/deekshagowda123",
  summary: "Computer Science student (9.33 CGPA) with hands-on expertise in full-stack web development, AI model deployment, IoT vital tracking, and relational databases. Skilled in crafting scalable REST APIs, optimizing deep learning segmentation pipelines, and building ultra-responsive minimalist user interfaces."
};

export const PROJECTS: Project[] = [
  {
    id: "smart-ambulance-iot",
    title: "AI-Enabled Smart Ambulance System Using IoT",
    shortDescription: "Rapid emergency response platform with YOLOv8 traffic analysis, GPS dynamic routing, and live ESP32 vital monitoring.",
    fullDescription: [
      "Developed an AI-enabled emergency response platform using React.js and FastAPI with REST APIs for ambulance dispatch and hospital coordination.",
      "Integrated YOLOv8 traffic analysis and GPS-based routing to support intelligent ambulance route optimization and traffic signal prioritization.",
      "Built an IoT patient monitoring module using ESP32 to stream real-time vital signs to hospitals, enabling pre-arrival emergency treatment preparation.",
      "Designed a low-latency real-time dashboard for emergency tracking, patient telemetry monitoring, and automated hospital notifications."
    ],
    period: "March 2026 – Present",
    category: "IoT",
    tags: ["React.js", "FastAPI", "YOLOv8", "ESP32", "OpenCV", "IoT", "GPS", "Python", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/deekshagowda123",
    featured: true,
    metrics: [
      { label: "Latency", value: "< 150ms" },
      { label: "Routing Efficiency", value: "+38%" },
      { label: "IoT Streams", value: "Real-time" }
    ]
  },
  {
    id: "skin-lesion-aco",
    title: "AI-Based Skin Lesion Detection System",
    shortDescription: "Automated dermatological segmentation & multi-class classification using CNN U-Net and Ant Colony Optimization.",
    fullDescription: [
      "Designed a deep learning-based web application for automated skin lesion segmentation and accurate multi-class classification.",
      "Built an end-to-end data processing pipeline for lesion segmentation and classification trained on the benchmark HAM10000 medical dataset.",
      "Integrated Ant Colony Optimization (ACO) for contour optimization, significantly boosting Dice Score and boundary precision.",
      "Deployed via lightweight Flask microservice for real-time medical image analysis in clinical diagnostic environments."
    ],
    period: "Dec 2025",
    category: "AI / ML",
    tags: ["Python", "CNN", "U-Net", "ACO", "Flask", "Deep Learning", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/deekshagowda123",
    featured: true,
    metrics: [
      { label: "Dataset", value: "HAM10000" },
      { label: "Contour Precision", value: "ACO Boosted" },
      { label: "Inference", value: "Real-time" }
    ]
  },
  {
    id: "personalized-medicine-rec",
    title: "Personalized Medicine Recommendation System",
    shortDescription: "Symptom-driven disease classification engine & tailored prescription generator using NLP and Scikit-Learn.",
    fullDescription: [
      "Engineered a machine learning-based web application for intelligent symptom-driven disease classification and personalized treatment recommendation.",
      "Built an end-to-end ML pipeline encompassing clinical data preprocessing, model selection, hyperparameter tuning, and comprehensive evaluation.",
      "Achieved high diagnostic confidence measured across Accuracy, Precision, Recall, and F1-score benchmarks.",
      "Deployed the optimized inference model via Flask backend for instantaneous clinical decision support."
    ],
    period: "Jan 2025",
    category: "Healthcare",
    tags: ["Python", "Scikit-Learn", "Pandas", "NLP", "Flask", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/deekshagowda123",
    featured: true,
    metrics: [
      { label: "Pipeline", value: "End-to-End" },
      { label: "Input", value: "Natural NLP" },
      { label: "Deployment", value: "Flask REST" }
    ]
  },
  {
    id: "coastal-travel-hackathon",
    title: "Mangalore Explorer - Travel Platform",
    shortDescription: "Top 10 Finalist Hackathon project featuring ultra-responsive UI, coastal itineraries, and interactive booking.",
    fullDescription: [
      "Developed during a high-stakes React Hackathon, securing a Top 10 Finalist placement among 100+ competing teams.",
      "Built an intuitive tourism portal for Mangalore attractions, featuring interactive map filters, heritage guides, and responsive itineraries.",
      "Implemented seamless state management and mobile-first animations using React.js and modern CSS architecture."
    ],
    period: "2024",
    category: "Fullstack",
    tags: ["React.js", "TailwindCSS", "JavaScript", "Responsive UI", "REST API"],
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/deekshagowda123",

    featured: false,
    metrics: [
      { label: "Award", value: "Top 10 Finalist" },
      { label: "Performance", value: "99 Lighthouse" }
    ]
  },
  {
    id: "mern-ecommerce-suite",
    title: "Fullstack MERN Commerce Portal",
    shortDescription: "Comprehensive fullstack web suite built with MongoDB, Express, React, Node.js, and secure authentication.",
    fullDescription: [
      "Developed and deployed robust MERN stack applications as part of Full Stack Development certification.",
      "Implemented JWT role-based authentication, MongoDB aggregation pipelines, and secure payment sandbox integrations.",
      "Built a responsive admin dashboard with real-time inventory management and sales analytics graphs."
    ],
    period: "2024",
    category: "Fullstack",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/deekshagowda123",
    featured: false
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript / ES6+", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "HTML5 / CSS3", level: 95 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Node.js & Express", level: 88 },
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Scikit-Learn & Pandas", level: 82 }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "SQL (MySQL / PostgreSQL)", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "IoT (ESP32 / Telemetry)", level: 80 }
    ]
  },
  {
    category: "Developer Tools",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "VS Code", level: 95 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "Postman", level: 88 }
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Sahyadri College of Engineering and Management (SCEM)",
    degree: "Bachelor of Engineering in Computer Science",
    period: "Sep 2023 – Jun 2027",
    score: "9.33 CGPA",
    location: "Mangalore, Karnataka",
    highlights: [
      "Sixth Semester CSE Department Topper",
      "Core contributor to AI & IoT Special Interest Group",
      "Active participant in Smart India Hackathon 2025"
    ]
  },
  {
    institution: "St Michaels Composite PU College",
    degree: "Pre-University Course (PCMB)",
    period: "Jun 2021 – Mar 2023",
    score: "86.5%",
    location: "Madikeri, Karnataka",
    highlights: [
      "Excellence in Mathematics and Biology",
      "State level Science Exhibition participant"
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Sixth Semester CSE Dept Topper",
    organization: "Sahyadri College of Engineering & Management",
    year: "2026",
    description: "Achieved outstanding academic excellence with a stellar 9.33 CGPA in Computer Science Engineering.",
    icon: "Trophy"
  },
  {
    title: "Top 10 Finalist - React Hackathon",
    organization: "Regional Tech Conclave Mangalore",
    year: "2024",
    description: "Selected among top 10 finalists out of 100+ teams for designing an interactive Mangalore travel discovery platform.",
    icon: "Award"
  },
  {
    title: "Smart India Hackathon (SIH) Participant",
    organization: "Ministry of Education, Govt of India",
    year: "2025",
    description: "Competed in the national level hackathon solving real-world healthcare and AI emergency logistics challenges.",
    icon: "Zap"
  },
  {
    title: "Full Stack Development Certified",
    organization: "SCEM & MERN Stack Bootcamp",
    year: "2024",
    description: "Successfully built, tested, and deployed production-grade MERN stack enterprise solutions.",
    icon: "CheckCircle2"
  },
  {
    title: "Software Engineering Fundamentals",
    organization: "Infosys Springboard Certification",
    year: "2024",
    description: "Completed rigorous certification covering SDLC models, clean code architecture, and agile methodologies.",
    icon: "BookOpen"
  }
];
