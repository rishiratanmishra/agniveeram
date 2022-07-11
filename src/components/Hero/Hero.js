import React from "react";
import './hero.css';
import Ministry from '../../img/ministry.png'
import Defence from '../../img/defence.jpg'
import Agniveers from '../../img/agniveers.mp4'


const Hero = () => {
    
  
    return (
    <div className="hero">
        <div className="hero-left-side">
            <div className="hero-header">
            <span >Agniveeram </span>
            <span >Coaching Institute</span>
            <span >BEST COACHING CENTER FOR COMPETITIVE EXAMS OF ARMED FORCES</span>

            <span> ARMY, AIR FORCE, NAVY ETC.</span>
            
           </div>
                <button className='button log heroBT'>Enroll Now</button>

               <div className="hero-icons">
                  <img src={Ministry} alt="ministry" />

                </div>
                
        </div>

        

        <div className="hero-right-side">
          <div className="video">
             <video  controls loop poster={Defence}>
             <source src= {Agniveers} typeof="video.mp4" />
             </video>
          </div>
           
          
        </div>
      </div>
    
  );
};

export default Hero;