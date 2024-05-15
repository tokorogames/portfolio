import React from 'react'
import '../styles/Project.css'
import iRoll from '../images/iRoll.mp4';

import {
    SiUnity,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAffinitydesigner,
    SiFmod,
    SiGithub,
    SiFigma,
    SiAbletonlive,
    SiBlender,
    SiRider
} from 'react-icons/si'

const handleMouseEnter = e => {
    e.currentTarget.play();
}
const handleMouseOut = e => {
    e.currentTarget.pause();
}
const Project = ({name, desc, techs, company}) => {
    return (
        <div className="project">
            <div className="preview">
                <h3>{company}</h3>
                <div className="preview-background"/>
                <div className="video_holder">
                    <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                        <source src={iRoll} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className="tech-stack">
                {techs.map(item => <div key={item}>{<item />}</div>)}
            </div>
        </div>
    )
}

export default Project;

