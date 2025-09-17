import React from "react";
import { profile } from "../data/profile";

function Card({ p }) {
  return (
    <div className="card p-6 flex flex-col">
      <h3 className="text-lg font-semibold">{p.name}</h3>
      <p className="mt-2 text-slate-700">{p.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((t)=> <span key={t} className="badge">{t}</span>)}
      </div>
      <div className="mt-4 flex gap-4">
        {p.links.demo && <a className="link" href={p.links.demo} target="_blank">Live</a>}
        {p.links.code && <a className="link" href={p.links.code} target="_blank">GitHub</a>}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {profile.projects.map((p, i)=> <Card key={i} p={p} />)}
    </div>
  )
}
