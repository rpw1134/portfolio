import { useEffect, useRef, useState } from "react";

interface SnapSectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const SnapSection = ({
  children,
  backgroundColor = "bg-primary",
}: SnapSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasSnapped, setHasSnapped] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hasSnapped || !sectionRef.current) return;

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set new timeout to detect when scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Check if section is in viewport (at least 60% visible)
        const visibleHeight =
          Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / viewportHeight;

        if (visibilityRatio > 0.8 && !hasSnapped) {
          // Snap into place with custom smooth scroll
          const targetPosition = sectionRef.current.offsetTop;
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 800; // 800ms for slower animation
          let start: number | null = null;

          const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);

            // Ease-in-out function for smooth deceleration
            const ease =
              progress < 0.5
                ? 2 * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
          setHasSnapped(true);
        }
      }, 150); // Wait 150ms after scrolling stops
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [hasSnapped]);

  return (
    <div
      ref={sectionRef}
      className={`h-screen w-screen flex items-center justify-center ${backgroundColor}`}
    >
      {children}
    </div>
  );
};
