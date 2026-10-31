import { useState } from "react";
import "./Contact.css";
import SectionHeader from "../UI/SectionHeader";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaBriefcase,
} from "react-icons/fa";
import { personalData } from "../../data/portfolioData";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleComposeMail = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.senderName || "Portfolio Visitor"}`
    );
    const mailBody = encodeURIComponent(
      `Hello Nandani,\n\n${formData.message}\n\nFrom: ${formData.senderName} (${formData.senderEmail})`
    );
    window.location.href = `mailto:${personalData.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section className="contact-section" id="contact">
      <SectionHeader
        tag="GET IN TOUCH"
        title="Let's Discuss"
        highlight="Opportunities"
        subtitle="I am actively seeking MERN Stack Developer internships and entry-level engineering roles. Let's connect!"
      />

      {/* Internship Alert Banner */}
      <div className="internship-cta-banner">
        <div className="banner-icon-ring">
          <FaBriefcase className="banner-ico" />
        </div>
        <div className="banner-text">
          <h3>Open for Immediate Internship Opportunities</h3>
          <p>
            Available for MERN Stack, React.js, and Node.js developer internships.
            Eager to contribute high-quality code and learn alongside senior engineers.
          </p>
        </div>
        <a href={`mailto:${personalData.email}`} className="btn-primary banner-action-btn">
          <span>Hire for Internship</span>
        </a>
      </div>

      <div className="contact-content-grid">
        {/* Left Column: Direct Verified Channels */}
        <div className="contact-cards-col">
          {/* Email Card with Copy Action */}
          <div className="contact-info-card editorial-card">
            <div className="card-channel-header">
              <div className="channel-icon-box mail">
                <FaEnvelope />
              </div>
              <div className="channel-text-meta">
                <span className="channel-label">Email Address</span>
                <a href={`mailto:${personalData.email}`} className="channel-value">
                  {personalData.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              className="copy-channel-btn"
              onClick={handleCopyEmail}
              aria-label="Copy Email to Clipboard"
            >
              {copied ? (
                <>
                  <FaCheck className="copied-ico" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <FaCopy />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="contact-info-card editorial-card">
            <div className="card-channel-header">
              <div className="channel-icon-box phone">
                <FaPhoneAlt />
              </div>
              <div className="channel-text-meta">
                <span className="channel-label">Direct Phone</span>
                <a href={`tel:${personalData.phone}`} className="channel-value">
                  {personalData.phone}
                </a>
              </div>
            </div>
            <a href={`tel:${personalData.phone}`} className="action-pill-link">
              <span>Call Direct</span>
            </a>
          </div>

          {/* Location Card */}
          <div className="contact-info-card editorial-card">
            <div className="card-channel-header">
              <div className="channel-icon-box location">
                <FaMapMarkerAlt />
              </div>
              <div className="channel-text-meta">
                <span className="channel-label">Current Location</span>
                <span className="channel-value">{personalData.location}</span>
              </div>
            </div>
            <span className="location-badge-sub">India (IST) &bull; On-site & Remote</span>
          </div>

          {/* Social Links Row */}
          <div className="verified-socials-card editorial-card">
            <span className="socials-card-title">Professional Profiles:</span>
            <div className="social-action-buttons">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
              >
                <FaGithub />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <FaLinkedin />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Email Composer (Functional Mailto Dispatcher) */}
        <div className="contact-form-col">
          <div className="composer-card editorial-card">
            <div className="composer-header">
              <span className="composer-eyebrow">FAST COMMUNICATION</span>
              <h3 className="composer-title">Compose Direct Email</h3>
              <p className="composer-sub">
                Fill in the details below to launch a pre-composed message directly in your
                default email app.
              </p>
            </div>

            <form onSubmit={handleComposeMail} className="composer-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="senderName">Your Name</label>
                  <input
                    type="text"
                    id="senderName"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe / Tech Recruiter"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="senderEmail">Your Email</label>
                  <input
                    type="email"
                    id="senderEmail"
                    name="senderEmail"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    placeholder="recruiter@company.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Project Inquiry"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Nandani, we reviewed your EliteSalon project and would like to invite you for an interview..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary composer-submit-btn">
                <FaPaperPlane />
                <span>Launch Email Client</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
