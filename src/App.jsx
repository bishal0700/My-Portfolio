import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <footer className="footer">
        <p>
          Designed & built by <span className="accent">Bishal Bhowmik</span> ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
