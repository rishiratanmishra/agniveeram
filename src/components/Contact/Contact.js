import { React, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

   

    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7mf4bxa', 'template_u4hntcr', form.current, 'lIbSSbqCZo55BWiaS')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
      <>
        
        <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
              
              <div className="cnt-title"> SERVE NATION </div>
             <div className="one-step"> You are only one step back </div>
             <h4>CONTACT</h4>
          </div>
          <div className="contact-form-wrapper">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-item">
                <input type="text" name="sender" required/>
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required/>
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label>Message:</label>
              </div>
                <button  type="submit" value="Send" className="submit-btn">Send</button> 
                <div style={{ fontSize: "10px" }}>{done && "We will reach you soon." }</div>
  
            </form>
          </div>
        </div>
      </section>
            </>
        );
    
}
    export default Contact