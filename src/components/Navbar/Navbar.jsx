import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";
import { navigationLinks, personalData } from "../../data/portfolioData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll for frosted glass navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navigationLinks.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand / Logo */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-monogram">NV</span>
          <span className="brand-text">
            Nandani<span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {link.label}
                    {isActive && <span className="active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions & Socials */}
        <div className="navbar-actions">
          <div className="social-pill-group">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>

          <a
            href={personalData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume-btn"
          >
            <FaFileAlt className="btn-icon" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
        <div
          className={`mobile-drawer ${menuOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-drawer-header">
            <div className="brand-monogram">NV</div>
            <button
              type="button"
              className="drawer-close-btn"
              onClick={closeMenu}
              aria-label="Close navigation"
            >
              <FaTimes />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                    onClick={closeMenu}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="mobile-active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-socials">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn"
                aria-label="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mobile-resume-cta"
              onClick={closeMenu}
            >
              <FaFileAlt /> View Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
