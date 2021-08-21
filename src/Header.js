import React from 'react'
import './Header.css'

function Header() {
    return (
        <nav className="nav">
            <div>
                <h1 className="logo">Aditya Singh</h1>
            </div>
            <div>
                <ul className="links">
                    <li className="link">
                        Projects
                    </li>
                    <li className="link">
                        About
                    </li>
                    <li className="link">
                        Skill
                    </li>
                </ul>
            </div>
            {/* <div>
                <button className="btn-dark">Enable Dark Mode</button>
            </div> */}
        </nav>
    )
}

export default Header
