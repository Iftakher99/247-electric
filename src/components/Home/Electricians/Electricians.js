import { faVestPatches } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Electrician from "../Electrician/Electrician";
const Electricians = () => {
  const [electrician, setElectrician] = useState([]);
  useEffect(() => {
    fetch("https://localhost:5000/electrician")
      .then((res) => res.json())
      .then((data) => setElectrician(data));
  }, []);

  return (
    <section className='electrician'>
      <div className='container'>
        <h5 className='text-center  text-primary mb-5'>Our Electricians</h5>
        <div className='row'>
          {electrician.map((electrician) => (
            <Electrician key={electrician._id} electrician={electrician} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Electricians;
