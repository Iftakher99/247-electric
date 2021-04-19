import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import AppointsByDate from "../AppointsByDate/AppointsByDate";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  useEffect(() => {
    fetch("http://localhost:5000/appointmentByDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);
  return (
    <section>
      <div style={containerStyle} className='container-fluid row'>
        <div className='col-md-2'>
          <Sidebar></Sidebar>
        </div>

        <div className='col-md-5'>
          <div>
            <Calendar onChange={handleDateChange} value={new Date()} />
          </div>
        </div>
        <div className='col-md-5'>
          <AppointsByDate appointments={appointments}></AppointsByDate>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
