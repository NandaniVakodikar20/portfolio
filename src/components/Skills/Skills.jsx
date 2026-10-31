import { useState } from "react";
import "./Skills.css";
import SectionHeader from "../UI/SectionHeader";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaCogs,
  FaBrain,
  FaAndroid,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiPostman,
  SiHibernate,
  SiEclipseide,
  SiAndroidstudio,
  SiReact,
  SiKotlin,
  SiSqlite,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const skillsCatalog = [
  // Frontend
  { name: "React.js", category: "Frontend", level: "Core MERN", icon: <FaReact />, brandColor: "#61DAFB", featured: true },
  { name: "React Router", category: "Frontend", level: "SPA Routing", icon: <SiReact />, brandColor: "#CA4245", featured: true },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Core Language", icon: <SiJavascript />, brandColor: "#F7DF1E", featured: true },
  { name: "HTML5", category: "Frontend", level: "Semantic Markup", icon: <SiHtml5 />, brandColor: "#E34F26" },
  { name: "CSS3", category: "Frontend", level: "Modern Layouts", icon: <SiCss />, brandColor: "#1572B6" },
  { name: "Bootstrap 5", category: "Frontend", level: "Responsive UI", icon: <FaBootstrap />, brandColor: "#7952B3" },

  // Backend
  { name: "Node.js", category: "Backend", level: "Core Runtime", icon: <FaNodeJs />, brandColor: "#4ADE80", featured: true },
  { name: "Express.js", category: "Backend", level: "REST Framework", icon: <SiExpress />, brandColor: "#F8FAFC", featured: true },
  { name: "RESTful APIs", category: "Backend", level: "API Architecture & CRUD", icon: <TbApi />, brandColor: "#38BDF8", featured: true },
  { name: "Java", category: "Backend", level: "Core & OOP", icon: <FaJava />, brandColor: "#ED8B00", featured: true },
  { name: "Hibernate ORM", category: "Backend", level: "ORM & Persistence", icon: <SiHibernate />, brandColor: "#BCAE79", featured: true },
  { name: "PHP", category: "Backend", level: "Server-side", icon: <SiPhp />, brandColor: "#777BB4" },
  { name: "Laravel", category: "Backend", level: "MVC Framework", icon: <SiLaravel />, brandColor: "#FF2D20" },

  // Mobile / Android
  { name: "Kotlin", category: "Mobile", level: "Primary Android Language", icon: <SiKotlin />, brandColor: "#7F52FF", featured: true },
  { name: "Android Development", category: "Mobile", level: "Native Android Apps", icon: <FaAndroid />, brandColor: "#3DDC84", featured: true },
  { name: "Android Studio", category: "Mobile", level: "Official Android IDE", icon: <SiAndroidstudio />, brandColor: "#4285F4", featured: true },
  { name: "Mobile UI & XML", category: "Mobile", level: "Layouts & UI Design", icon: <FaMobileAlt />, brandColor: "#38BDF8", featured: false },

  // Databases
  { name: "MongoDB", category: "Databases", level: "NoSQL Database", icon: <SiMongodb />, brandColor: "#22C55E", featured: true },
  { name: "MySQL", category: "Databases", level: "Relational RDBMS", icon: <SiMysql />, brandColor: "#4479A1", featured: true },
  { name: "SQLite", category: "Databases", level: "Embedded / Local DB", icon: <SiSqlite />, brandColor: "#00A3E0", featured: true },

  // Tools & Workflow
  { name: "Git", category: "Tools", level: "Version Control", icon: <FaGitAlt />, brandColor: "#F05032", featured: true },
  { name: "GitHub", category: "Tools", level: "Collaboration", icon: <FaGithub />, brandColor: "#E2E8F0" },
  { name: "Postman", category: "Tools", level: "API Testing", icon: <SiPostman />, brandColor: "#FF6C37", featured: true },
  { name: "VS Code", category: "Tools", level: "Primary Web IDE", icon: <VscVscode />, brandColor: "#007ACC" },
  { name: "Eclipse", category: "Tools", level: "Java & Hibernate IDE", icon: <SiEclipseide />, brandColor: "#2C2255" },

  // Currently Learning & Certifications
  { name: "Generative AI", category: "Currently Learning", level: "TCS iON Certified", icon: <FaBrain />, brandColor: "#EC4899", featured: true },
  { name: "Cloud Fundamentals", category: "Currently Learning", level: "Simplilearn Certified", icon: <FaCloud />, brandColor: "#38BDF8" },
  { name: "DevOps & CI/CD", category: "Currently Learning", level: "Simplilearn Certified", icon: <FaCogs />, brandColor: "#A855F7" },
];

const categoryTabs = [
  { id: "All", label: "All Technologies" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Mobile", label: "Mobile / Android" },
  { id: "Databases", label: "Databases" },
  { id: "Tools", label: "Tools & Workflow" },
  { id: "Currently Learning", label: "Currently Learning" },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills =
    activeTab === "All"
      ? skillsCatalog
      : skillsCatalog.filter((item) => item.category === activeTab);

  return (
    <section className="skills-section" id="skills">
      <SectionHeader
        tag="TECHNICAL EXPERTISE"
        title="Tools & Technologies"
        highlight="I Work With"
        subtitle="Organized by stack tier—strictly reflecting verified skills from my academic projects, hands-on MERN applications, and Android development."
      />

      {/* Filter Tabs */}
      <div className="skills-tabs-container">
        <div className="skills-tabs-scroller">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`skills-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && <span className="tab-indicator-line" />}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="skills-cards-grid">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item-card ${skill.featured ? "featured-skill" : ""}`}
            style={{ "--skill-color": skill.brandColor }}
          >
            <div className="skill-icon-wrap" style={{ color: skill.brandColor }}>
              {skill.icon}
            </div>

            <div className="skill-content-wrap">
              <div className="skill-top-row">
                <h3 className="skill-title">{skill.name}</h3>
                {skill.featured && <span className="core-badge">Core</span>}
              </div>
              <div className="skill-level-row">
                <span className="skill-category-tag">{skill.category}</span>
                <span className="skill-separator">&bull;</span>
                <span className="skill-level-text">{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Highlights Note */}
      <div className="skills-footer-note editorial-card">
        <div className="note-icon-sparkle">✦</div>
        <p>
          <strong>Applied in Real-World Projects:</strong> Full-stack workflows combine React on
          the client with Express.js REST APIs and MongoDB for <strong>EliteSalon</strong>,
          Java and Hibernate ORM for the <strong>Asset Management System</strong>, PHP with MySQL
          for <strong>PetCareHub</strong>, alongside <strong>Kotlin & Android Development</strong> with Android Studio.
        </p>
      </div>
    </section>
  );
}

export default Skills;
