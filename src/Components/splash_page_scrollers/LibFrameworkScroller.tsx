import TechStackElement from "../splash_page_sections/TechStackElement";
import NextJSSVG from "../svgs/NextJS";
import ReactSVG from "../svgs/React";
import ExpressSVG from "../svgs/Express";
import SpringSVG from "../svgs/Spring";
import FastAPISVG from "../svgs/FastAPI";
import NodeJSSVG from "../svgs/NodeJS";
import TailwindCSSSVG from "../svgs/TailwindCSS";
import { techColors } from "../../utils/techColors";

export default function LibFrameworkScroller() {
  const librariesFrameworks = [
    { icon: <NextJSSVG />, name: "Next.js" },
    { icon: <ReactSVG />, name: "React.js" },
    { icon: <ExpressSVG />, name: "Express.js" },
    { icon: <SpringSVG />, name: "Spring" },
    { icon: <FastAPISVG />, name: "FastAPI" },
    { icon: <NodeJSSVG />, name: "Node.js" },
    { icon: <TailwindCSSSVG />, name: "TailwindCSS" },
  ];

  const duplicatedLibrariesFrameworks = [
    ...librariesFrameworks,
    ...librariesFrameworks,
  ];

  return (
    <div className="w-full py-16 px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <p className="font-lato text-xs font-medium uppercase tracking-widest text-white/40">
            Technologies
          </p>
          <h2 className="font-garamond text-6xl font-light text-white">
            Libraries & Frameworks
          </h2>
          <div className="h-px w-20 bg-white/20" />
        </div>

        <div className="relative flex items-center overflow-hidden">
          <div className="scroll flex gap-8">
            {duplicatedLibrariesFrameworks.map((tech, index) => (
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
