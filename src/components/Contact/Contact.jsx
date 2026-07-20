import "./Contact.css";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-content">

        <p className="section-tag">
          GET IN TOUCH
        </p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="contact-description">
          I am currently pursuing MCA and actively looking for Internship and
          Entry-Level Software Developer opportunities. Feel free to connect
          with me for collaborations, projects, or career opportunities.
        </p>

        <div className="contact-grid">

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <span>vakodikarnandani@gmail.com</span>
            </div>
          </div>

          <div className="info-box">
            <FaPhone />
            <div>
              <h4>Phone</h4>
              <span>+91 82004 88821</span>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <span>Surat, Gujarat, India</span>
            </div>
          </div>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/NandaniVakodikar20"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nandani-vakodikar-929173340"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;