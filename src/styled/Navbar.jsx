import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="container-max flex h-14 items-center justify-between">
        <a href="#" className="text-lg font-semibold">
          <span className="grad-text">jasah.dev</span>
        </a>
        <div className="hidden gap-6 text-sm md:flex">
          <a href="#about" className="hover:text-brand-700">About</a>
          <a href="#experience" className="hover:text-brand-700">Experience</a>
          <a href="#projects" className="hover:text-brand-700">Projects</a>
          <a href="#contact" className="hover:text-brand-700">Contact</a>
        </div>
      </nav>
    </header>
  );
}
