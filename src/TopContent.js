import React from 'react'
import './index.css'
import {Element} from 'react-scroll';

const TopContent = () => {
  return (
    <Element className="home" id="home">
      <div className="top_container">
        <div className="top_content">
          <p>Hello I'm</p>
          <h1>Mano Sudalaimani</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>
    </Element>
  )
}

export default TopContent
