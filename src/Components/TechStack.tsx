import { TechStack as TechStackType } from "../types/TechStack";
import { techLogos } from "../utils/techLogos";

interface TechStackProps {
  items: TechStackType[];
}

export default function TechStack({ items }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item, index) => {
        const logo = techLogos[item.title];
        return (
          <div
            key={index}
            className="tech-stack-item flex items-center gap-3 rounded-lg px-4 py-3"
          >
            {logo && <div className="h-8 w-8">{logo}</div>}
            <span className="text-base font-medium">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
}
