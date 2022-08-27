import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSquareTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <h1>Social Network</h1>
        <a href="https://github.com/ManoS9940" className="Github" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
        <a href="https://www.linkedin.com/in/mano-s-31995b141" className="Linkedin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
        <a href="https://twitter.com/mano_dev9940" className="Linkedin" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faSquareTwitter} size='2x' /></a>

      </div>
    </div>
  )
}

export default Footer
