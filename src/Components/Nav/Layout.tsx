import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import Contact from "./Contact";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Contact />
    </div>
  );
}
