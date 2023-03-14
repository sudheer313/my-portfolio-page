import React from "react";
import afl from "../images/afl.png";
import pizza from "../images/pizza.png";

import quiz from "../images/quiz.png";
import techi from "../images/techi_blog.png";
import workday from "../images/workday.png";
import weather from "../images/weather.png";
import Project from "./Project";

const projects = [
  {
    id: 1,
    title: "AFL Team Data",
    project_image: afl,
    github: "https://ravikvelaga.github.io/afl-team-data/",
  },
  {
    id: 2,
    title: "Techi Blog",
    project_image: techi,
    github: "https://techiblog-app.herokuapp.com/",
  },
  {
    id: 3,
    title: "Code quiz",
    project_image: quiz,
    github: "https://sudheer313.github.io/Code-Quiz/",
  },
  {
    id: 4,
    title: "Pizza and bar",
    project_image: pizza,
    github: "https://beerandpizza.herokuapp.com/",
  },
  {
    id: 5,
    title: "Weather Dashboard",
    project_image: weather,
    github: "https://sudheer313.github.io/Weather-Dashboard/",
  },
  {
    id: 5,
    title: "Workday scheduler",
    project_image: workday,
    github: "https://sudheer313.github.io/Work-Day-Scheduler/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
