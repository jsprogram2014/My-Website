
import { skillsMap } from "../data/skillsMap";
import { profile } from "../data/profile";

export default function Skills() {
  const items = Array.isArray(profile.skills) ? profile.skills : [];
  const normalized = Array.from(
    new Set(items.map((s) => String(s).trim().toLowerCase()))
  );

  // Brand-ish colors per skill label 

  const colorMap = {
    python: "text-yellow-500",
    javascript: "text-yellow-400",
    java: "text-orange-600",
    "c#": "text-purple-600",
    c: "text-slate-900",
    "c++": "text-slate-900",
    "c/c++": "text-slate-900",
    html: "text-orange-600",
    css: "text-blue-600",
    "html/css": "text-orange-600",
    sql: "text-blue-700",
    react: "text-cyan-500",
    redux: "text-purple-500",
    "redux toolkit": "text-purple-500",
    node: "text-green-600",
    "node.js": "text-green-600",
    express: "text-gray-900",
    bootstrap: "text-indigo-600",
    tailwind: "text-sky-500",
    tailwindcss: "text-sky-500",
    git: "text-orange-600",
    jupyter: "text-amber-600",
    linux: "text-black",
    "linux/unix": "text-black",
    "vs code": "text-blue-600",
    vscode: "text-blue-600",
  };

  return (
    <section id="skills" className="container mx-auto px-4 py-41">
      {/* <h2 className="text-3xl font-bold mb-6">Skills</h2> */}

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {normalized.map((name) => {
          const Icon = skillsMap[name] || null;
          const colorClass = colorMap[name] || "text-slate-900";

          return (
            <li
              key={name}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur px-4 py-3 shadow-sm"
              title={name}
            >
              {Icon ? (
                <Icon
                  className={`text-2xl shrink-0 ${colorClass}`}
                  aria-hidden="true"
                />
              ) : (
                <span className="w-6 h-6 rounded bg-slate-200 inline-block" />
              )}
              <span className="capitalize text-slate-800">{name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
