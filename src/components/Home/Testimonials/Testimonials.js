import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

import aliza from "../../../images/aliza.png";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: aliza,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: aliza,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: aliza,
  },
];

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://electric-247.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className='testimonials my-5 py-5'>
      <div className='container'>
        <div className='section-header text-center'>
          <h5 className='text-primary text-uppercase'>Testimonial</h5>
          <h1>
            What Our Clients <br /> Says{" "}
          </h1>
        </div>
        <div className='card-deck row mt-5'>
          {reviews.map((review) => (
            <Testimonial key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
