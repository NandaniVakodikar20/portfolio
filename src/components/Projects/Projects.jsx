import "./Projects.css";
import SectionHeader from "../UI/SectionHeader";
import ProjectPreview from "./ProjectPreview";
import { FaGithub, FaCheckCircle, FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "../../data/portfolioData";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <SectionHeader
        tag="PORTFOLIO HIGHLIGHTS"
        title="Featured"
        highlight="Engineering Projects"
        subtitle="Full-stack web applications built with modern engineering practices, clean modular architecture, and real-world problem solving."
      />

      <div className="projects-showcase-container">
        {projectsData.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <article
              key={project.id}
              className={`project-feature-row ${isReversed ? "reversed-layout" : ""} ${
                project.featured ? "spotlight-featured" : ""
              }`}
            >
              {/* Left Column (Visual Showcase) */}
              <div className="project-visual-col">
                <div className="project-visual-wrapper">
                  <div
                    className="visual-glow-backdrop"
                    style={{ background: project.accentColor }}
                  />
                  <ProjectPreview project={project} />
                </div>
              </div>

              {/* Right Column (Editorial Information) */}
              <div className="project-info-col">
                <div className="project-meta-strip">
                  {project.featured && (
                    <span className="featured-pill">
                      <FaStar className="star-icon" /> Featured Project
                    </span>
                  )}
                  <span className="project-type-pill">{project.type}</span>
                  <span className="project-status-pill">{project.status}</span>
                </div>

                <div className="project-headline-block">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>

                <p className="project-overview-text">{project.description}</p>

                {/* Contribution & Architecture */}
                <div className="project-contribution-box">
                  <div className="contribution-header">
                    <FaCodeBranch className="contrib-icon" />
                    <h4>My Architecture & Contribution</h4>
                  </div>
                  <p>{project.contribution}</p>
                </div>

                {/* Key Features List */}
                <div className="project-features-list">
                  <h4 className="features-title">Key Implemented Modules:</h4>
                  <ul>
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <FaCheckCircle className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-strip">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="project-actions-row">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary project-action-btn"
                    >
                      <FaGithub />
                      <span>View on GitHub</span>
                    </a>
                  ) : (
                    <span className="academic-notice-tag">
                      Academic Institutional Repository
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary project-action-btn"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="demo-status-text">
                      {project.featured ? "Local & Sandbox Active" : "Classroom Evaluated"}
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
