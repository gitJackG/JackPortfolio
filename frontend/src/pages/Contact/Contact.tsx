import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact-container' id='contact'>
            <div className='contact-header-section'>
                <h1>CONTACT</h1>
            </div>
            <div className='contact-content-section'>
                <div className='contact-content'>
                    <h2>Thank you for taking the time to read my portfolio!</h2>
                    <div className='contact-get-in-touch'>
                        <h3>Get in touch:</h3>
                        <p>Send me an email at <a href="mailto:j.griffithsrico@gmail.com" target="_blank" rel="noopener noreferrer">j.griffithsrico@gmail.com</a>, connect with me on <a href="https://www.linkedin.com/in/jack-griffiths-rico/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or create an issue on my <a href="https://github.com/gitJackG" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
