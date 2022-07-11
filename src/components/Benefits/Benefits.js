import React from "react";
import "./benefits.css";
import Scholarship from '../../img/scholarship.png';
import OfflineAdm from '../../img/offline-admission.png';
import StudyMaterial from '../../img/study-material.png';
import MockExam from '../../img/mock-exam.png';
const Benefits = () => {
 
  return (
    <div className="benefits" id="benefits">
      <div className="benefits-title">Agniveeram Institute</div>
      <div className="benefits-subtitle">Benefits</div>

     <div className="imagearea">
        
          <img src={Scholarship} alt="" />
          <img src={OfflineAdm} alt="" />
          <img src={StudyMaterial} alt="" />
              <img src={MockExam} alt="" />
              </div>
    </div>






  );
};

export default Benefits;