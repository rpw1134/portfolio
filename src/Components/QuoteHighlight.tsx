import { useState, useRef, useEffect } from "react";

interface QuoteHighlightProps {
  quote: string;
  author: string;
  authorLink?: string;
  highlightRadius?: number;
  textColor?: string;
}

export const QuoteHighlight = ({
  quote,
  author,
  authorLink,
  highlightRadius = 85,
  textColor = "rgb(200, 200, 200)",
}: QuoteHighlightProps) => {
  const characters = quote.split("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [charColors, setCharColors] = useState<string[]>(
    characters.map(() => textColor)
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

  // Parse RGB from textColor and create brighter version
  const getBrighterColor = (color: string): string => {
    const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (rgbMatch) {
      const r = Math.min(255, parseInt(rgbMatch[1]) + 55);
      const g = Math.min(255, parseInt(rgbMatch[2]) + 55);
      const b = Math.min(255, parseInt(rgbMatch[3]) + 55);
      return `rgb(${r}, ${g}, ${b})`;
    }
    return "rgb(255, 255, 255)";
  };

  const brighterColor = getBrighterColor(textColor);

  useEffect(() => {
    const newColors = charRefs.current.map((charRef) => {
      if (!charRef || !containerRef.current) return textColor;

      const rect = charRef.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      const charCenterX = rect.left + rect.width / 2 - containerRect.left;
      const charCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = Math.sqrt(
        Math.pow(mousePos.x - charCenterX, 2) +
          Math.pow(mousePos.y - charCenterY, 2)
      );

      return distance <= highlightRadius ? brighterColor : textColor;
    });

    setCharColors(newColors);
  }, [mousePos, characters.length, highlightRadius, brighterColor, textColor]);

  return (
    <div className="flex flex-col animate-float">
      <p
        ref={containerRef}
        className="text-8xl px-10 w-[48rem] font-garamond cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      >
        "
        {characters.map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              charRefs.current[index] = el;
            }}
            className="transition-colors duration-150 ease-out"
            style={{
              color: charColors[index],
            }}
          >
            {char}
          </span>
        ))}
        "
      </p>
      {authorLink ? (
        <a
          className="ml-[40rem] italic font-garamond cursor-pointer"
          href={authorLink}
          target="_blank"
        >
          – {author}
        </a>
      ) : (
        <p className={`ml-[40rem] italic font-garamond text-black`}>
          – {author}
        </p>
      )}
    </div>
  );
};
