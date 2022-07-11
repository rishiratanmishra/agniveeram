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



  

export default function Airforce() {
  
  const airforce = [
    {
          img: SS1,
          name: "Airforce",
    },
    {
        img: SS2,

    },

    {
        img: SS3,

    },

    {
        img: SS4,

    },

    {
        img: SS5,

    },
    
    {
        img: SS6,

    },
    
    {
        img: SS7,

    },

    {
        img: SS8,

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
         
         
         {airforce.map((airforce, index) => {
           return (
             <SwiperSlide key={index}>
               <div className="Airforce">
                       <img src={airforce.img} alt="" />
                       <span
                       style={{color:"black", fontSize: " 20px" }}
                       ><center>{airforce.name} </center></span>
               </div>
             </SwiperSlide>


             

             );
            })}
          </Swiper>
       










          </>
)
}