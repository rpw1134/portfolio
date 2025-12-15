import { ReactNode } from "react";

interface ProjectBoxCardProps {
  children: ReactNode;
  backgroundSVG?: React.ComponentType;
}

export const ProjectBoxCard = ({
  children,
  backgroundSVG: BackgroundSVG,
}: ProjectBoxCardProps) => {
  return (
    <div className="group relative h-auto w-full overflow-hidden rounded-lg bg-secondary border border-white/10 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(58,186,122,0.15)] cursor-pointer">
      {BackgroundSVG && (
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
          <BackgroundSVG />
        </div>
      )}

      <div className="relative h-full flex flex-col justify-between p-6 z-10">
        {children}
      </div>
    </div>
  );
};
