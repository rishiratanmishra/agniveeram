import React from 'react'
import { useState } from 'react'
import './faqs.css'
import { accord } from './api'
import Accordion from './Accordion'


const Faq = () => {

    const [data, setData] = useState(accord);


    return (   
            <div className='main-ka-main'>
            <section className='main-div'>
        <h1>FAQs</h1>

      
            {
                data.map((curElem) => {
                    const { id} = curElem;
                    return <Accordion key={id} { ...curElem} />
                })

                }
                </section>
            
            
            
            

    
      
      
      </div>



    )
}

export default Faq