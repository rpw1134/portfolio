interface TechStackElementProps {
  icon: React.ReactNode;
  name: string;
  glowColor: string;
}

export default function TechStackElement({
  icon,
  name,
  glowColor,
}: TechStackElementProps) {
  return (
    <div
      className="group flex flex-col items-center gap-3 rounded-lg border border-secondary/50 bg-primary/30 p-6 w-[20vw] transition-all duration-300 hover:border-white/20"
      style={{
        boxShadow: `0 0 0 rgba(${parseInt(
          glowColor.slice(1, 3),
          16
        )}, ${parseInt(glowColor.slice(3, 5), 16)}, ${parseInt(
          glowColor.slice(5, 7),
          16
        )}, 0)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px rgba(${parseInt(
          glowColor.slice(1, 3),
          16
        )}, ${parseInt(glowColor.slice(3, 5), 16)}, ${parseInt(
          glowColor.slice(5, 7),
          16
        )}, 0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 rgba(${parseInt(
          glowColor.slice(1, 3),
          16
        )}, ${parseInt(glowColor.slice(3, 5), 16)}, ${parseInt(
          glowColor.slice(5, 7),
          16
        )}, 0)`;
      }}
    >
      <div className="h-16 w-16 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="font-lato text-sm font-light text-white/70 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
}
