import "./Education.css";
import SectionHeader from "../UI/SectionHeader";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaCheck,
} from "react-icons/fa";
import { educationData } from "../../data/portfolioData";

function Education() {
  return (
    <section className="education-section" id="education">
      <SectionHeader
        tag="ACADEMIC BACKGROUND"
        title="Education &"
        highlight="Qualifications"
        subtitle="My academic foundation has instilled rigorous computer science fundamentals, analytical thinking, and software engineering discipline."
      />

      <div className="education-timeline-container">
        <div className="timeline-spine-track" />

        <div className="timeline-cards-list">
          {educationData.map((edu, index) => (
            <div className="timeline-entry-row" key={index}>
              {/* Timeline Indicator Node */}
              <div className="timeline-node">
                <div className="node-outer-ring">
                  <div className="node-inner-dot" />
                </div>
              </div>

              {/* Timeline Content Card */}
              <div className="timeline-content-card editorial-card">
                <div className="card-top-meta">
                  <div className="period-badge">
                    <FaCalendarAlt className="meta-icon" />
                    <span>{edu.period}</span>
                  </div>

                  <div className="score-badge">
                    <FaAward className="meta-icon" />
                    <strong>{edu.score}</strong>
                  </div>
                </div>

                <h3 className="education-degree-title">{edu.degree}</h3>

                <div className="institution-info">
                  <span className="inst-name">{edu.institute}</span>
                  <span className="inst-location">
                    <FaMapMarkerAlt className="pin-icon" /> {edu.university}
                  </span>
                </div>

                {edu.highlights && (
                  <div className="education-highlights">
                    <ul>
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx}>
                          <FaCheck className="bullet-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
