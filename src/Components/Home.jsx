import '../styles/Home.css'

import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll';
import miguel from '../images/miguel.png';
import arrow from '../images/arrow.svg';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-wrapper">
                <div className="home-picture">
                    <img src={miguel} className="border" alt="miguel"/>
                </div>
                <h1>
                    <span className="title">
                        Hi! I'm Miguel.
                    </span>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 35,
                            wrapperClassName: "typewriter",
                            cursorClassName: "typewriter-cursor"
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("And I'm a <span class='gradientText'>Game Developer</span>.")
                                .pauseFor(2000)
                                .deleteAll(25)
                                .pauseFor(600)
                                .typeString("And I'm a <span class='gradientText'>UI Artist</span>.")
                                .pauseFor(2000)
                                .deleteAll(25)
                                .pauseFor(600)
                                .typeString("And I'm a <span class='gradientText'>Shader Programmer</span>.")
                                .pauseFor(2000)
                                .deleteAll(25)
                                .pauseFor(600)
                                .typeString("And I'm a <span class='gradientText'>Game Artist</span>.")
                                .pauseFor(2000)
                                .deleteAll(25)
                                .start()
                            ;
                        }}
                    />
                </h1>
            </div>
            <div className="btn-wrapper">
                <Link className='btn' activeClass="active" to="portfolio" spy={true} smooth={true} offset={0}
                      duration={500}>
                    View Portfolio
                    <img src={arrow} className='btn-arrow' alt="arrow"/>
                </Link>
            </div>
        </div>
    )
}

export default Home;