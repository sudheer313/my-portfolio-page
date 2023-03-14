import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ navState, setNavState }) => {
  const navigationTitles = ["About", "Portfolio", "Contact", "Resume"];

  return (
    <div
      className={`${
        navState ? "links-container nav-visible" : "links-container"
      }`}
    >
      <ul className="links">
        {navigationTitles.map((navTitle) => (
          <li key={navTitle} onClick={() => setNavState((prev) => false)}>
            <Link to={`/20-myreact-portfolio/${navTitle}`} className="link">
              {" "}
              {navTitle}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
