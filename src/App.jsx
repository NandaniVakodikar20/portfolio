import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechMarquee from "./components/TechMarquee/TechMarquee";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
