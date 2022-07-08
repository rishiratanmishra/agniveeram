import React, { useContext } from "react";
import './intro.css';
import { themeContext } from "../../Context";
import Ministry from '../../img/ministry.png'
import Defence from '../../img/defence.jpg'
import Agniveers from '../../img/agniveers.mp4'


const Intro = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  
    return (
    <div className="intro">
        <div className="left-side">
            <div className="header">
            <span style={{ color: darkMode ? "white" : "" }}>Agniveeram </span>
            <h3  style={{ color: darkMode ? "white" : "" }}>Coaching Institute</h3>
            <span style={{ color: darkMode ? "white" : "" }}>BEST COACHING CENTER FOR COMPETITIVE EXAMS OF ARMED FORCES</span>

            <span> ARMY, AIR FORCE, NAVY ETC.</span>
            
           </div>
                <button className='button i-button'>Enroll Now</button>

               <div className="i-icons">
                  <img src={Ministry} alt="ministry" />

                </div>
                
        </div>

        

        <div className="right-side">
          <div className="video">
             <video  controls loop poster={Defence}>
             <source src= {Agniveers} typeof="video.mp4" />
             </video>
          </div>
          
          <div className="best">
          <span style={{ color: darkMode ? "white" : "" }}>SEVA ASMAKAM DHARMA</span>
          </div>   
          
        </div>
      </div>
    
  );
};

export default Intro;