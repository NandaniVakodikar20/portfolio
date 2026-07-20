import "./About.css";
import { FaUserGraduate, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">

        <p className="section-tag">ABOUT ME</p>

      Passionate <span>MERN Stack Developer</span>

       <p className="about-text">
  I am currently pursuing my MCA and passionate about building modern,
  responsive, and scalable web applications using the MERN stack.
  I enjoy turning ideas into real-world projects and continuously
  improving my development skills by learning new technologies.
</p>
       <div className="about-highlights">

  <div>✅ MCA Student</div>

  <div>✅ MERN Stack Developer</div>

  <div>✅ Responsive Web Development</div>

  <div>✅ Quick Learner</div>

</div>
      </div>

      <div className="about-right">

        <div className="about-card">
          <FaUserGraduate />
          <h3>MCA</h3>
          <p>Currently Pursuing</p>
        </div>

        <div className="about-card">
          <FaLaptopCode />
          <h3>8+</h3>
          <p>Technologies</p>
        </div>

        <div className="about-card">
          <FaProjectDiagram />
         <h3>Projects</h3>
<p>Real-World Applications</p>
        </div>

      </div>

    </section>
  );
}

export default About;