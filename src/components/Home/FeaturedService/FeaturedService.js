import React from "react";
import featured from "../../../images/welcome2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheck } from "@fortawesome/free-solid-svg-icons";
const FeaturedService = () => {
  return (
    <section className='features-service pb-0 pb-md-5 my-5'>
      <div className='container mb-5'>
        <div className='row mb-5'>
          <div className='col-md-5 mb-4 m-md-0'>
            <img className='img-fluid mt-5' src={featured} alt='' />
          </div>
          <div className='col-md-7 align-self-center'>
            <h1>About Electric</h1>
            <p className='text-secondary mx-5 my-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              efacere amet aperiam non odio. Temporibus, nemo quasi quisquam
              ipsa distinctio saepe sed veniam incidunt, tempora mollitia,
              dignissimos repellendus expedita. Obcaecati minima, reiciendis
              optio aspernatur autem pariatur
              <div className=' pt-3'>
                <ul>
                  <FontAwesomeIcon style={{ color: "red" }} icon={faCheck} />{" "}
                  Lorem ipsum dolor sit amet consectetur.
                </ul>
                <ul>
                  {" "}
                  <FontAwesomeIcon
                    style={{ color: "red" }}
                    icon={faCheck}
                  />{" "}
                  Lorem ipsum dolor sit amet consectetur.
                </ul>
                <ul>
                  {" "}
                  <FontAwesomeIcon
                    style={{ color: "red" }}
                    icon={faCheck}
                  />{" "}
                  Lorem ipsum dolor sit amet consectetur.
                </ul>
              </div>
            </p>
            <button className='btn btn-brand'>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
