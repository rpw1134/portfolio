import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/aspirations", label: "Aspirations" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Hide when scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary/20 hover:bg-primary/80 transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex px-10 justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl">Ryan Williams</span>
          </div>

          <div className="flex space-x-8">
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-light text-white/90 transition-all relative ${
                    isActive
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white/60"
                      : "hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
