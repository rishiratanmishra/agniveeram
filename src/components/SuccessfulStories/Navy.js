import React from 'react'

import './successful.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import SS1 from '../../img/ss-1.jpeg';
import SS2 from '../../img/ss-2.jpeg';
import SS3 from '../../img/ss-3.jpeg';
import SS4 from '../../img/ss-4.jpeg';
import SS5 from '../../img/ss-5.jpeg';
import SS6 from '../../img/ss-6.jpeg';
import SS7 from '../../img/ss-7.jpeg';
import SS8 from '../../img/ss-8.jpeg';



  

export default function Navy() {
  const navy = [
    {
          img: SS1,
          name:"Navy",

    },
    {
        img: SS2,
        name:"Navy",

    },

    {
        img: SS3,
        name:"Navy",

    },

    {
        img: SS4,
        name:"Navy",

    },

    {
        img: SS5,
        name:"Navy",

    },
    
    {
        img: SS6,
        name:"Navy",

    },
    
    {
        img: SS7,
        name:"Navy",

    },

    {
        img: SS8,
        name:"Navy",

    },

  ]
   

 

   return (
     
     
     <>
     
       
       
       <Swiper
         effect={"cards"}
         grabCursor={true}
         modules={[EffectCards]}
         className="mySwiper"
       >
         
         
         {navy.map((navy, index) => {
           return (
             <SwiperSlide key={index}>
               <div className="navy">
                       <img src={navy.img} alt="" />
                       <span
                       style={{color:"yellow"}}
                       ><center>{navy.name} </center></span>
               </div>
             </SwiperSlide>


             

             );
            })}
          </Swiper>
       










          </>
)
}