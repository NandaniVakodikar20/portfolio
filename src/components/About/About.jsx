import "./About.css";
import SectionHeader from "../UI/SectionHeader";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaLightbulb,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { personalData, aboutNarratives } from "../../data/portfolioData";

function About() {
  return (
    <section className="about-section" id="about">
      <SectionHeader
        tag="ABOUT ME"
        title="Engineering with Purpose &"
        highlight="Academic Rigor"
        subtitle="A synthesis of computer science fundamentals, full-stack craftsmanship, and dedicated problem-solving."
      />

      <div className="about-editorial-grid">
        {/* Left Column: Narrative Story */}
        <div className="about-narrative-card editorial-card">
          <div className="narrative-header">
            <span className="editorial-eyebrow">DEVELOPER BACKGROUND</span>
            <h3 className="narrative-headline">
              {aboutNarratives.headline}
            </h3>
          </div>

          <div className="narrative-body">
            {aboutNarratives.paragraphs.map((para, idx) => (
              <p key={idx} className="narrative-para">
                {para}
              </p>
            ))}
          </div>

          <div className="about-focus-areas">
            <h4 className="focus-title">Core Development Values:</h4>
            <div className="focus-grid">
              <div className="focus-item">
                <FaCheckCircle className="check-icon" />
                <span>Responsive & Accessible UI Architecture</span>
              </div>
              <div className="focus-item">
                <FaCheckCircle className="check-icon" />
                <span>Modular RESTful Endpoints & Validation</span>
              </div>
              <div className="focus-item">
                <FaCheckCircle className="check-icon" />
                <span>Scalable Schema Design in MongoDB, MySQL & SQLite</span>
              </div>
              <div className="focus-item">
                <FaCheckCircle className="check-icon" />
                <span>Android Development with Kotlin & XML</span>
              </div>
              <div className="focus-item">
                <FaCheckCircle className="check-icon" />
                <span>Clean Git Version Control & Postman Testing</span>
              </div>
              <div className="focus-item">
                <FaCheckCircle className="check-icon" />
                <span>Java OOP & Singleton Architecture</span>
              </div>
            </div>
          </div>

          <div className="about-location-pill">
            <FaMapMarkerAlt className="pin-icon" />
            <span>Currently based in {personalData.location} &bull; Open to On-site & Remote Internships</span>
          </div>
        </div>

        {/* Right Column: Pillars & Bento Highlights */}
        <div className="about-pillars-column">
          {aboutNarratives.pillars.map((pillar, idx) => (
            <div className="pillar-card editorial-card" key={idx}>
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  {idx === 0 && <FaLaptopCode />}
                  {idx === 1 && <FaServer />}
                  {idx === 2 && <FaLightbulb />}
                </div>
                <span className="pillar-badge">{pillar.badge}</span>
              </div>
              <h4 className="pillar-title">{pillar.title}</h4>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}

          {/* Academic Snapshot Bento Box */}
          <div className="academic-snapshot-card editorial-card">
            <div className="snapshot-header">
              <FaGraduationCap className="snapshot-icon" />
              <div>
                <span className="snapshot-eyebrow">ACADEMIC EXCELLENCE</span>
                <h4 className="snapshot-degree">BCA (7.70 CGPA) &rarr; MCA Candidate</h4>
              </div>
            </div>
            <p className="snapshot-text">
              Consistently translating theoretical computer science principles into
              production-grade code—from relational database normalization in MySQL to asynchronous
              event-driven logic in Node.js.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
