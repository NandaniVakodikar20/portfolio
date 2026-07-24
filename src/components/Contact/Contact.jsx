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

      <div className="contact-left">

        <p className="section-tag">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="contact-description">
          I am currently looking for Internship and Entry-Level Software
          Developer opportunities. Feel free to contact me for projects,
          collaborations or career opportunities.
        </p>

        <div className="contact-info">

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
              <span>+91 8200488821</span>
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

      <div className="contact-right">

        <div className="contact-card">

          <h3>Available for Internship</h3>

          <p>
            Open to MERN Stack, React.js, Node.js and Full Stack Developer
            Internship opportunities.
          </p>

          <a
            href="mailto:vakodikarnandani@gmail.com"
            className="contact-btn"
          >
            Send Email
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;