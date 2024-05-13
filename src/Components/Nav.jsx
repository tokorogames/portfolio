import {Link} from 'react-scroll';

import '../styles/Nav.css'

const Nav = () => {
    const nav =
        <ul style={{pointerEvents: 'auto'}}>
            <li><Link activeClass="active" to="intro" spy={true} smooth={true} offset={-80}
                      duration={500}>
                Intro
            </Link></li>
            <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                Portfolio
            </Link></li>
            <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                Software
            </Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                About
            </Link></li>
            <li><Link activeClass="active" to="mail" spy={true} smooth={true} duration={500}>
                Contact
            </Link></li>
        </ul>

    return (
        <div className='nav'>
            <div className='header'>
                <div className='menu'>
                    {nav}
                </div>
            </div>
        </div>
    )
}

export default Nav;

