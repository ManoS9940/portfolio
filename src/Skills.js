import React from 'react'
import { Card } from 'react-bootstrap';
import {Element} from 'react-scroll';
import html5_icon from './images/html5_icon.png';
import css_icon from './images/css_icon.png';
import javascript_icon from './images/javascript_icon.png';
import boostrap_icon from './images/boostrap_icon.png';
import express_icon from './images/express_icon.png';
import nodejs_icon from './images/nodejs_icon.png';
import react_icon from './images/react_icon.png';
import mongodb_icon from './images/mongodb_icon.png';
import mysql_icon from './images/mysql_icon.png';
import postman_icon from './images/postman_icon.png';
import github_icon from './images/github_icon.png';
import netlify_icon from './images/netlify_icon.png';

const Skills = () => {
  const Skillset = [{
    id: '1',
    imageUrl: html5_icon,
    name: "HTML5"
  },
  {
    id: '2',
    imageUrl: css_icon,
    name: "CSS"
  },
  {
    id: '3',
    imageUrl: javascript_icon,
    name: "JavaScript"
  },
  {
    id: '4',
    imageUrl: boostrap_icon,
    name: "Bootstrap"
  },
  {
    id: '5',
    imageUrl: express_icon,
    name: "Express JS"
  },
  {
    id: '6',
    imageUrl: nodejs_icon,
    name: "Node JS"
  },
  {
    id: '7',
    imageUrl: react_icon,
    name: "React"
  },
  {
    id: '8',
    imageUrl: mongodb_icon,
    name: "HTML5"
  },
  
  {
    id: '9',
    imageUrl: mysql_icon,
    name: "MySql"
  },
  
  {
    id: '10',
    imageUrl: postman_icon,
    name: "Postman"
  },
  
  {
    id: '11',
    imageUrl: github_icon,
    name: "Github"
  },
  
  {
    id: '12',
    imageUrl: netlify_icon,
    name: "Netlify"
  }
];  
  return (
    <Element className="skills" id="skills">
      <div className="Skillset">
        <h1>SKILLS</h1>
        <div className="wrapper">
          {Skillset.map((item) => {
            return (
              <div>
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                <Card.Title><h2>{item.name}</h2></Card.Title>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </Element>
  )
}

export default Skills
