import React from "react";

const DashboardCard = ({ data, allClients }) => {
  console.log(data);
  return (
    <div className=' col-md-3'>
      <div
        className={` text-center me-3 p-3 ${data.backgroundColor} text-white`}
      >
        <div className='d-flex justify-content-center '>
          <div className='card-body'>
            <h4 className='card-title '>{allClients.length}</h4>
            <p className='card-text'>{data.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
