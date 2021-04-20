import { faVestPatches } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Electrician from "../Electrician/Electrician";
const Electricians = () => {
  const [electricians, setElectricians] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/electrician")
      .then((res) => res.json())
      .then((data) => setElectricians(data));
  }, []);

  return (
    <section className='electricians'>
      <div className='container'>
        <h5 className='text-center  text-primary mb-5'>Our Electricians</h5>
        <div className='row'>
          {electricians.map((electrician) => (
            <Electrician key={electrician._id} electrician={electrician} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Electricians;
