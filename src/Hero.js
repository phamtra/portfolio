import React from 'react'
import './Hero.css'

function Hero() {
    return (
        <div className="hero">
            <div className="intro">
                <h1 className="intro-text">Hi, I am Aditya</h1>
                <p className="intro-text-content">I am a Web Developer from India. <br />I like to develop the UI with raw hand written CSS and JS <br /> I also create backend services with Python web framework Django</p>
            </div>
            <div className="image">
                <img src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg" alt="My"/>
            </div>
        </div>
    )
}

export default Hero
