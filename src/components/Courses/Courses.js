import React, { useContext } from "react";
import { themeContext } from "../../Context";
import './courses.css'
import Card from "../Cards/Card";
import { FaDownload} from 'react-icons/fa';
import Navy from "../../img/navy.jpeg";
import Army from "../../img/army.jpg";
import Airforce from "../../img/airforce.png";



const Courses = (props) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  return (
    <div className="courses" id="courses">
      
      <div className="top-side-courses">
        <span style={{ color: darkMode ? "white" : "" }}>Courses</span>
        <span>Agniveer 2022 Batch</span>
        <span>Agniveer 2022 Batch courses are launched. Offline Classes in our Institutes are also started.<br /> Those who are not able to attend our offline classes can Enroll in Online course available on our App.<br /> </span>
        </div>
      
      <div className="down-side-courses">
        <div className="buttonaire">
          <button className="button">Online Courses English</button>
          <button className="button">  <FaDownload color="white" size={"0.9rem"} />
            &nbsp; Agniveeram Learning App</button>
          <button className="button">Online Course Hindi</button>
        </div>

        <div class="row-courses">
          
          <div>
            
            <Card
              image={Army}
              title= "Agniveer(Army)"
              description = " 360+ hours Video Lectures"
              description1= "Detailed Study Notes Provided"
              description2= "Top Students Got Scholarship" 
              description3= "Physical Training Programme"
               btTitle = "Enroll Now"
            />
            
          </div>

          <div>
            
          <Card
            image={Airforce}
            title= "Agniveer(Airforce)"
            description = " 300+ hours Video Lectures"
            description1= "Detailed Study Notes Provided"
            description2= "Top Students Got Scholarship" 
            description3= "Physical Training Programme"
             btTitle = "Enroll Now"
          />
          
          </div>
          
          <div>
            
          <Card
            image={Navy}
            title= "Agniveer(Navy)"
            description = " 180+ hours Video Lectures"
            description1= "Detailed Study Notes Provided"
            description2= "Top Students Got Scholarship" 
            description3= "Physical Training Programme"
             btTitle = "Enroll Now"
          />
          
        </div>

        
      </div>
      
</div></div>    
  );

 
     
         
       };
       
       export default Courses;