import React from "react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="container-max py-12 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-2 text-sm uppercase tracking-widest text-slate-500">Hello, I’m</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-slate-700">{profile.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {profile.links.resume && (
              <a className="badge hover:bg-slate-100" href={profile.links.resume} target="_blank">Resume</a>
            )}
            {profile.links.github && (
              <a className="badge hover:bg-slate-100" href={profile.links.github} target="_blank">GitHub</a>
            )}
            {profile.links.linkedin && (
              <a className="badge hover:bg-slate-100" href={profile.links.linkedin} target="_blank">LinkedIn</a>
            )}
            {profile.links.email && (
              <a className="badge hover:bg-slate-100" href={`mailto:${profile.links.email}`}>Email</a>
            )}
          </div>
        </div>
        <div className="justify-self-center">
          
          <div className="card overflow-hidden p-2">
            <img
              src={profile.avatar || "/avatar.jpg"}
              alt={profile.name}
              className="h-56 w-56 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
