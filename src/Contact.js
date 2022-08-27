import React, {useRef} from 'react';
import {Card} from 'react-bootstrap';
import {Element} from 'react-scroll';
import phone from './images/phone.png';
import mail from './images/mail.png';
import address from './images/address.png';
import './index.css';
import emailjs from '@emailjs/browser';




const Contact = () => {

    const ContactList = [{
        id: '1',
        title: 'Phone',
        text: "9940-xxxx-05",
        Icon: phone
    },
    {
        id: '2',
        title: 'Email',
        text: 'manoxxx@gmail.com',
        Icon: mail
    },
    {
        id: '1',
        title: 'Address',
        text: 'Kodambakkam, Chennai',
        Icon: address
    }];

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_g7v8w6q', 'template_dp678wn', form.current, 'K7dKNhAaVfFTWags3')
      .then((result) => {
        alert("Message Sent", result.text);
      }, (error) => {
        console.log(error.text);  
    });
  };


  return (
    <Element className="contact" id="Contact">
    <div className = "contact-container">
        <div className = "contact-header">
            <h1>CONTACT</h1>
            <div className = "contact-left">
                <p>If you have any query regarding me or my work, please reach out to me.<br/>
                    I'd love to hear from you.</p>
                <form ref={form} onSubmit={sendEmail}>
                    Name:<br/><input type="text" name="name" placeholder="Enter your name" size="50"/><br/>
                    Email:<br/><input type="text" name="email" placeholder="Enter your email" size="50"/><br/>
                    Enter your message:<br/><textarea name="message" placeholder="Enter your message" rows="5" cols="49" /><br/>
                    <input type="submit" value="Send" />
                </form>
            </div>
            <div className = "contact-right">
                <div className="contact-wrapper">
                    {ContactList.map((items) => {
                        return (
                            <Card className="contact-card">
                                <Card.Img variant="top" src= {items.Icon}/>
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Text>{items.text}</Card.Text>
                                    </Card.Body>
                            </Card>   
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
    </Element>
         
  )
}

export default Contact
