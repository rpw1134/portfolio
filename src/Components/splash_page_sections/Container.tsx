import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  backgroundColor?: string;
  fullHeight?: boolean;
}

export const Container = ({
  children,
  backgroundColor = "bg-primary",
  fullHeight = true,
}: ContainerProps) => {
  return (
    <div
      className={`${
        fullHeight ? "h-screen" : "min-h-screen pt-4 pb-16"
      } w-screen flex justify-center ${
        fullHeight ? "items-center" : "items-start"
      } ${backgroundColor}`}
    >
      {children}
    </div>
  );
};
