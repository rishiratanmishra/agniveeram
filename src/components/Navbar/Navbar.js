import { React, useState, useContext } from 'react'
import './navbar.css';
import { themeContext } from "../../Context";
import { Link } from 'react-scroll';
import Darkmode from '../Darkmode/Darkmode';

  
  


const Navbar = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="Navbar">
      <span className="nav-logo"  style={{ color: darkMode ? "orange" : "" }}>Agniveeram Institute</span>
      <div className={`nav-items ${isOpen && "open"}`}>

        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
        Home
        </Link>
        
      <Link to="services" spy={true} smooth={true}>
      Serivces
        </Link>

      <Link to="works" spy={true} smooth={true}>
         Experience
        </Link>

<Link to="portfolio" spy={true} smooth={true}>
                Protfolio
        </Link>

        <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
              <div className={`nav-dark ${isOpen && "open"}`}>< Darkmode/></div>

      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  )
}
export default Navbar