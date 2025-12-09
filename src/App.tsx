import { BrowserRouter, Route, Routes } from "react-router";
import { Aspirations } from "./components/routes/Aspirations";
import { Home } from "./components/routes/Home";
import { Projects } from "./components/routes/Projects";
import { Experience } from "./components/routes/Experience";
import Layout from "./components/nav/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aspirations" element={<Aspirations />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
