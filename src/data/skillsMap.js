
import * as Si from "react-icons/si";
import { FaJava } from "react-icons/fa"; 
import { FaFlask } from "react-icons/fa";

const pick = (...candidates) => candidates.find(Boolean);

export const skillsMap = {
  python: Si.SiPython,
  javascript: Si.SiJavascript,
  java: pick(Si.SiJava, FaJava),     // ← will use SiJava if present, else FaJava
  "c#": pick(Si.SiCsharp, Si.SiDotnet),
  c: Si.SiC,
  "c++": Si.SiCplusplus,
  "c/c++": Si.SiCplusplus,
  html: Si.SiHtml5,
  css: Si.SiCss3,
  "html/css": Si.SiHtml5,
  sql: Si.SiMysql,
  react: Si.SiReact,
  redux: Si.SiRedux,
  "redux toolkit": Si.SiRedux,
  "node.js": Si.SiNodedotjs,
  node: Si.SiNodedotjs,
  express: Si.SiExpress,
  django: Si.SiDjango,
  bootstrap: Si.SiBootstrap,
  tailwind: Si.SiTailwindcss,
  tailwindcss: Si.SiTailwindcss,
  git: Si.SiGit,
  jupyter: Si.SiJupyter,
  linux: Si.SiLinux,
  // "flask": FaFlask,
  "flask": Si.SiFlask,
  "linux/unix": Si.SiLinux,
  "vs code": Si.SiVisualstudiocode,
  vscode: Si.SiVisualstudiocode,
};
