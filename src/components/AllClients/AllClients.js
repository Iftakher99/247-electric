import React, { useEffect, useState } from "react";
import AppointmentDataTable from "../DashBoard/AppointmentDataTable/AppointmentDataTable";
import Sidebar from "../DashBoard/Sidebar/Sidebar";

const AllClients = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://electric-247.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className='container-fluid row '>
      <Sidebar></Sidebar>
      <div
        className='col-md-10 p-4 pr-5'
        style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}
      >
        <h5 className='text-brand'>All Clients</h5>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  );
};

export default AllClients;
