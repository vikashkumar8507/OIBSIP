import React from 'react'
import "./Navbar.css";
import resume from "./Resume.pdf";

const Navbar = () => {
  return (
    <nav>
        <div className='nav-links'>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/vikash-kumar-b00b35212' target='_blank'>About</a>
            </li>
            <li>
                <a href='https://github.com/vikashkumar8507?tab=repositories' target='_blank'>Projects</a>
            </li>
            <li>
                <a href = {resume} target='_blank' download={resume} rel="noreferrer">Resume</a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar