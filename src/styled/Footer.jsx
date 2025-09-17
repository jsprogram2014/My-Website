import React from "react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-slate-200 bg-white/60">
      <div className="container-max py-10 flex flex-col items-center gap-2 text-center">
        <div className="text-slate-600">Let’s build something great.</div>
        {profile.links.email && (
          <a className="badge hover:bg-slate-100" href={`mailto:${profile.links.email}`}>{profile.links.email}</a>
        )}
        <div className="text-xs text-slate-400">© {new Date().getFullYear()} {profile.name}</div>
      </div>
    </footer>
  );
}
