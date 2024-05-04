import React, { useState, useEffect } from 'react';
import './Contactus.css'; 
import './Exit2.css';
import movie from './pics4/movie.jpg';
import { Link } from 'react-router-dom';


function Contactus() {
    const [exitIntent, setExitIntent] = useState(false);

  useEffect(() => {
    const handleMouseLeave = () => {
      setExitIntent(true);
    };

    const handleMouseOut = (event) => {
      if (event.clientY < 0 && exitIntent) {
        document.getElementById('exit-popup1').style.display = 'block';
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [exitIntent]);

  const handleClosePopup = () => {
    document.getElementById('exit-popup1').style.display = 'none';
  };


    function ContactInfo() {
        return (
            <div>
                <section>
                    <a href="https://www.google.co.in/maps/place/Sector+50,+Chandigarh,+160047/@30.7013863,76.7392653,15z/data=!3m1!4b1!4m5!3m4!1s0x390fec3c689ef963:0xd7e15e35402e5dce!8m2!3d30.698965!4d76.749587">
                        <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
                    </a>
                    <h3>Address</h3>
                    <p>50sec, Chandigarh</p>
                </section>
                <section>
                    <a href="https://web.whatsapp.com/">
                        <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                    </a>
                    <h3>Phone</h3>
                    <p>123-456-78901548</p>
                </section>
                <section>
                    <a href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                    </a>
                    <h3>E-mail</h3>
                    <p>arhan0072@gmail.com</p>
                </section>
            </div>
        );
    }
    
   
    function ContactForm() {
        return (
            <form>
                <div className="form22">
                    <div className="right">
                        <div className="contact-form">
                            <input type="text" required />
                            <span>Full Name</span>
                        </div>
                        <div className="contact-form">
                            <input type="email" required />
                            <span>E-mail Id</span>
                        </div>
                        <div className="contact-form">
                            <textarea name="text"></textarea>
                            <span> Type your Message....</span>
                        </div>
                        <div className="contact-form">
                            <input type="submit" name="submit" onClick={Myfunction}  />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
    

    function SocialMediaLinks() {
        return (      
        <div className="social-links1">
        <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/LOGIN"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
        <a href="https://in.pinterest.com/"><i className="fab fa-pinterest"></i></a>
      </div>
        );
    }


    function Myfunction() {
        alert("Your issue is submitted THANK YOU!!");
    }
    
    return (
        <div className='hello'>
            <div className="Home">
            <Link className="home1"  style={{ textDecoration: "None" }} to='/'  >Home</Link>
            </div>
            <div className="container">
                <header className='qq'>
                    <h1>Contact Us</h1>
                </header>
                <div className="content">
                
                    <div className="content-form">
                        <ContactInfo />
                    </div>
            
                    <ContactForm />
                </div>
            
                <div className="media">
                    <SocialMediaLinks />
                </div>
                <div className="empty"></div>
            </div>
            <div id="exit-popup1" style={{ display: 'none' }} >
            <h2>Don't Leave Yet!</h2>
            <h4>We have an exciting offer for you: </h4>
            <h4>Use Promocode 'TICKET100' to get 50% Cashback <br />on total ticket price, upto Rs. 100.</h4>
            <img src={movie} alt="Offer" width="250" height="250" />
        <br />
        <button id='continue-button'onClick={handleClosePopup}>Continue</button>
      </div>
        </div>
    );
}


export default Contactus;
