import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isOpen, onClose }) => {
  const navigationTitles = ["About", "Portfolio", "Contact", "Resume"];

  const handleClick = () => {
    onClose();
  };

  return (
    <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
      <ul className="nav__list">
        {navigationTitles.map((title) => (
          <li key={title} className="nav__item" onClick={handleClick}>
            <Link to={`/${title.toLowerCase()}`} className="nav__link">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
