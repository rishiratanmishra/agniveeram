import React from 'react'
import { useState } from 'react'
const Accordion = ({ question, answer }) => {

    const [view, hide] = useState(false);
    return (
      
      <>
          
            <div className="main-heading">
                <p onClick={() => hide(!view)}>{view? "➖" : "➕"}</p>
                <h3 >  {question} </h3>
            </div>
            {view && <p className='answer'>{answer}</p>}
            
      </>
              
  )
}

export default Accordion