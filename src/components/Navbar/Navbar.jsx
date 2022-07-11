import { React, useState } from 'react'
import './navbar.css'
import { BiDumbbell, BiRun } from "react-icons/bi";

 const Navbar = () => {

    const [toggle, setToggle]=useState(false);
  
    const handleToggle=()=>{
      setToggle(!toggle);
    }
  

    return (
        <>
      <nav className={toggle?'navbar expanded':'navbar'}>
          <h2 className='logo'>Agniveeram Institute</h2>
          <div className='toggle-icon' onClick={handleToggle}>
            {toggle?<BiRun size={28}/>:<BiDumbbell size={28}/>}
          </div>
          <ul className='links'>
            <li >Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Why us</li>
            <li>Success Story</li>
            <li>Contact</li>

            </ul>
            <div className='btn-log'>
            <button className='button log'>Log In / Register</button>          
            </div>   
      </nav>
        
          
  </>
          )
}
export default Navbar