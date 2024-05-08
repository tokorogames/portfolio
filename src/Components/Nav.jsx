import React, {useState} from 'react'

import {Link} from 'react-scroll';
import {GiHamburgerMenu} from 'react-icons/gi'

import '../styles/Nav.css'


const Nav = ({handleToggle}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const nav =
        <ul style={{pointerEvents: 'auto'}}>
            <li><Link onClick={handleClick} activeClass="active" to="intro" spy={true} smooth={true} offset={-80}
                      duration={500}>
                Intro
            </Link></li>
            <li><Link onClick={handleClick} activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                Portfolio
            </Link></li>
            <li><Link onClick={handleClick} activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                Skills
            </Link></li>
            <li><Link onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                About
            </Link></li>
            <li><Link onClick={handleClick} activeClass="active" to="mail" spy={true} smooth={true} duration={500}>
                Contact
            </Link></li>
        </ul>

    return (
        <div className='nav'>
            <div className={`header light`}>
                <div className='menu'>
                    <div onClick={handleClick} className='menu-small'>
                        <GiHamburgerMenu/>
                    </div>
                    <div className='large'>
                        {nav}
                    </div>
                </div>
            </div>
            <div className='small' style={{
                display: isOpen ? 'none' : 'flex'
            }}>
                {nav}
            </div>
        </div>
    )
}

export default Nav;

