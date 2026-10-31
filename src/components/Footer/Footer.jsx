import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { personalData, navigationLinks } from "../../data/portfolioData";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner-content">
        <div className="footer-top-row">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="brand-monogram">NV</span>
              <span className="brand-title">Nandani Vakodikar</span>
            </div>
            <p className="footer-tagline">
              MERN Stack Developer &bull; MCA Student at Uka Tarsadia University. Building
              modern, performant, and reliable web applications.
            </p>
            <div className="footer-status-indicator">
              <span className="footer-pulse-dot" />
              <span>Actively Available for Internships</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <span className="footer-col-heading">Navigation</span>
            <ul className="footer-nav-list">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="footer-connect-col">
            <span className="footer-col-heading">Connect</span>
            <div className="footer-social-links">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>

            <a href={`mailto:${personalData.email}`} className="footer-email-link">
              {personalData.email}
            </a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Nandani Vakodikar. All rights reserved.
          </p>

          <p className="attribution-text">
            Crafted with React, Node & modern web standards
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp className="arrow-top" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
