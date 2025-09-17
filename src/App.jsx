import React from "react";
import "./index.css";
import Navbar from "./styled/Navbar";
import Hero from "./styled/Hero";
import Section from "./styled/Section";
import Education from "./styled/Education";
import Experience from "./styled/Experience";
import Projects from "./styled/Projects";
import Footer from "./styled/Footer";
import Skills from "./styled/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About">
          <div className="card p-6">
            <p className="text-slate-700">
              I focus on building clean, accessible interfaces and robust back-ends.
              This portfolio is intentionally minimal—fast to load, easy to read, and focused on the work.
            </p>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="container-max">
            <Education />
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="container-max">
            <Experience />
          </div>
        </Section>

        <Section id="skills" title="Skills" >
          <div className="container-max">
            <Skills />
          </div>
        </Section>


        <Section id="projects" title="Projects">
          <div className="container-max">
            <Projects />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
