export const personalData = {
  name: "Nandani Vakodikar",
  shortName: "Nandani",
  initials: "NV",
  title: "MERN Stack Developer | MCA Student",
  location: "Surat, Gujarat, India",
  email: "vakodikarnandani@gmail.com",
  phone: "+91 8200488821",
  status: "Open for MERN Stack Internships",
  statusDetail: "Available for MERN Stack, React & Node.js Developer Internship & Entry-Level Roles",
  resumeUrl: "/resume/NANDANI_VAKODIKAR_RESUME.pdf",
  githubUrl: "https://github.com/NandaniVakodikar20",
  linkedinUrl: "https://www.linkedin.com/in/nandani-vakodikar-929173340",
  shortBio:
    "Master of Computer Applications (MCA) student and passionate MERN Stack Developer with skills in Android development, Java, and scalable backend architecture. I design and build responsive web applications with intuitive frontends, secure RESTful backends, and reliable database architectures.",
  heroSummary:
    "Transforming complex requirements into seamless web and mobile applications. Actively seeking MERN Stack Developer internships and entry-level software engineering roles to contribute and grow in production environments.",
};

export const quickStats = [
  { label: "Academic Standing", value: "MCA Student", subtext: "Uka Tarsadia University" },
  { label: "Core Foundation", value: "7.70 CGPA", subtext: "Bachelor of Computer Applications" },
  { label: "Engineering Projects", value: "3 Applications", subtext: "Full-Stack, Java & PHP" },
  { label: "Core Focus", value: "MERN & Android", subtext: "Web & Mobile Development" },
];

export const aboutNarratives = {
  headline: "Building Modern Full-Stack & Mobile Solutions with Academic Discipline & Engineering Passion",
  paragraphs: [
    "I am an MCA student at Uka Tarsadia University with a strong passion for full-stack engineering and software design. Having graduated with a BCA (7.70 CGPA), I established a solid foundation in computer science fundamentals, data structures, and database management before specializing in the modern JavaScript ecosystem and mobile application development.",
    "My primary focus centers on the MERN stack—architecting responsive component-driven frontends with React and React Router, designing secure and modular APIs with Node.js and Express.js, and structuring scalable data schemas in MongoDB. Beyond MERN, I have practical experience building a Java-based Asset Management System with Hibernate ORM and MySQL implementing the Singleton design pattern, engineering a complete web-based Veterinary System with PHP and MySQL, and developing native mobile applications with Kotlin and Android Studio.",
    "I approach software engineering with high curiosity and discipline. Whether implementing role-based authentication, designing pincode-based search filters for EliteSalon, building Android application layouts, or exploring cloud and AI fundamentals, I take pride in writing clean, readable, and maintainable code."
  ],
  pillars: [
    {
      title: "Full-Stack MERN Architecture",
      description: "End-to-end web engineering from responsive React interfaces and React Router to Node.js / Express micro-APIs and MongoDB databases.",
      badge: "Core Expertise"
    },
    {
      title: "Clean RESTful API Design",
      description: "Developing structured, predictable, and secure REST endpoints tested thoroughly with Postman and versioned cleanly.",
      badge: "Backend Focus"
    },
    {
      title: "Java, Hibernate & Kotlin Android",
      description: "Applying object-oriented patterns (Singleton) in Java and Hibernate ORM, alongside native Android application development with Kotlin in Android Studio.",
      badge: "Software Architecture"
    }
  ]
};

export const skillsData = [
  {
    category: "Frontend",
    tagline: "User Interface & Experience",
    items: [
      { name: "React.js", level: "Core MERN", highlight: true },
      { name: "React Router", level: "Routing", highlight: true },
      { name: "JavaScript (ES6+)", level: "Core Language", highlight: true },
      { name: "HTML5", level: "Semantic Markup", highlight: false },
      { name: "CSS3", level: "Modern Layouts", highlight: false },
      { name: "Bootstrap 5", level: "Responsive UI", highlight: false },
    ],
  },
  {
    category: "Backend",
    tagline: "Server & API Engineering",
    items: [
      { name: "Node.js", level: "Core Runtime", highlight: true },
      { name: "Express.js", level: "Core REST Framework", highlight: true },
      { name: "REST APIs & JSON", level: "API Architecture", highlight: true },
      { name: "Java", level: "Core OOP", highlight: true },
      { name: "Hibernate ORM", level: "ORM & Persistence", highlight: true },
      { name: "PHP", level: "Server-side", highlight: false },
      { name: "Laravel", level: "MVC Framework", highlight: false },
    ],
  },
  {
    category: "Mobile",
    tagline: "Android & Mobile App Development",
    items: [
      { name: "Kotlin", level: "Primary Android Language", highlight: true },
      { name: "Android Development", level: "Native Android Apps", highlight: true },
      { name: "Android Studio", level: "Official Android IDE", highlight: true },
      { name: "XML Layouts & UI", level: "Mobile UI Design", highlight: false },
    ],
  },
  {
    category: "Databases",
    tagline: "Data Modeling & Storage",
    items: [
      { name: "MongoDB", level: "Core NoSQL", highlight: true },
      { name: "MySQL", level: "Relational RDBMS", highlight: true },
      { name: "SQLite", level: "Embedded / Local DB", highlight: true },
    ],
  },
  {
    category: "Tools & Workflow",
    tagline: "Development Lifecycle",
    items: [
      { name: "Git", level: "Version Control", highlight: true },
      { name: "GitHub", level: "Collaboration", highlight: true },
      { name: "Postman", level: "API Testing", highlight: true },
      { name: "VS Code", level: "Primary Web IDE", highlight: false },
      { name: "Eclipse", level: "Java IDE", highlight: false },
    ],
  },
  {
    category: "Currently Learning",
    tagline: "Future Horizons & Certifications",
    items: [
      { name: "Generative AI", level: "TCS iON Certified", highlight: true },
      { name: "Cloud Computing Basics", level: "SkillUp Certified", highlight: false },
      { name: "DevOps & CI/CD Fundamentals", level: "SkillUp Certified", highlight: false },
    ],
  },
];

export const marqueeTech = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "REST APIs",
  "Kotlin",
  "Android",
  "Android Studio",
  "Java",
  "Hibernate ORM",
  "MySQL",
  "SQLite",
  "Git & GitHub",
  "Bootstrap",
  "PHP",
  "Laravel",
  "Postman",
];

export const projectsData = [
  {
    id: "elite-salon",
    title: "EliteSalon",
    subtitle: "Book Smart, Look Smart",
    type: "Full-Stack MERN Web Application",
    status: "In Active Development",
    featured: true,
    accentColor: "#38bdf8",
    description:
      "Developed a functional full-stack salon booking platform using the MERN stack with separate modules for Customer, Owner, Admin, and Guest users. Implemented pincode-based salon search, appointment booking, and rescheduling features. Built responsive React.js interfaces and integrated REST APIs for frontend-backend communication. Managed salon, customer, and appointment data using MongoDB and CRUD operations.",
    challenge:
      "Traditional salon visits often involve walk-in waiting times and disorganized telephone scheduling. Salon owners lack real-time visibility over staff utilization, while clients struggle to compare services and available slots nearby.",
    contribution:
      "Architected the full-stack MERN application structure, implemented role-based user access controls, engineered location/pincode filtering algorithms, and designed modular RESTful backend services for appointment lifecycle management.",
    features: [
      "Multi-Role System: Dedicated portals for Customer, Owner, Admin, and Guest users.",
      "Location-Based Discovery: Pincode-based salon search and localized salon discovery.",
      "Real-Time Booking: Seamless appointment booking and rescheduling features.",
      "Responsive React UI: Clean, responsive user interfaces integrated with RESTful APIs.",
      "Data Architecture: Managed salon, customer, and appointment data using MongoDB and CRUD operations."
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git",
      "GitHub"
    ],
    github: "https://github.com/NandaniVakodikar20/EliteSaloon-BookSmartLookSmart",
    demo: null,
    image: null,
    mockupType: "salon",
  },
  {
    id: "asset-management-system",
    title: "Asset Management System",
    subtitle: "Enterprise Asset Tracking & Record Management",
    type: "Java & Hibernate Enterprise Application",
    status: "Completed Project",
    featured: false,
    accentColor: "#f59e0b",
    description:
      "Developed a Java-based Asset Management System using Hibernate ORM and MySQL, implementing the Singleton design pattern and CRUD operations to manage asset records efficiently.",
    challenge:
      "Organizations frequently struggle with tracking hardware, software licenses, and IT equipment across teams, leading to unrecorded allocations, redundant procurement, and inconsistent database connection handling.",
    contribution:
      "Engineered the relational data access layer using Hibernate ORM and MySQL, implemented the Singleton design pattern for thread-safe database connection and SessionFactory pooling, and built comprehensive CRUD operations to manage organizational asset lifecycles.",
    features: [
      "Asset Lifecycle Tracking: Comprehensive tracking of hardware, software, and organizational equipment.",
      "Hibernate ORM Architecture: Streamlined object-relational mapping eliminating boilerplate SQL queries.",
      "Singleton Design Pattern: Centralized, thread-safe database session management for optimized performance.",
      "Efficient CRUD Operations: Seamless creation, updating, departmental assignment, and status auditing.",
      "Relational MySQL Database: Normalized relational database schema ensuring high data integrity."
    ],
    techStack: [
      "Java",
      "Hibernate ORM",
      "MySQL",
      "OOP",
      "Singleton Pattern",
      "Git",
      "GitHub"
    ],
    github: "https://github.com/NandaniVakodikar20/Asset-Management-System",
    demo: null,
    image: null,
    mockupType: "asset",
  },
  {
    id: "petcare-hub",
    title: "PetCareHub",
    subtitle: "Online Veterinary System",
    type: "Academic Web Application",
    status: "Completed Academic Project",
    featured: false,
    accentColor: "#8b5cf6",
    description:
      "Developed a web-based veterinary management system for pet appointment booking and pet-related product management. Implemented multiple user roles, an admin dashboard, and CRUD operations for efficient data management. Built a responsive and user-friendly interface using PHP, MySQL, HTML5, CSS3, JavaScript, and Bootstrap.",
    challenge:
      "Pet clinics struggle with manual paper records, missed vaccination schedules, and disorganized pet parent communication, causing delays during pet consultations.",
    contribution:
      "Designed the relational database schema in MySQL, developed core backend business logic and authentication in PHP, and created responsive client and administrative dashboards with full CRUD capabilities.",
    features: [
      "Pet Appointment Booking: Online scheduling system for veterinary consultations and checkups.",
      "Pet Product Management: E-commerce catalog for pet care supplies, nutrition, and medications.",
      "Multiple User Roles: Dedicated portals and administrative dashboard for clinical workflow.",
      "Efficient Data Management: Full CRUD operations for pet records, doctor appointments, and orders.",
      "Responsive Frontend: Built with PHP, MySQL, HTML5, CSS3, JavaScript, and Bootstrap."
    ],
    techStack: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Git",
      "GitHub"
    ],
    github: "https://github.com/NandaniVakodikar20/Veterinary-System",
    demo: null,
    image: null,
    mockupType: "petcare",
  },
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Shrimad Rajchandra Institute of Management & Computer Application (SRIMCA)",
    university: "Uka Tarsadia University (UTU), Bardoli, Gujarat",
    period: "2025 - Present",
    score: "Currently Pursuing (1st Year)",
    scoreType: "Status",
    statusBadge: "Pursuing",
    highlights: [
      "Specializing in Advanced Web Technologies, Mobile Application Development, and Modern Architectures.",
      "Deepening core skills in Full-Stack Web Development, Data Structures, and Cloud Computing.",
      "Active participant in technical seminars, hands-on workshops, and coding sessions."
    ],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Smt. Tanuben & Dr. Manubhai Trivedi College of Information Science",
    university: "Affiliated to Veer Narmad South Gujarat University (VNSGU), Surat",
    period: "2022 - 2025",
    score: "CGPA: 7.70 / 10",
    scoreType: "Academic Score",
    statusBadge: "Completed",
    highlights: [
      "Graduated with Distinction (7.70 CGPA) with solid foundation in software engineering.",
      "Core coursework: Relational Databases, Object-Oriented Programming, Web Technologies, and Software Lifecycle.",
      "Developed PetCareHub as a comprehensive final academic project."
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    institute: "Gyanjyot Hindi Vidyalaya",
    university: "Surat, Gujarat Board",
    period: "2022",
    score: "81.28%",
    scoreType: "Board Percentage",
    statusBadge: "Completed",
    highlights: [
      "Secured 81.28% with a strong analytical and quantitative foundation.",
      "Excellence in mathematics and analytical reasoning."
    ],
  },
  {
    degree: "Secondary School Certificate (SSC - Class X)",
    institute: "Suman High School No. 5",
    university: "Surat, Gujarat Board",
    period: "2020",
    score: "72.33%",
    scoreType: "Board Percentage",
    statusBadge: "Completed",
    highlights: [
      "Graduated with 72.33%, demonstrating consistency and academic dedication."
    ],
  },
];

export const certificatesData = [
  {
    title: "Generative AI Essentials",
    issuer: "TCS iON Career Edge",
    year: "2026",
    category: "Artificial Intelligence",
    description: "Core concepts of generative artificial intelligence, large language model fundamentals, prompt engineering techniques, and practical AI productivity tools.",
    skillsGained: ["Generative AI", "Prompt Engineering", "LLM Foundations", "AI Ethics"],
    verified: true,
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Simplilearn SkillUp",
    year: "2026",
    category: "Cloud Architecture",
    description: "Fundamental concepts of cloud computing models (IaaS, PaaS, SaaS), cloud service providers, scalability, and virtualization.",
    skillsGained: ["Cloud Fundamentals", "Virtualization", "Cloud Security Basics", "Deployment Models"],
    verified: true,
  },
  {
    title: "Introduction to DevOps Tools",
    issuer: "Simplilearn SkillUp",
    year: "2026",
    category: "DevOps & CI/CD",
    description: "Foundational overview of modern DevOps principles, continuous integration & delivery, containerization, and automated workflows.",
    skillsGained: ["CI/CD Concepts", "Version Control Flow", "DevOps Lifecycle", "Automation Awareness"],
    verified: true,
  },
];

export const navigationLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
