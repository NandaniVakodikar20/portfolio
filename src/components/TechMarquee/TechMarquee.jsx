import "./TechMarquee.css";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaJava,
  FaAndroid,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiLaravel,
  SiPostman,
  SiHibernate,
  SiAndroidstudio,
  SiKotlin,
  SiSqlite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const marqueeItems = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#4ADE80" },
  { name: "Express.js", icon: <SiExpress />, color: "#F8FAFC" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#22C55E" },
  { name: "Kotlin", icon: <SiKotlin />, color: "#7F52FF" },
  { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
  { name: "Android Studio", icon: <SiAndroidstudio />, color: "#4285F4" },
  { name: "JavaScript ES6+", icon: <SiJavascript />, color: "#FACC15" },
  { name: "REST APIs", icon: <TbApi />, color: "#38BDF8" },
  { name: "Java", icon: <FaJava />, color: "#EA580C" },
  { name: "Hibernate", icon: <SiHibernate />, color: "#BCAE79" },
  { name: "MySQL", icon: <SiMysql />, color: "#60A5FA" },
  { name: "SQLite", icon: <SiSqlite />, color: "#00A3E0" },
  { name: "Git", icon: <FaGitAlt />, color: "#FB923C" },
  { name: "GitHub", icon: <FaGithub />, color: "#E2E8F0" },
  { name: "Bootstrap 5", icon: <FaBootstrap />, color: "#A855F7" },
  { name: "Postman", icon: <SiPostman />, color: "#FB923C" },
  { name: "PHP", icon: <SiPhp />, color: "#818CF8" },
  { name: "Laravel", icon: <SiLaravel />, color: "#F43F5E" },
];

function TechMarquee() {
  return (
    <section className="marquee-wrapper-section" aria-label="Core Technologies Marquee">
      <div className="marquee-container">
        <div className="marquee-label">Core Tech:</div>
        <div className="marquee-viewport">
          <div className="marquee-gradient-fade left" />
          <div className="marquee-gradient-fade right" />

          <div className="marquee-track">
            {/* First sequence */}
            {marqueeItems.map((tech, index) => (
              <div className="marquee-pill" key={`t1-${index}`}>
                <span className="marquee-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                <span className="marquee-name">{tech.name}</span>
              </div>
            ))}
            {/* Second sequence for seamless loop */}
            {marqueeItems.map((tech, index) => (
              <div className="marquee-pill" key={`t2-${index}`}>
                <span className="marquee-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </span>
                <span className="marquee-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechMarquee;
