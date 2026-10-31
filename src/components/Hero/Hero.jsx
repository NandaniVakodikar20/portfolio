import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaFileDownload,
  FaArrowRight,
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaEnvelope,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import profileImage from "../../assets/images/nandani.jpeg";
import { personalData } from "../../data/portfolioData";

function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Background ambient lighting effects */}
      <div className="hero-ambient-glow glow-cyan" />
      <div className="hero-ambient-glow glow-violet" />

      <div className="hero-grid">
        {/* Left Column: Narrative & Actions */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="live-indicator">
              <span className="live-dot" />
              <span className="live-ping" />
            </span>
            <span className="badge-text">{personalData.status}</span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="name-white">Nandani</span>{" "}
            <span className="gradient-text">Vakodikar</span>
          </h1>

          <div className="hero-roles-container">
            <span className="role-prefix">I am a </span>
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2200,
                "MCA Student @ UTU",
                2200,
                "React.js Developer",
                2000,
                "Node & Express Builder",
                2000,
                "Android & Kotlin Developer",
                2200,
                "Passionate Full-Stack Learner",
                2200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="dynamic-role-text"
            />
          </div>

          <p className="hero-bio">
            Passionate Master of Computer Applications student focused on
            building responsive, robust, and scalable web and mobile applications using the{" "}
            <strong className="text-highlight">MERN stack, Android & Kotlin</strong>. Dedicated to
            clean code, REST API design, and turning real-world requirements
            into intuitive products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary hero-btn-main">
              <span>Explore My Work</span>
              <FaArrowRight className="btn-arrow" />
            </a>

            <a
              href={personalData.resumeUrl}
              download="Nandani_Vakodikar_Resume.pdf"
              className="btn-secondary hero-btn-sub"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-social-strip">
            <span className="social-label">Connect with me:</span>
            <div className="social-links-row">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                aria-label="GitHub Profile"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-pill"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="hero-social-pill"
                aria-label="Send Email"
              >
                <FaEnvelope />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-quick-metrics">
            <div className="metric-chip">
              <span className="metric-number">MCA</span>
              <span className="metric-label">Uka Tarsadia Univ.</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-chip">
              <span className="metric-number">7.70</span>
              <span className="metric-label">BCA CGPA</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-chip">
              <span className="metric-number">MERN</span>
              <span className="metric-label">Core Specialization</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-chip">
              <span className="metric-number">Surat</span>
              <span className="metric-label">Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Portrait Card */}
        <div className="hero-visual">
          <div className="portrait-composition">
            {/* Ambient Card Glow */}
            <div className="card-border-glow" />

            <div className="portrait-frame">
              <div className="portrait-header-bar">
                <div className="window-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="terminal-title">developer.nandani.config</div>
              </div>

              <div className="image-container">
                <img
                  src={profileImage}
                  alt="Nandani Vakodikar - MERN Stack Developer"
                  className="profile-photo"
                  loading="eager"
                />
                <div className="photo-overlay-gradient" />
              </div>

              <div className="portrait-footer-info">
                <div className="portrait-name-meta">
                  <h3>Nandani Vakodikar</h3>
                  <p>MERN Stack Developer &bull; MCA</p>
                </div>

                <div className="tech-icon-dock">
                  <span title="MongoDB" className="dock-icon mongo">
                    <SiMongodb />
                  </span>
                  <span title="Express.js" className="dock-icon express">
                    <SiExpress />
                  </span>
                  <span title="React" className="dock-icon react">
                    <FaReact />
                  </span>
                  <span title="Node.js" className="dock-icon node">
                    <FaNodeJs />
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="floating-card location-card">
              <span className="floating-icon pin">
                <FaMapMarkerAlt />
              </span>
              <div>
                <span className="floating-title">Location</span>
                <span className="floating-val">Surat, Gujarat</span>
              </div>
            </div>

            <div className="floating-card project-focus-card">
              <div className="focus-pulse-dot" />
              <div>
                <span className="floating-title">Active Project</span>
                <span className="floating-val">EliteSalon (MERN)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
