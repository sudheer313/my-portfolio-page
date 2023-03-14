import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/Sudheer_FullStack_resume.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        Download my
        <Link
          to={resume}
          target="_blank"
          download
          className="download-resume-btn"
        >
          resume
        </Link>
      </p>
      <div className="skills">
        <div className="frontend">
          <span>Front-end Proficiencies</span>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="backend">
          <span>Back-end Proficiencies</span>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySql</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
