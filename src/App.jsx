import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/TechStack/TechStack";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack/>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
    </>
  );
}

export default App;