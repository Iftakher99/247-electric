import React from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import apartment from "../../../images/service/apartment.png";
import ecoHouse from "../../../images/service/eco-house.png";
import electricity from "../../../images/service/electricity.png";
import lightBulb from "../../../images/service/light-bulb.png";
import onOffButton from "../../../images/service/on-off-button.png";
import plug from "../../../images/service/plug.png";
import power from "../../../images/service/power.png";
const serviceData = [
  {
    name: "Electrical",
    img: apartment,
  },
  {
    name: "Security Systems",
    img: ecoHouse,
  },
  {
    name: "Air Conditioning",
    img: electricity,
  },
  {
    name: "Heating",
    img: lightBulb,
  },
  {
    name: "Trouble Shooting",
    img: onOffButton,
  },
  {
    name: "Panels Changes",
    img: power,
  },
];

const Services = () => {
  return (
    <section className='services-container  mt-5'>
      <div className='text-center '>
        <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className='d-flex justify-content-center container '>
        <div className='w-75 card_outer row mt-5 pt-5'>
          {serviceData.map((service) => (
            <ServiceDetail service={service} key={service.name}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
