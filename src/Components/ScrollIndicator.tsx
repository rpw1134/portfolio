interface ScrollIndicatorProps {
  onClick: () => void;
}

export default function ScrollIndicator({ onClick }: ScrollIndicatorProps) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none group duration-100"
      aria-label="Scroll to about me"
    >
      <div className="relative">
        {/* Ghost arrow */}
        <svg
          className="absolute inset-0"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "arrow-pulse 2s ease-in-out infinite" }}
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/30 group-hover:text-accent/40"
          />
          <path
            d="M7 14l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/30 group-hover:text-accent/40"
          />
        </svg>
        {/* Main arrow */}
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/60 group-hover:text-accent transition-colors"
          />
          <path
            d="M7 14l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/60 group-hover:text-accent transition-colors"
          />
        </svg>
      </div>
    </button>
  );
}
