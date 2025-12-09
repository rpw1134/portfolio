import { useState, useRef, useEffect } from "react";

export const Home = () => {
  const quote = "The best way to predict the future is to invent it.";
  const characters = quote.split("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [charColors, setCharColors] = useState<string[]>(
    characters.map(() => "rgb(255, 255, 255)")
  );
  const containerRef = useRef<HTMLParagraphElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLParagraphElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    }
  };

  useEffect(() => {
    const newColors = charRefs.current.map((charRef) => {
      if (!charRef || !containerRef.current) return "rgb(255, 255, 255)";

      const rect = charRef.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const charCenterX = rect.left + rect.width / 2 - containerRect.left;
      const charCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = Math.sqrt(
        Math.pow(mousePos.x - charCenterX, 2) +
          Math.pow(mousePos.y - charCenterY, 2)
      );

      const maxDistance = 85;

      return distance <= maxDistance
        ? "rgb(58, 186, 122)"
        : "rgb(255, 255, 255)";
    });

    setCharColors(newColors);
  }, [mousePos, characters.length]);

  return (
    <div className="h-auto min-h-screen min-w-screen bg-primary flex flex-col">
      <div className="h-[93vh] w-[94vw] mx-auto my-auto bg-secondary rounded-lg flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <p
            ref={containerRef}
            className="text-8xl px-10 w-[48rem] font-garamond cursor-pointer"
            onMouseMove={handleMouseMove}
          >
            "
            {characters.map((char, index) => (
              <span
                key={index}
                ref={(el) => {
                  charRefs.current[index] = el;
                }}
                className="transition-colors duration-75 ease-out"
                style={{
                  color: charColors[index],
                }}
              >
                {char}
              </span>
            ))}
            "
          </p>
          <a
            className="ml-[40rem] italic font-garamond text-black cursor-pointer"
            href="https://en.wikipedia.org/wiki/Alan_Kay"
          >
            – Alan Kay
          </a>
        </div>
      </div>
    </div>
  );
};
