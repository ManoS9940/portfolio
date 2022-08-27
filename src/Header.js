import React from 'react'
import './Header.css';
import {Link} from 'react-scroll'


const Title = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>
          PORTFOLIO
        </h1>
      </div>
      <div className="header-right">
      <Link to="home" smooth={true} duration="200">
          <h4>Home</h4>
        </Link>
        <Link to="about" smooth={true} duration="200">
          <h4>About Me</h4>
        </Link>
        <Link to="skills" smooth={true} duration="200">
          <h4>Skills</h4>
        </Link>
        <Link to="Projects" smooth={true} duration="200">
          <h4>Projects</h4>
        </Link>
        <Link to="Contact" smooth={true} duration="200">
          <h4>Contact</h4>
        </Link>
      </div>

    </div>
  )
}

export default Title
