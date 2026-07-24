import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaGitAlt,
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
  SiPostman
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
  {
  title: "Frontend",
  color: "#3B82F6",
  skills: [
    { icon: <FaReact />, name: "React" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss />, name: "CSS3" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
  ],
},
    {
      title: "Backend",

      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiPhp />, name: "PHP" },
        { icon: <SiLaravel />, name: "Laravel" },
      ],
    },
    {
      title: "Database",
      skills: [
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
      { icon: <VscVscode />, name: "VS Code" },
        { icon: <SiPostman />, name: "Postman" },
      ],
    },
    {
      title: "Currently Learning",
      skills: [{ icon: <FaJava />, name: "Java" }],
    },
  ];

  return (
    <section className="skills" id="skills">
      <p className="skills-tag">TECH STACK</p>

      <h2 className="section-title">
        Technologies <span>I Work With</span>
      </h2>

      <p className="skills-description">
        I build modern and scalable web applications using the MERN stack and
        continuously explore new technologies to improve my development skills.
      </p>

      <div className="skills-wrapper">
        {categories.map((category, index) => (
         <div
  className="category-card"
  key={index}
  style={{ borderTop: `4px solid ${category.color}` }}
>
            <h3>
              <span>{category.icon}</span> {category.title}
            </h3>

            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div className="skill-chip" key={i}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;