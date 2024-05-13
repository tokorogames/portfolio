import React from 'react'

import '../styles/Skills.css'
import {Link} from 'react-scroll';

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
import arrow from "../images/arrow.svg";

const Skills = () => {
    return (
        <div className="skills">
            <h2>This is the software I use.</h2>
            <div className="skill">
                <div>
                    <SiUnity/>
                    <p>Unity</p>
                </div>
                <div>
                    <SiBlender/>
                    <p>Blender</p>
                </div>
                <div>
                    <SiRider/>
                    <p>Rider</p>
                </div>
                <div>
                    <SiAdobephotoshop/>
                    <p>Photoshop</p>
                </div>
                <div>
                    <SiAdobeillustrator/>
                    <p>Illustrator</p>
                </div>
                <div>
                    <SiAffinitydesigner/>
                    <p>Aff. Designer</p>
                </div>
                <div>
                    <SiFmod/>
                    <p>FMOD</p>
                </div>
                <div>
                    <SiGithub/>
                    <p>GitHub</p>
                </div>
                <div>
                    <SiFigma/>
                    <p>Figma</p>
                </div>
                <div>
                    <SiAbletonlive/>
                    <p>Ableton Live</p>
                </div>
            </div>
            <div className="btn-wrapper">
                <Link className='btn' activeClass="active" to="about" spy={true} smooth={true} offset={0}
                      duration={500}>
                    View About
                    <img src={arrow} className='btn-arrow' alt="arrow"/>
                </Link>
            </div>
        </div>
    )
}

export default Skills;