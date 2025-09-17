import React from "react";

export default function Section({ id, title, children, intro }) {
  return (
    <section id={id} className="container-max py-10 md:py-14">
      <div className="mb-6 flex items-end justify-between gap-6">
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        {intro && <p className="max-w-xl text-sm text-slate-600">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
