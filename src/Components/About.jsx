import React from 'react'

import '../styles/About.css'
import {Link} from 'react-scroll';
import picture from "../images/picture.png";
import icon from "../images/quote-icon.png";

const About = () => {
    return (
        <div className='about'>
            <div className="about-wrapper">
                <h2>A few things about me.</h2>
                <div className="profile">
                    <div className="picture">
                        <div>
                            <img src={picture}/>
                        </div>
                        <div className="info">
                            <div className="info-outline">
                                <span>Portugal, 2023</span>
                            </div>    
                        </div>
                        <br/>
                        Amina, Zoe and Miguel.<br/>
                        Three months before Emma was born.
                    </div>
                    <div className="quotes">
                        <div className="quote">
                            <h3>Current Employment</h3>
                            <span>
                                <img src={icon}/>
                                I’m a self-taught Unity Developer and run my own sole trader business, Tokoro.
                            </span>
                        </div>
                        <div className="quote">
                            <h3>Area of Expertise</h3>
                            <span>
                                <img src={icon}/>
                                I’ve worked in many areas of game production, but my strongest skill is designing and implementing user interfaces (along with animations, shaders and sound effects).
                            </span>
                        </div>
                        <div className="quote">
                            <h3>Career Interests</h3>
                            <span>
                                <img src={icon}/>
                                I’m currently very invested in shaders. I love working with Unity’s Shader Graph.
                            </span>
                        </div>
                        <div className="quote">
                            <h3>Languages</h3>
                            <span>
                                <img src={icon}/>
                                I speak Portuguese, English and Swedish. I’m also currently learning Italian and German, Amina’s mother tongues.
                            </span>
                        </div>
                        <div className="quote">
                            <h3>Residency Status</h3>
                            <span>
                                <img src={icon}/>
                                I moved to Sweden in September 2011, after living and studying in Santa Barbara, California for 3 years.
                            </span>
                        </div>
                        <div className="quote">
                            <h3>Family Status</h3>
                            <span>
                                <img src={icon}/>
                                I'm married to Amina and we have two girls, Zoe (3 years old) and Emma (1/2 year old).
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-wrapper">
                <Link className='btn' activeClass="active" to="mail" spy={true} smooth={true} offset={0}
                      duration={500}>
                    <span>Contact Me</span>
                    <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.0572316 3.16667L1.94285 0.833334L7.00002 4.92015L12.0572 0.833335L13.9428 3.16667L7.00002 8.77729L0.0572316 3.16667Z"/>
                    </svg>
                </Link>
            </div>
            <div className="endsection-gradient"/>

        </div>
    )
}
export default About;
