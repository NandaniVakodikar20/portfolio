import "./Certificates.css";
import SectionHeader from "../UI/SectionHeader";
import { FaAward, FaCalendarAlt, FaCheckCircle, FaCloud, FaCogs, FaBrain } from "react-icons/fa";
import { certificatesData } from "../../data/portfolioData";

function Certificates() {
  const getCertIcon = (index) => {
    if (index === 0) return <FaBrain />;
    if (index === 1) return <FaCloud />;
    return <FaCogs />;
  };

  return (
    <section className="certificates-section" id="certificates">
      <SectionHeader
        tag="CONTINUOUS LEARNING"
        title="Professional"
        highlight="Certifications"
        subtitle="Validating theoretical knowledge with industry-recognized certifications in Generative AI, cloud computing, and DevOps."
      />

      <div className="certificates-grid-container">
        {certificatesData.map((cert, index) => (
          <div className="certificate-editorial-card editorial-card" key={index}>
            <div className="cert-top-row">
              <div className="cert-icon-wrapper">
                {getCertIcon(index)}
              </div>
              <div className="cert-meta-tags">
                <span className="cert-category-badge">{cert.category}</span>
                <span className="cert-year-badge">
                  <FaCalendarAlt className="meta-ico" /> {cert.year}
                </span>
              </div>
            </div>

            <div className="cert-main-info">
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">
                <FaAward className="award-ico" />
                <span>Issuer: <strong>{cert.issuer}</strong></span>
              </div>
              <p className="cert-description">{cert.description}</p>
            </div>

            <div className="cert-skills-block">
              <span className="skills-label">Core Competencies:</span>
              <div className="cert-skills-chips">
                {cert.skillsGained.map((skill, sIdx) => (
                  <span key={sIdx} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="cert-footer-status">
              <span className="verified-badge">
                <FaCheckCircle className="check-ico" /> Verified Completion
              </span>
              <span className="skillup-mark">
                {cert.issuer.includes("TCS") ? "TCS iON Career Edge" : "SkillUp Program"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
