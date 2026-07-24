import "./Hero.css";
// import heroImage from "../../assets/images/hero.png";

import HeroCard from "./HeroCard";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <p className="hero-subtitle">
           Hello, I'm
        </p>

        <h1 className="hero-title">
          Nandani
          <br />
          <span>Vakodikar</span>
        </h1>

    <TypeAnimation
  sequence={[
    "MERN Stack Developer",
    2000,
    "React Developer",
    2000,
    "Node.js Developer",
    2000,
    "Open to Internship",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  className="hero-role"
/>

      <p className="hero-description">
  I'm an MCA student passionate about building modern, responsive, and
  scalable web applications using the MERN stack. I enjoy transforming
  ideas into real-world projects while continuously improving my
  development skills.
</p>

  <div className="hero-buttons">

  <a href="#projects" className="primary-btn">
    Explore Projects
  </a>

  <a
    href="/resume/MCA_NANDANI_VAKODIKAR.pdf"
    download
    className="secondary-btn"
  >
    Download Resume
  </a>

</div>


      </div>

   <div className="hero-right">
    <HeroCard />
</div>

    </section>
  );
}

export default Hero;