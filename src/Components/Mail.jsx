import React, {useState, useRef, useEffect} from 'react'
import '../styles/Mail.css'
import WhatsAppIcon from "../images/whatsapp-icon.png";
import GmailIcon from "../images/gmail-icon.png";
import {Link} from 'react-scroll';


import emailjs from '@emailjs/browser';

const Mail = () => {
    const radio = useRef();
    const [toSend, setToSend] = useState({
        subject: '',
        name: '',
        email: '',
        message: ''
    });
    const [isDisabled, setIsDisabled] = useState(false);
    const valid = {
        email: false,
        rest: false
    }
    const error = useRef()
    const formResMsg = useRef()

    const validation = (email, name, message, subject) => {
        const acceptedEmail = ['gmail.com', 'yahoo.com', 'yahoo.co.in', 'outlook.com', 'protonmail.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com', 'gmx.com', 'hey.com']
        if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            acceptedEmail.includes(email.split('@')[1]) ?
                valid.email = true : valid.email = false
        } else {
            valid.email = false;
        }

        if (name !== '' && subject !== '' && message.length > 100) {
            valid.rest = true;
            console.log('here')
        } else {
            valid.rest = false;
        }
    }

    const reset = () => {
        setToSend({
            subject: '',
            name: '',
            email: '',
            message: ''
        })
    }

    const handleClick = () => {
        validation(toSend.email, toSend.name, toSend.message, toSend.subject);
        const condition = Object.values(valid).every((value) => value === true)
        if (!condition) {
            error.current.style.display = 'block'
        } else {
            // Using email.js to send emails https://www.emailjs.com/docs/sdk/installation/
            // use .env to store ids and keys from email.js
            // emailjs.send(serviceID, templateID, toSend, publicKey)
            //   .then((response) => {
            //     formResMsg.current.innerText = "Message sent..."
            //     reset();
            //   }, (err) => {
            //     formResMsg.current.innerText = "Failed... " + err.text
            // });
            // error.current.style.display = 'none'
        }
    }


    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    useEffect(() => {
        const arrayOfSub = ['work', 'chat', 'collaboration']
        if (toSend.subject === '') {
            setIsDisabled(false)
        } else {
            if (!(arrayOfSub.includes(toSend.subject))) {
                radio.current.checked = false;
                setIsDisabled(true)
            }
        }
    }, [toSend.subject])

    return (
        <div className='mail'>
            <h2>Let's have a chat!</h2>
            <div className="contact-info">
                <div>
                    <img src={WhatsAppIcon}/>
                    <span>
                      +46 76-295 56 14
                      <p>in WhatsApp</p>
                    </span>
                </div>
                <div>
                    <img src={GmailIcon}/>
                    <span>
                      miguel.manderschied.best
                      <p>@gmail.com</p>
                    </span>
                </div>
            </div>
            <h2><span>Or send me a message here:</span></h2>
            <div>
                <div className='entry'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input placeholder="Write your name here." type="text" name="name" autoComplete='off'
                               value={toSend.name} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input placeholder="Write your email here." type="email" name="email" autoComplete='off'
                               value={toSend.email}
                               onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea placeholder="Write your message here." name="message" cols="30" rows="10"
                                  value={toSend.message}
                                  onChange={handleChange}/>
                    </div>
                    <p style={{color: 'red !important', display: 'none'}} ref={error}>Something is missing</p>
                    <p style={{color: 'red !important'}} ref={formResMsg}></p>
                    <div className='mail-btn' onClick={handleClick}>Send message</div>
                </div>
            </div>
            <h2><span>Thank you for reading.</span></h2>
            <div className="btn-wrapper">
                <Link className='btn' activeClass="active" to="intro" spy={true} smooth={true} offset={0}
                      duration={1000}>
                    <span>Go back to the top</span>
                    <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.8855 5.61051L11.9999 7.94385L6.94271 3.85703L1.88553 7.94385L-6.94142e-05 5.61051L6.94271 -0.000109326L13.8855 5.61051Z"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Mail
