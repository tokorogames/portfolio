import '../styles/Home.css'

import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll';
import picture from '../images/intro-picture.png';
import locationIcon from '../images/location-icon.png';
import jobIcon from '../images/job-icon.png';

const Home = () => {
    return (
        <div className='home'>
            <div className="home-wrapper">
                <div className="home-picture">
                    {/*<img src={picture} className="border" alt="miguel"/>*/}
                    test
                    <div className="status-wrapper">
                        <div className="status">
                            <img src={locationIcon}/> Stockholm, SE
                        </div>
                        <div className="status">
                            <img src={jobIcon}/> Tokoro <span>(Self-employed)</span>
                        </div>
                    </div>
                </div>
                <h1>
                    <span className="title">
                        Hi! I'm Miguel.
                    </span>
                    <span className="typewriter-wrapper">
                        And I'm a&nbsp;
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 35,
                                deleteSpeed: 0.05,
                                wrapperClassName: "typewriter",
                                cursorClassName: "typewriter-cursor"
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("<span class='gradientText'>Game Artist</span>.")
                                    .pauseFor(2000)
                                    .deleteChars(13)
                                    .pauseFor(400)
                                    .typeString("<span class='gradientText'>Game Developer</span>.")
                                    .pauseFor(3000)
                                    .deleteChars(16)
                                    .pauseFor(400)
                                    .typeString("<span class='gradientText'>UI Artist</span>.")
                                    .pauseFor(1500)
                                    .deleteChars(11)
                                    .pauseFor(400)
                                    // .typeString("<span class='gradientText'>Shader Programmer</span>.")
                                    // .pauseFor(2000)
                                    // .deleteChars(19)
                                    // .pauseFor(400)
                                    .start()
                                ;
                            }}
                        />
                    </span>
                </h1>
            </div>
            <div className="btn-wrapper">
                <Link className='btn' activeClass="active" to="portfolio" spy={true} smooth={true} offset={0}
                      duration={500}>
                    <span>View Portfolio</span>
                    <svg width="14" height="9" viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0572316 3.16667L1.94285 0.833334L7.00002 4.92015L12.0572 0.833335L13.9428 3.16667L7.00002 8.77729L0.0572316 3.16667Z"/>
                    </svg>
                </Link>
            </div>
            <div className="endsection-gradient"/>
        </div>
    )
}

export default Home;