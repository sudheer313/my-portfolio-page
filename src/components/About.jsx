import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="img">
        <img
          src={require("../images/IMG_1211.jpg")}
          alt=" not found"
          width="100%"
        />
      </div>

      <p>
        Front-end UI Developer with 3 years of experience in developing web pages using HTML5, CSS3, JavaScript, and various UI frameworks. Skilled in ReactJS, FLUX for Unidirectional Data flow, React-Router, and Redux for building scalable Single Page Applications. Experience in designing web pages, developing styles, and optimising web page performance. Full-stack development experience with NodeJS, MongoDB, and SQL databases. Passionate about writing clean and reusable code that follows best practices.

     </p>
    </div>
  );
};

export default About;
