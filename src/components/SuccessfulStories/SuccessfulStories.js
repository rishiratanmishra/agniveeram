import React, {useContext} from 'react'
import Army from './Army'
import Airforce from './Airforce'
import Navy from './Navy'
import { themeContext } from "../../Context";


const SuccessfulStories = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   
    <>
      <div className='succ-stories' style={{margin:"7rem"}} id="toppers">
<div className="t-heading top-side-courses">
<span style={{ color: darkMode ? "white" : "" }}>Our Successful Stories</span>
        </div>
        </div>
        <div className='row-stories'>
      <Army />
      <Airforce/>
      <Navy/>
      </div>
      
      </>
    )
}

export default SuccessfulStories