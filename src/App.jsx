import './styles/App.css';

import { useState } from 'react';
import { animateScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

// components
import Home from './Components/Home';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Socials from './Components/Socials';
import About from './Components/About';
import Skills from './Components/Skills';
import Mail from './Components/Mail';

// icon
import { CgArrowLongUp } from 'react-icons/cg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  return (
    <div className={`App ${!isDarkMode ?'light' : ''}`}>
      <div>
        <Nav isDarkMode={isDarkMode} handleToggle={toggleTheme} />
        <Home />
      </div>
      <div className={`light`}>
        <Fade fraction={.2} triggerOnce>
          <Projects />
        </Fade>
      </div>
        <div className={`light`}>
          <Fade fraction={.2} triggerOnce>
              <Skills />
          </Fade>
        </div>
        <div className={`light`}>
        <Fade fraction={.2} triggerOnce>
          <About />
        </Fade>
      </div>
      <div className={`light`}>
        <Fade fraction={.2} triggerOnce>
          <Mail />
        </Fade>
      </div>
      <div className={`light`}>
        <Fade fraction={.2} triggerOnce>
          <p>Thank you for scrolling💘</p>
          <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;