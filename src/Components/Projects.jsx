import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "Bang On Time",
      desc: "Place your cards in the correct chronological order, in this fast-paced, competitive mobile game.",
      liveLink: "website url",
      githubLink: "https://github.com/",
      techs: ["HTML", "CSS", "TypeScript"],
      isOpenSource: true,
    },
    {
      name: "iRoll",
      desc: "Get the ball in the goal by avoiding obstacles.\n" +
          "Find the quickest route and beat your own record.",
      liveLink: "website url",
      githubLink: "https://github.com/",
      techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
      isOpenSource: true,
    },
    {
      name: "LAB",
      desc: "Guide the ball into the goal by placing cards which spawn objects.\n" +
          "Win, collect and craft cards!",
      liveLink: "website url",
      githubLink: "https://github.com/",
      techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
      isOpenSource: true,
    },
    {
      name: "Into Orbit",
      desc: "Carefully launch your rocket ship into the orbit of a nearby planet.\n" +
          "How far can you go?",
      liveLink: "website url",
      githubLink: "https://github.com/",
      techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
      isOpenSource: true,
    },
    {
      name: "Quizkampen",
      desc: "",
      liveLink: "website url",
      githubLink: "https://github.com/",
      techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" id="portfolio">
      <h2>Portfolio</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
