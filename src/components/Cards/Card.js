import React, { useContext } from "react";
import './cards.css'
import { themeContext } from "../../Context";



const Card = ({ image, title, description, description1, description2, description3, btTitle }) => {
    
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (
  
        <div class="column-courses" >
            
            <div className="small-circle">
                
                <img src={image} alt="" />

            </div>

            <h3 style={{ color: darkMode ? "black" : "" }}>{title }</h3>
            <ul style={{ color: darkMode ? "black" : "" }}>
                <li> {description}</li>
                <li> {description1}</li>
                <li> {description2}</li>
                <li> {description3}</li>
            </ul>
            <button className="column-courses-button button" >{btTitle }</button>

        </div>
  
    
        
  
    )
}





export default Card