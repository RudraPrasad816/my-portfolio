import { Link } from "react-router-dom";

import { usePathContext } from "../context/pathContext";
import { useEffect, useState } from "react";

export const NavLinks = () => {
  const currentPath = usePathContext();

  const urls = {
    pages: [
      { title: "Shop", path: "/shop" },
      { title: "Work", path: "/works" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],

    works: [
      { title: "redash", path: "http://empredash.netlify.app" },
      { title: "resume", path: "/resume" },
      { title: "Rp Clicks", path: "/rpclicks" },
    ],
  };

  const [links, setLinks] = useState(urls.pages);

  useEffect(() => {
    if (currentPath === "/works") {
      setLinks(urls.works);
    }
    else{
      setLinks(urls.pages);
    }
  }, [currentPath]);

  return (
    <nav>
      <ul>
        {links.map((item) => {
          return (
            <li key={item.title}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
