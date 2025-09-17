import React from "react";
import { profile } from "../data/profile";

function Item({ role }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{role.title} • <span className="text-slate-700">{role.company}</span></h3>
          <p className="text-slate-500 text-sm">{role.period}</p>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        {role.bullets.map((b,i)=> <li key={i}>{b}</li>)}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <div className="grid gap-6">
      {profile.experience.map((r, idx)=> <Item key={idx} role={r} />)}
    </div>
  )
}
