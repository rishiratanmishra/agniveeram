import React from 'react'
import './mentors.css'
import 'swiper/css/pagination'
import "swiper/css/navigation";

import 'swiper/css'

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'

const Mentors = () => {

    const mentors = [
        {
        img: profilePic1,
          name: "Lt Gen JS Nain, PVSM, AVSM, SM,  GOC-in-C, Southern Command",
        about:
              
          " An alumnus of Sainik School Kunjpura, National Defence Academy, Khadkwasla and Indian Military Academy, Dehradun, the General Officer was commissioned into the DOGRA Regiment (2 DOGRA) on 18 Jun 1983. He is a graduate from Defence Services Staff College, Wellington, College of Defence Management, Secunderabad and National Defence College, Dhaka (Bangladesh)."        
      
      },
 {
          img: profilePic2,
          name: "Lt Gen Rana Pratap Kalita, UYSM, AVSM, SM, VSM, GOC-in-C, Eastern Command",
            about:
            
       "  Lt Gen Rana Pratap Kalita, UYSM, AVSM, SM, VSM and alumnus of Sainik School Goalpara, National Defence Academy and Indian Military Academy.  He was commissioned in 9 KUMAON on 09 June 1984.  The General Officer is a graduate of Defence Service Staff College and has attended Higher Command and National Defence College courses."        
     },

        {
          img: profilePic3,
          name: "Lt Gen Nav K Khanduri, AVSM, VSM, GOC-IN-C, Western Comd",
            about:
                    "An alumnus of Rashtriya Indian Military College, Dehradun and the National Defence Academy, Khadakwasla, the General passed out with 73rd Regular Course from the Indian Military Academy, Dehradun and was commissioned into 27 Air Defence Regiment on 17 Dec 1983. He is an alumnus of the prestigious Defence Services Staff College, College of Defence Management and the National Defence College."
          },

    ]


    return (
        <div className="t-wrapper" id="mentors">
          <div className="t-heading">
           <span style={{textAlign:"center"}}> Our Faculty </span>
          
          </div>
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {mentors.map((mentors, index) => {
              return (
                <SwiperSlide key={index} >
                  <div className="faculty mentors bg-slide">
                    <img src={mentors.img} alt="" />
                    <br/>
                    <span style={{ color: "blue" }}>{mentors.name}</span>
                    <br/>
                    <span style={{fontSize:"0.7rem" , color: "chocolate"}}>{mentors.about}</span>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      );
    };
export default Mentors