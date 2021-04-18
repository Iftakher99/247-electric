import React from "react";
import "./OurProjects.css";
import glI1 from "../../../images/gallery-img01.jpg";
import glI2 from "../../../images/gallery-img02.jpg";
import glI3 from "../../../images/gallery-img03.jpg";
import glI4 from "../../../images/gallery-img04.jpg";
import glI5 from "../../../images/gallery-img05.jpg";
import glI6 from "../../../images/gallery-img06.jpg";
const OurProjects = () => {
  return (
    <div className='container'>
      <h5 className='text-center text-primary'>Our Projects</h5>
      <div className='row mt-5 mb-5'>
        <div className='col-sm-6  col-md-4 mb-3'>
          <img src={glI1} alt='' className='img-fluid '></img>
        </div>
        <div className='col-sm-6 col-md-4 mb-3'>
          <img src={glI2} alt='' className='img-fluid '></img>
        </div>{" "}
        <div className='col-sm-6 col-md-4 mb-3'>
          <img src={glI3} alt='' className='img-fluid '></img>
        </div>{" "}
        <div className='col-sm-6 col-md-4 mb-3'>
          <img src={glI4} alt='' className='img-fluid '></img>
        </div>{" "}
        <div className='col-sm-6 col-md-4 mb-3'>
          <img src={glI5} alt='' className='img-fluid '></img>
        </div>{" "}
        <div className='col-sm-6 col-md-4 mb-3'>
          <img src={glI6} alt='' className='img-fluid '></img>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
