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
          name: "Navy",

          

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
         
         
         {navy.map((navy, index) => {
           return (
             <SwiperSlide key={index}>
               <div className="navy">
                       <img src={navy.img} alt="" />
                       <span
                       style={{color:"black", fontSize: " 20px" }}
                       ><center>{navy.name} </center></span>
               </div>
             </SwiperSlide>


             

             );
            })}
          </Swiper>
       










          </>
)
}