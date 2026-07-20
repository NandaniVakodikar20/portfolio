import heroImage from "../../assets/images/hero.png";
import "./Hero.css";

function HeroCard() {
  return (
    <div className="developer-card">

      <div className="status">
        <span className="dot"></span>
        Available for Internship
      </div>

      <img src={heroImage} alt="Nandani Vakodikar" />

      <h3>Nandani Vakodikar</h3>

      <p className="designation">MERN Stack Developer</p>

      <div className="info">

        <span>🎓 MCA Student</span>

        <span>📍 Surat, Gujarat</span>

        <span>🚀 Open to Work</span>

      </div>
      <div className="project-badge">
  🚀 Currently Building <strong>EliteSalon</strong> (MERN Stack)
</div>

    </div>
  );
}

export default HeroCard;