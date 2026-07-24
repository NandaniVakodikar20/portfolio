import "./Certificates.css";
import { FaAward } from "react-icons/fa";

function Certificates() {

  const certificates = [

    {
      title: "Introduction to Cloud Computing",
      provider: "Simplilearn SkillUp",
      year: "2025"
    },

    {
      title: "Introduction to DevOps Tools",
      provider: "Simplilearn SkillUp",
      year: "2025"
    }

  ];

  return (

    <section className="certificates" id="certificates">

      <p className="section-tag">
        CERTIFICATIONS
      </p>

      <h2 className="section-title">
        My <span>Certificates</span>
      </h2>

      <p className="certificate-description">
        I continuously enhance my technical knowledge by completing industry-recognized certifications in cloud computing, DevOps, and modern software development.
      </p>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <FaAward className="certificate-icon"/>

            <h3>{certificate.title}</h3>

            <p>{certificate.provider}</p>

            <span className="certificate-year">
              {certificate.year}
            </span>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Certificates;