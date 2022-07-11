import React from 'react'
import "./footer.css"
import { FaMapSigns,FaPhoneAlt, FaEnvelopeOpenText,FaClock,FaFacebook, FaWhatsapp, FaInstagram, FaTelegram} from "react-icons/fa";const Footer = () => {
    return (
      <>
    <footer id="site-footer">

    <section className="horizontal-footer-section" id="footer-top-section">
        <div id="footer-logo">
                            <div>Agniveeram Coaching Institute</div>
        </div>
        <div id="footer-top-menu-container" role="menubar">
            <ul id="footer-top-menu" role="menu">
                <li className="footer-top-menu-item" role="menuitem">
                    <a href="#" className="footer-top-menu-link">Agniveer Army</a>
                </li>
                <li className="footer-top-menu-item footer-top-menu-item-active" role="menuitem">
                    <a href="#" className="footer-top-menu-link">Agniveer Airforce</a>
                </li>
                <li className="footer-top-menu-item" role="menuitem">
                    <a href="#" className="footer-top-menu-link">Agniveer Navy</a>
                </li>
            </ul>
        </div>
        <div id="footer-buttons-container">
        <button className='button log'>Admission Open</button>
        </div>
    </section>

                <section className="horizontal-footer-section" id="footer-middle-section">
                    
        <div id="footer-about" className="footer-columns footer-columns-large">
            <h1>Our Address</h1>
            <address>
                <p > <FaMapSigns/> &nbsp; &nbsp;Ballia, Uttar Pradesh, India</p>
                <p ><FaPhoneAlt/>&nbsp;&nbsp;+91 8840864525</p>
                <p ><FaEnvelopeOpenText/>&nbsp; &nbsp;help@agniveeram.com</p>
                <p ><FaClock/>&nbsp;&nbsp;8:00 AM – 8:00 PM</p>
            </address>
        </div>
        <div className="footer-columns">
            <h1>Resources</h1>
            <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                    <i>FAQ</i>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                    <i>Media</i>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                    <i>Guides</i>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                    <i>Free Resources</i>
                </li>
                
            </ul>
        </div>
        <div className="footer-columns">
            <h1>Information</h1>
            <ul className="footer-column-menu" role="menu">
                <li className="footer-column-menu-item" role="menuitem">
                    <i>About Us</i>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                    <i>Terms of Use</i>
                </li>
                <li className="footer-column-menu-item">
                    <i role="menuitem">Legal Information</i>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                    <i>Message Us</i>
                </li>
                <li className="footer-column-menu-item" role="menuitem">
                    <i>Leave a Feedback</i>
                </li>
            </ul>
        </div>
    </section>
    
    <section className="horizontal-footer-section" id="footer-bottom-section">
        <div id="footer-copyright-info">
            &copy; Rishi Ratan Mishra - 2022. All rights reserved.
        </div>
        <div id="footer-social-buttons">
                        <FaFacebook  className='iconic'/>
                        <FaWhatsapp className='iconic' />
                        <FaInstagram  className='iconic'/>
                        <FaTelegram className='iconic'/>
        </div>
    </section>

</footer>
        </>
        
)
}

export default Footer