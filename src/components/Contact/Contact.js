import { React, useState } from "react";
import { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import './contact.css'

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

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
            <div className="contact-form" id="contact">
                {/* left side copy and paste from work section */}
                <div className="w-left">
                
                    <div className="awesome">
                        {/* darkMode */}
                        <span style={{color: darkMode?'white': '', fontSize:"2rem"}}>Get in Touch</span>

                        <div
                            className="blur s-blur1"
                            style={{ background: "#ABF1FF94" }}
                        ></div>
                    </div>
                </div>
                {/* right side form */}
                <div className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" className="user" placeholder="Name" />
                        <input type="email" name="user_email" className="user" placeholder="Email" />
                        <textarea name="message" className="user" placeholder="Message" />
                        <input type="submit" value="Send" className="button" />
                        <span>{done && "Thanks for contacting me" }</span>
                        <div
                            className="blur c-blur1"
                            style={{ background: "var(--purple)" }}
                        ></div>
                    </form>
                </div>
            </div>
        );
    
}
    export default Contact