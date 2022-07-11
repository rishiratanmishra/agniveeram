import React from 'react'
import './about.css'
import Navy from "../../img/navy.jpeg";
import Army from "../../img/army.jpg";
import Airforce from "../../img/airforce.png";
const About = () => {
    return (
        <div className="about" id="about">
    
          <div className="about-left-side">
    
          <div className='spn-about' > About Us </div>
                
              <div className='spn-top'>Top Coaching Institute</div>
              <div className='spn-about-text'>
               We are the No.1 Coaching Institute in India for Competitve Exams of Armed Forces.
                <br /><br/>
                We are famous in India because of our Top Faculty Members. Our subject Teachers and Mentors are former officers of Army and other forces. 
                <br />
                All the teachers of the institute have been guiding the students since last many years and today are most popular and trusted among the students for teaching in their respective subject.
                <br /> <br/>
              Everyone wants to do an army job but does not pay attention to the physical process required for it. Keeping these things in mind, more attention is paid to the physical here and with hard work, practice is done every day. </div>
            
                <button className="button log about-button">Know More</button>
              
           
          </div>
            <div className="about-right-side">
                <div className="circle-point">
            <div className="BigCircle point" >
              <div className="small-circle">
              </div>
              <div className="small-circle">
                <img src={Army} alt="" />
              </div>
              <div className="small-circles">
                <img src={Airforce} alt="" />
              </div>{" "}
              <div className="small-circle">
                <img src={Navy} alt="" />
              </div>
              
              </div>
            </div>
    
    
    
          </div>
        </div>
      );
    };
    
    export default About;