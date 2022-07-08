import React, { useContext } from "react";
import  "./about.css";
import Navy from "../../img/navy.jpeg";
import Army from "../../img/army.jpg";
import Airforce from "../../img/airforce.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const About = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="about" id="about">

      <div className="left-side">

      <h2 className="h2" style={{ color: darkMode ? "white" : "" }}>
            About Us
          </h2>
          <span className="h2-span">Top Coaching Institute</span>
          <span>
           We are the No.1 Coaching Institute in India for Competitve Exams of Armed Forces.
            <br /><br/>
            We are famous in India because of our Top Faculty Members. Our subject Teachers and Mentors are former officers of Army and other forces. 
            <br />
            All the teachers of the institute have been guiding the students since last many years and today are most popular and trusted among the students for teaching in their respective subject.
            <br /> <br/>
          Everyone wants to do an army job but does not pay attention to the physical process required for it. Keeping these things in mind, more attention is paid to the physical here and with hard work, practice is done every day. </span>
        
            <button className="button about-button">Know More</button>
          
        <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>

        {/* right side */}
      </div>
      <div className="right-side">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 1.5, type: "spring" }}
          className="w-mainCircle"
        >
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
          
          
        </motion.div>



      </div>
    </div>
  );
};

export default About;