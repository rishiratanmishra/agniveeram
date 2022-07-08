import React from 'react'
import { useState } from 'react'
import './faqs.css'
import { accord } from './api'
import Accordion from './Accordion'


const Faq = () => {

    const [data, setData] = useState(accord);


    return (   
        <>
            <section className='main-div'>
        <h1>FAQs</h1>

      
            {
                data.map((curElem) => {
                    const { id} = curElem;
                    return <Accordion key={id} { ...curElem} />
                })

                }
                </section>
            
            
            
            

    
      
      
      </>



    )
}

export default Faq