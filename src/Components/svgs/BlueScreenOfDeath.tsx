export default function BlueScreenOfDeath() {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full bg-secondary"
    >
      <text
        x="200"
        y="140"
        fontSize="96"
        fill="rgba(255, 255, 255, 0.3)"
        textAnchor="middle"
        fontFamily="monospace"
        fontWeight="300"
      >
        :(
      </text>

      <text
        x="200"
        y="220"
        fontSize="16"
        fill="rgba(255, 255, 255, 0.4)"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        No available images for this project
      </text>
    </svg>
  );
}
