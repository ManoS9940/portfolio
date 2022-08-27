import React from 'react';
import './Aboutme.css';
import {Element} from 'react-scroll';

const Aboutme = () => {
  return (
    <Element className="about" id="about">
      <div className = "About_Me">
          <div className = "About_Me_Content"> 
              <h1>ABOUT ME</h1>
              <p>I'm a certified fullstack developer with knowledge in front-end and back-end development, frameworks and best code practices. My objective is to be best devveeloper that I can be and to contribute to the technology industry all that I know and can do. I'm dedicate to perfecting my skills by continuous learning from seasoned developers and continuously making strides to learn all that I can about development.</p>
          </div>
      </div>
    </Element>
  )
}

export default Aboutme