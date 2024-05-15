import React from "react";
import "../styles/Projects.css";
import {Link} from 'react-scroll';
import arrow from "../images/arrow.svg";
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
import iRoll from "../images/iroll.mp4";
import LAB from "../images/lab.mp4";
import BoT from "../images/bangontime.mp4";
import Nostalgitrippen from "../images/nostalgitrippen.mp4";
import IntoOrbit from "../images/intoorbit.mp4";

const handleMouseEnter = e => {
    e.currentTarget.play();
}
const handleMouseOut = e => {
    e.currentTarget.pause();
}
const Projects = () => {
    return (
        <div className="Projects">
            <h2>This is my portfolio.</h2>
            <div>
                <div className="project">
                    <div className="preview">
                        <h3>Tokoro</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                                <source src={iRoll} type="video/mp4"/>
                            </video>
                        <div className="preview-overlay"/>
                        </div>
                    </div>
                    <h3>iRoll</h3>
                    <p>Get to the goal by avoiding obstacles. Find the quickest route and beat your own record!</p>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>    
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Impact Unified</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                                <source src={BoT} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <h3>Bang On Time</h3>
                    <p>Place your cards in the correct order, in this fast-paced, competitive mobile game.</p>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Nostalgitrippen AB</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                                <source src={Nostalgitrippen} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <h3>Nostalgitrippen</h3>
                    <p>Ett ordspel och bokstavspussel för dig som älskar nostalgi! Med inslag av lite quiz och trivia.</p>
                    <div className="software">
                        <div>
                            <SiFigma/>
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Tokoro</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                                <source src={LAB} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <h3>LAB</h3>
                    <p>Guide the ball home by strategically placing objects. Win, collect and craft cards!</p>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Collab</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                                <source src={IntoOrbit} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <h3>Into Orbit</h3>
                    <p>Carefully launch your rocket ship into the orbit of a nearby planet. How far can you go?</p>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="preview">
                        <h3>Personal</h3>
                        <div className="preview-background"/>
                        <div className="video_holder">
                            <video loop muted onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                                <source src={IntoOrbit} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                    <h3>Landscapes</h3>
                    <p>A collection of landscape concept art pieces for game environments.</p>
                    <div className="software">
                        <div>
                            <SiUnity/>
                            <p>Unity</p>
                        </div>
                        <div>
                            <SiBlender/>
                            <p>Blender</p>
                        </div>
                    </div>
                </div>
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
