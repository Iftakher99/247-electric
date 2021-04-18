import { faVestPatches } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import Electrician from "../Electrician/Electrician";
const Electricians = () => {
  const [electrician, setElectrician] = useState([]);
  useEffect(() => {
    fetch("https://localhost:5000/Electrician")
      .then((res) => res.json())
      .then((data) => setElectrician(data));
  }, []);

  return (
    <section className='doctors'>
      <div className='container'>
        <h5 className='text-center  text-primary mb-5'>Our Doctors</h5>
        <div className='row'>
          {electrician.map((doctor) => (
            <Electrician key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Electricians;
