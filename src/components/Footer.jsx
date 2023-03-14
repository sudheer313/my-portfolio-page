import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

function Footer() {
  const handleSocialClick = (type) => {
    if (type === "github") {
      window.open("https://github.com/sudheer313", "_blank");
    } else if (type === "linkdin") {
      //add linkdin page
      window.open("https://www.linkedin.com/in/sudheer-kandula/", "_blank");
    } else {
      //add stack over flow page
      window.open(
        "http://stackoverflow.com/users/18934176/sudheer-kandulain.com/in/sudheer-kandula/",
        "_blank"
      );
    }
  };

  return (
    <div className="footer">
      <GoMarkGithub size={30} onClick={() => handleSocialClick("github")} />
      <AiFillLinkedin size={30} onClick={() => handleSocialClick("linkdin")} />
      <BsStackOverflow size={30} onClick={() => handleSocialClick("twitter")} />
    </div>
  );
}

export default Footer;
