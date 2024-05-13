import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";
import {Link} from 'react-scroll';
import arrow from "../images/arrow.svg";

const Projects = () => {
    const projectsInfo = [
        {
            company: "Tokoro",
            name: "iRoll",
            desc: "Get the ball in the goal by avoiding obstacles.\n" +
                "Find the quickest route and beat your own record.",
            techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
        },
        {
            company: "Impact Unified",
            name: "Bang On Time",
            desc: "Place your cards in the correct chronological order, in this fast-paced, competitive mobile game.",
            techs: ["HTML", "CSS", "TypeScript"],
        },
        {
            company: "Tokoro",
            name: "LAB",
            desc: "Guide the ball into the goal by placing cards which spawn objects.\n" +
                "Win, collect and craft cards!",
            techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
        },
        {
            company: "Collab",
            name: "Into Orbit",
            desc: "Carefully launch your rocket ship into the orbit of a nearby planet.\n" +
                "How far can you go?",
            techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
        },
        {
            company: "FEO Media",
            name: "Quizkampen",
            desc: "",
            techs: ["React", "Node", "MongoDB", "Socket.io", "Redux"],
        },
    ];
    return (
        <div className="Projects">
            <h2>This is my portfolio.</h2>
            <div>
                {projectsInfo.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
            <div className="btn-wrapper">
                <Link className='btn' activeClass="active" to="skills" spy={true} smooth={true} offset={0}
                      duration={500}>
                    View Software
                    <img src={arrow} className='btn-arrow' alt="arrow"/>
                </Link>
            </div>
        </div>
    );
};

export default Projects;
