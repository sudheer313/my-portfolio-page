import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [navState, setNavState] = useState(false);
  return (
    <div>
      <nav>
        <div className="brand-container">
          <div className="brand">
            <Link to="/20-myreact-portfolio" className="logo">
              Sudheer Kandula
            </Link>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              {navState ? (
                <MdClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
          </div>
        </div>
        <Navigation navState={navState} setNavState={setNavState} />
      </nav>
    </div>
  );
};

export default Header;
