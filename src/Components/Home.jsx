import React, { useState, useRef } from 'react'

import '../styles/Home.css'

import TypeWriterEffect from 'react-typewriter-effect';
import Typewriter from 'typewriter-effect';
import { animateScroll } from 'react-scroll';
import { saveAs } from "file-saver";
import { Link } from 'react-scroll';
import miguel from '../images/miguel.png';

const Home = () => {
    const [number, setNumber] = useState(0);
    const arrayOfWords = ['Tap again', 'Helllo', 'You found this', 'I added this...', 'because it seemed cool', `so here's something`, 'did you know that...', `You can't breathe and talk.`, 'the earth is 71% water.', `It snows in the Sahara Desert
`, ]
    const textContent = useRef();
    const handleDownload = () => {
        saveAs(
            "google drive url",
            "Resume.pdf"
        )
    }

    const handleChange = () => {
        textContent.current.style.display = 'inline-block';
        textContent.current.innerText = arrayOfWords[number]
        if ((arrayOfWords.length - 1) !== number) {
            setNumber(number + 1)
        }
        if ((arrayOfWords.length - 1) === number) {
            // something will be here soon
            setTimeout(() => {
                textContent.current.style.display = 'none'
                animateScroll.scrollTo(350)
                setNumber(1)
            }, 1000);
        }
    }


    return (
    <div className='home' id='intro'>
      <div className="home-wrapper">
          <div className="home-picture">
              <img src={miguel} className="border" alt="miguel" />
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
                    typewriter.typeString("And I'm a <span class='gradientText'>Game Developer</span>.")
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
        
        <div className="btns">
          <Link className='btn1' activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={500}>
            Portfolio
          </Link>

          <div onClick={handleDownload} className='btn2'>Download CV</div>
        </div>
      </div>

    </div >
    )
}

export default Home;