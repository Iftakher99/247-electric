import React from "react";
import Review from "../../DashBoard/Review/Review";

const Testimonial = ({ review }) => {
  console.log(review.image.img);
  return (
    <div className='card shadow-sm col-md-4 d-flex justify-content-center'>
      <div className='card-body'>
        <p className='card-text text-center'>{review.description}</p>
      </div>
      <div className='card-footer d-flex  align-items-center'>
        {review.image ? (
          <img
            style={{ height: "200px" }}
            src={`data:image/png;base64,${review.image.img}`}
            alt=''
          />
        ) : (
          <img
            style={{ height: "200px" }}
            className='img-fluid mb-3'
            src={`https://localhost:5000/${review.img}`}
            alt=''
          />
        )}

        <div>
          <h6 className='text-primary'>{review.name}</h6>
          <p className='m-0'>{review.company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
