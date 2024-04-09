import React from 'react'
import '../styles/Project.css'
import iRoll from '../images/iRoll.mp4';

const handleMouseEnter = e => {
    e.currentTarget.play();
}
const handleMouseOut = e => {
    e.currentTarget.pause();
}
const Project = ({ name, desc, techs, liveLink, githubLink, company }) => {
    return (
    <div className="project">
    <div className="preview">
        <h3>{company}</h3>
        <div className="preview-background"/>
        <div className="video_holder">
            <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                <source src={iRoll} type="video/mp4" />
            </video>
        </div>
    </div>
      <h3>{name}</h3>
      <p>{desc}</p>
      <div className="tech-stack">
        {techs.map(item => <div key={item}>{item}</div>)}
      </div>
      <div className="btns">
        <a href={liveLink} target="_blank" rel="noreferrer">Live</a>
        <a href={githubLink} target="_blank" rel="noreferrer">Github</a>
      </div>
    </div>
  )
}

export default Project;

