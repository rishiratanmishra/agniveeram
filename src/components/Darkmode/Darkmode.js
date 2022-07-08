import React from 'react'
import './darkmode.css'
import { themeContext } from "../../Context";
import { useContext } from 'react';

import { FaLightbulb, FaMoon  } from 'react-icons/fa';

const Darkmode = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const handleClick = () => {
      theme.dispatch({ type: "toggle" });
    };
    return (
      <div className="toggle" onClick={handleClick}>
        <FaMoon />
        <FaLightbulb style={{ color: darkMode ? "yellow" : "" }} />
        

        <div
          className="t-button"
          style={darkMode ? { left: "2px" } : { right: "2px" }}
        ></div>
      </div>
    );
  };
  
  export default Darkmode;