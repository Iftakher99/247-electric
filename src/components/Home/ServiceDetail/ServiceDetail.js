import React from "react";
import "./ServiceDetail.css";
const ServiceDetail = ({ service }) => {
  return (
    <div className='col-md-4 service-card text-center'>
      <div className='content d-flex justify-content-center '>
        <img style={{ height: "50px" }} src={service.img} alt='' />
        <h5 className='mt-3 title mb-3'>{service.name}</h5>
        <p className='copy'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          quaerat?
        </p>
        <button class='btn'>Read More</button>
      </div>
    </div>
  );
};

export default ServiceDetail;
