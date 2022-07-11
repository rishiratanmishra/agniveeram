import React from "react";
import './cards.css'



const Card = ({ image, title, description, description1, description2, description3, btTitle }) => {
    
    
    return (
        <div className="column-courses" >
            
            <div className="small-circle">
                
                <img src={image} alt="" />

            </div>

            <div className="card-title">{title }</div>
            <ul >
                <li> {description}</li>
                <li> {description1}</li>
                <li> {description2}</li>
                <li> {description3}</li>
            </ul>
            <button className="button log cardd" >{btTitle }</button>

        </div>
  
  
    )
}





export default Card