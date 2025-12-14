import TechStackElement from "../splash_page_sections/TechStackElement";
import PrismaSVG from "../svgs/Prisma";
import SupabaseSVG from "../svgs/Supabase";
import RedisSVG from "../svgs/Redis";
import GitSVG from "../svgs/Git";
import GitHubSVG from "../svgs/GitHub";
import GitHubActionsSVG from "../svgs/GitHubActions";
import PlaywrightSVG from "../svgs/Playwright";
import { techColors } from "../../utils/techColors";

export default function InfrastructureDevOpsScroller() {
  const techStack = [
    { icon: <PrismaSVG />, name: "Prisma" },
    { icon: <SupabaseSVG />, name: "Supabase" },
    { icon: <RedisSVG />, name: "Redis" },
    { icon: <GitSVG />, name: "Git" },
    { icon: <GitHubSVG />, name: "GitHub" },
    { icon: <GitHubActionsSVG />, name: "GitHub Actions" },
    { icon: <PlaywrightSVG />, name: "Playwright" },
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
            Infrastructure & DevOps
          </h2>
          <div className="h-px w-20 bg-white/20" />
        </div>

        <div className="relative flex items-center overflow-hidden">
          <div className="scroll-right flex gap-8">
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
