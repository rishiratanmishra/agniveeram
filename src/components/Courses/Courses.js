import React from "react";
import './courses.css'
import Card from "../Cards/Cards";
import { FaDownload} from 'react-icons/fa';
import Navy from "../../img/navy.jpeg";
import Army from "../../img/army.jpg";
import Airforce from "../../img/airforce.png";



const Courses = (props) => {

  
    return (
      
    <div className="courses" id="courses">
      
      <div className="top-side-courses">
        <div>Courses</div>
        <div>Agniveer 2022 Batch</div>
        <div>Agniveer 2022 Batch courses are launched. Offline Classes in our Institutes are also started.<br /> Those who are not able to attend our offline classes can Enroll in Online course available on our App.<br /> </div>
        </div>
      
      <div className="down-side-courses">
        <div className="buttonaire">
          <button className="button log eng-bt">Online Courses English</button>
          <button className="button log eng-bt">  <FaDownload color="white" size={"0.9rem"} />
            &nbsp; Agniveeram Learning App</button>
          <button className="button log eng-bt hindi">Online Course Hindi</button>
        </div>
  
        </div>
      
        <div className="row-courses-row">
          
          <div className="penta">
            
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
                
                  
          <div className="penta penta-a">
            
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
          
          <div className="penta penta-n">
            
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
      
      </div>
  

      
  );  
};
 export default Courses;