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
          <div className="card p-6 space-y-3">
            <p className="text-slate-700">
              I’m Jasah Shamsudheen - a Full-Stack Developer and Computer Science student at TMU. I build reliable, accessible web applications using React, Node/Express, and SQL, and I’m currently expanding into AI and Machine Learning with Python. With a professional background in finance and management, I bring a disciplined, user-focused approach to every line of code I write.
            </p>
            {/* <p className="text-slate-700">
              I’m especially interested in AI/ML and I’m planning to learn more in this area — things like LLM-powered apps, retrieval (RAG), embeddings/vector databases, and responsible evaluation/guardrails. On my near-term roadmap: TypeScript, PostgreSQL, Docker, and AWS.
            </p> */}
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
            <h4 className="text-center">More on the Way !!! </h4>
          </div>
        </Section>
        
      </main>
      <Footer />
    </>
  );
}
