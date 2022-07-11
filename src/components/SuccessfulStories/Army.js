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




const converted = {
  ".swiper-slide:nth-child(1n)": { backgroundColor: "orange" },
  ".swiper-slide:nth-child(2n)": { backgroundColor: "rgb(0, 140, 255)" },
  ".swiper-slide:nth-child(3n)": { backgroundColor: "rgb(10, 184, 111)" },
  ".swiper-slide:nth-child(4n)": { backgroundColor: "rgb(211, 122, 7)" },
  ".swiper-slide:nth-child(5n)": { backgroundColor: "rgb(118, 163, 12)" },
  ".swiper-slide:nth-child(6n)": { backgroundColor: "rgb(180, 10, 47)" },
  ".swiper-slide:nth-child(7n)": { backgroundColor: "rgb(35, 99, 19)" },
  ".swiper-slide:nth-child(8n)": { backgroundColor: "rgb(0, 68, 255)" }
}


export default function Army() {
  const army = [
    {
          img: SS1,
          name: "Army",

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
         
         
         {army.map((army, index, ) => {
           return (
             <SwiperSlide  key={index}>
               <div className="Army" style={ converted }>
                       <img src={army.img} alt="" />
                       <span
                           style={{ color: "black", fontSize: " 20px" }}>
                           <center>{army.name} </center></span>
               </div>
             </SwiperSlide>


             

             );
            })}
          </Swiper>
       










          </>
)
}