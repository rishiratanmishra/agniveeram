import React from 'react'
import Army from './Army'
import Airforce from './Airforce'
import Navy from './Navy'
import './successful.css'

const SuccessfulStories = () => {
  return (
   
    <>
      <div className='succ-stories' id="toppers">
<div className="t-heading">
<div>Our Successful Stories</div>
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
