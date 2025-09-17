import React from "react";
import { profile } from "../data/profile";

export default function Education() {
  return (
    <div className="grid gap-6">
      {profile.education.map((e, i)=> (
        <div key={i} className="card p-6">
          <h3 className="text-lg font-semibold">{e.school}</h3>
          <p className="text-slate-700">{e.degree}</p>
          <p className="text-slate-500 text-sm">{e.period}</p>
          {e.notes && <p className="mt-3 text-slate-700">{e.notes}</p>}
        </div>
      ))}
    </div>
  )
}
