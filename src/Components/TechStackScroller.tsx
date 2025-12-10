import TechStackElement from "./TechStackElement";
import PythonSVG from "./svgs/Python";
import TypeScriptSVG from "./svgs/TypeScript";
import JavaSVG from "./svgs/Java";
import NextJSSVG from "./svgs/NextJS";
import ReactSVG from "./svgs/React";
import FastAPISVG from "./svgs/FastAPI";
import SpringSVG from "./svgs/Spring";
import { techColors } from "../utils/techColors";

export default function TechStackScroller() {
  const techStack = [
    { icon: <ReactSVG />, name: "React" },
    { icon: <TypeScriptSVG />, name: "TypeScript" },
    { icon: <PythonSVG />, name: "Python" },
    { icon: <JavaSVG />, name: "Java" },
    { icon: <NextJSSVG />, name: "Next.js" },
    { icon: <FastAPISVG />, name: "FastAPI" },
    { icon: <SpringSVG />, name: "Spring" },
  ];

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="w-full py-16 px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <p className="font-lato text-xs font-medium uppercase tracking-widest text-white/40">
            Technologies
          </p>
          <h2 className="font-garamond text-6xl font-light text-white">
            Tech Stack
          </h2>
          <div className="h-px w-20 bg-white/20" />
        </div>

        <div className="relative flex items-center overflow-hidden">
          <div className="scroll flex gap-8">
            {duplicatedStack.map((tech, index) => (
              <TechStackElement
                key={index}
                icon={tech.icon}
                name={tech.name}
                glowColor={techColors[tech.name] || "#FFFFFF"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
