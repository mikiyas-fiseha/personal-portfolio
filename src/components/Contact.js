import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Contact = () => {

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonText('Sending...');
    const { firstname, last_name, email, phone, message } = event.target.elements;
    const templateParams = {
      firstname: firstname.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    emailjs.send('service_a42exzn', 'template_rmmiakl', templateParams, 'D25tazZytMwtD6MjR')
      .then((response) => {
        setButtonText('Send');
        toast.success('🦄 Message sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        //setStatus({ success: true, message: 'Message sent successfully.' });
        event.target.reset();
      }, (error) => {
        setButtonText('Send');
        toast.error('😥Error sending message. Please try again later.!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setStatus({ success: false, message: 'Error sending message. Please try again later.' });
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="firstname" placeholder="First Name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="last_name" placeholder="Last Name" required />
                    </Col> 
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" placeholder="Message" required></textarea>
                    
                      <button type="submit"><span>{buttonText}</span></button>

                   
                    </Col>
                  
                  </Row>
                 
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        
        <ToastContainer
    position="top-right"
    autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      </Container>
    </section>
  )
}
