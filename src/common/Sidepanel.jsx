import { Link, useLocation } from "react-router-dom";
import { usePathContext } from "../context/pathContext";
import { useEffect } from "react";

export const Sidepanel = () => {
  const path = usePathContext();

  return (
    <aside>
      {path === "/" ? (
        <>
          <p className="intro-name">
            <a
              href="https://www.linkedin.com/in/rudra-prasad-rath-1b67b2235"
              target="blank"
            >
              Li
            </a>
            <a href="mailto: rudraprasad816@gmail.com" target="blank">
              Ma
            </a>
            <a href="https://x.com/RudraPrasad816" target="blank">
              Tr
            </a>
          </p>
          <p className="date">@2023</p>
        </>
      ) : (
        <>
          <p className="intro-name">
            <Link to={"/"}>Home</Link>
          </p>
          <p className="date">@2023</p>
        </>
      )}
    </aside>
  );
};
