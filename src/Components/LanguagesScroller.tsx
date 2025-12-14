import TechStackElement from "./TechStackElement";
import PythonSVG from "./svgs/Python";
import TypeScriptSVG from "./svgs/TypeScript";
import JavaSVG from "./svgs/Java";
import JavaScriptSVG from "./svgs/JavaScript";
import CSVG from "./svgs/C";
import HTML5SVG from "./svgs/HTML5";
import CSSSVG from "./svgs/CSS";
import { techColors } from "../utils/techColors";

export default function LanguagesScroller() {
  const languages = [
    { icon: <PythonSVG />, name: "Python" },
    { icon: <TypeScriptSVG />, name: "TypeScript" },
    { icon: <JavaSVG />, name: "Java" },
    { icon: <JavaScriptSVG />, name: "JavaScript" },
    { icon: <CSVG />, name: "C" },
    { icon: <HTML5SVG />, name: "HTML5" },
    { icon: <CSSSVG />, name: "CSS" },
  ];

  const duplicatedLanguages = [...languages, ...languages];

  return (
    <div className="w-full py-16 px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <p className="font-lato text-xs font-medium uppercase tracking-widest text-white/40">
            Technologies
          </p>
          <h2 className="font-garamond text-6xl font-light text-white">
            Languages
          </h2>
          <div className="h-px w-20 bg-white/20" />
        </div>

        <div className="relative flex items-center overflow-hidden">
          <div className="scroll flex gap-8">
            {duplicatedLanguages.map((tech, index) => (
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
