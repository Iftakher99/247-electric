import React from "react";
import { Link } from "react-router-dom";
import main from "../../../images/electrician3.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className='row d-flex align-items-center'>
      <div className='col-md-4 col-sm-6 col-12 offset-md-1'>
        <h1 style={{ color: "white" }}>
          Best Electrical service
          <br /> With perfect repairs
        </h1>
        <p className='text-light'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <Link to='/appointment' className='btn btn-brand'>
          PURCHASE NOW
        </Link>
      </div>
      <div className='col-md-6 col-sm-6 col-12'>
        <img src={main} alt='' className='img-fluid' />
      </div>
    </main>
  );
};

export default HeaderMain;
