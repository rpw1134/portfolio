import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { ExperienceNode } from "./types";
import { TimelineNode } from "./TimelineNode";
import { TimelineMinorNode } from "./TimelineMinorNode";

interface TimelineProps {
  experiences: ExperienceNode[];
}

export const Timeline = ({ experiences }: TimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const nodesContainerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeNodeId, setActiveNodeId] = useState<string>(experiences[0]?.id);
  const [fillHeight, setFillHeight] = useState(0);
  const [timelineStart, setTimelineStart] = useState(0);
  const [timelineLength, setTimelineLength] = useState(1);
  const [reachedIds, setReachedIds] = useState<Set<string>>(new Set());

  // Measure line span between first and last node centers for clamped fill
  useEffect(() => {
    if (!nodesContainerRef.current || nodeRefs.current.length === 0) return;
    const first = nodeRefs.current[0];
    const last = nodeRefs.current[nodeRefs.current.length - 1];
    if (!first || !last) return;

    const start = first.offsetTop + first.offsetHeight / 2;
    const end = last.offsetTop + last.offsetHeight / 2;
    setTimelineStart(start);
    setTimelineLength(Math.max(1, end - start));
  }, [experiences]);

  useEffect(() => {
    const handleScroll = () => {
      if (!nodesContainerRef.current) return;

      const nodesTop =
        nodesContainerRef.current.getBoundingClientRect().top + window.scrollY;

      const viewportHeight = window.innerHeight;

      // Use a focus point closer to center so activation aligns near mid-viewport
      const focusOffsetRatio = 0.5;
      const focusY =
        window.scrollY + viewportHeight * focusOffsetRatio - nodesTop;

      // Update fill height clamped to first/last nodes
      const clampedProgress = Math.max(
        0,
        Math.min(1, (focusY - timelineStart) / timelineLength)
      );
      setFillHeight(clampedProgress * timelineLength);

      // Mark nodes as reached when the fill passes their center and set active to the latest reached
      const newlyReached = new Set<string>();
      let lastReachedIndex = -1;
      nodeRefs.current.forEach((nodeRef, idx) => {
        if (!nodeRef) return;
        const nodeCenter = nodeRef.offsetTop + nodeRef.offsetHeight / 2;
        if (focusY >= nodeCenter) {
          newlyReached.add(experiences[idx].id);
          lastReachedIndex = idx;
        }
      });
      setReachedIds(newlyReached);

      if (lastReachedIndex >= 0) {
        const latestId = experiences[lastReachedIndex].id;
        if (latestId !== activeNodeId) {
          setActiveNodeId(latestId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [experiences, activeNodeId, timelineStart, timelineLength]);

  // Animate timeline fill based on scroll progress
  useEffect(() => {
    if (!timelineRef.current || !nodesContainerRef.current) return;

    const fillElement = timelineRef.current.querySelector(".timeline-fill");
    if (!fillElement) return;

    animate(fillElement, {
      height: fillHeight,
      duration: 120,
      easing: "linear",
    });
  }, [fillHeight]);

  return (
    <div className="relative min-h-screen pb-20">
      {/* Nodes and content */}
      <div ref={nodesContainerRef} className="relative space-y-28 py-8 pb-48">
        {/* Timeline line - slightly left of center for better balance */}
        <div
          ref={timelineRef}
          className="absolute left-[26%] top-0 bottom-0 w-[3px] pointer-events-none z-10"
          style={{ transform: "translateX(-50%)" }}
        >
          {/* Background line */}
          <div
            className="absolute left-0 w-full bg-accent/15"
            style={{ top: timelineStart, height: timelineLength }}
          />
          {/* Animated fill line */}
          <div
            className="timeline-fill absolute left-0 w-full bg-accent"
            style={{ top: timelineStart, height: 0 }}
          />
        </div>
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            ref={(el) => {
              nodeRefs.current[index] = el;
            }}
            className="relative flex items-center"
          >
            {/* Node marker on timeline */}
            <div
              className="absolute left-[26%] z-20"
              style={{ transform: "translateX(-50%)" }}
            >
              {experience.type === "major" ? (
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    reachedIds.has(experience.id)
                      ? "bg-accent border-accent scale-125"
                      : "bg-secondary border-accent/40"
                  }`}
                />
              ) : (
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    reachedIds.has(experience.id)
                      ? "bg-accent scale-125"
                      : "bg-accent/35"
                  }`}
                />
              )}
            </div>

            {/* Content on right side (2/3 of page) */}
            <div className="ml-[36%] w-[58%]">
              {experience.type === "major" ? (
                <TimelineNode
                  title={experience.title}
                  description={experience.description}
                  date={experience.date}
                  image={experience.image}
                  isActive={activeNodeId === experience.id}
                />
              ) : (
                <TimelineMinorNode
                  title={experience.title}
                  date={experience.date}
                  isActive={activeNodeId === experience.id}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
