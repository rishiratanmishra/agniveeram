import React, { useContext } from "react";
import "./benefits.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Scholarship from '../../img/scholarship.png';
import OfflineAdm from '../../img/offline-admission.png';
import StudyMaterial from '../../img/study-material.png';
import MockExam from '../../img/mock-exam.png';
import { themeContext } from "../../Context";
const Benefits = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="benefits" id="benefits">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Agniveeram Institute</span>
      <span>Benefits</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="benefits-slider"
      >
        <SwiperSlide >
          <img src={Scholarship} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={OfflineAdm} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={StudyMaterial} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MockExam} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>






  );
};

export default Benefits;