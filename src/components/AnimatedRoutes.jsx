import { Routes, Route } from "react-router-dom";

import { Sidepanel } from "../common/Sidepanel";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Works } from "../pages/Works";
import { Contact } from "../pages/Contact";
import { useEffect, useState } from "react";
import { usePathContext } from "../context/pathContext";

export const AnimatedRoutes = () => {
  const currentPath = usePathContext();

  const [path, setPath] = useState(currentPath);
  const [transition, setTransition] = useState("fadeIn");
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (currentPath !== path) {
      setTransition("fadeOut");

      setTimeout(() => {
        setTransition("faded");
      }, 500);

      setTimeout(() => {
        setPath(currentPath);
        setTransition("fadeIn");
      }, 600);
    }

    if (currentPath === "/works" || currentPath === "/contact") {
      setTheme("dark");
    } else {
      setTheme("");
    }
  }, [currentPath, path]);

  return (
    <div className={`page ${transition} ${theme}`}>
      <Sidepanel />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};
