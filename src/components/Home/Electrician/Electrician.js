import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import IImg from "../../../images/electrician.jpg";

const Electrician = ({ electrician }) => {
  return (
    <div className='col-md-4 col-sm-6 mt-5 text-center'>
      {electrician.image ? (
        <img
          style={{ height: "200px" }}
          src={`data:image/png;base64,${electrician.img}`}
          alt=''
        />
      ) : (
        <img
          style={{ height: "200px" }}
          className='img-fluid mb-3'
          src={`http://localhost:5000/${electrician.img}`}
          alt=''
        />
      )}
      <h4>{electrician.name}</h4>
      <p>
        {" "}
        <FontAwesomeIcon className='text-primary' icon={faPhoneAlt} />{" "}
        +880-188-934789
      </p>
    </div>
  );
};

export default Electrician;
