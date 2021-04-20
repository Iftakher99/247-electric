import React from "react";
import BookingCard from "../BookingCard/BookingCard";
const bookingData = [
  {
    id: 1,
    subject: "Infrared thermal",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 2,
    subject: "Home automation",
    visitingHour: "10:50 AM - 11:30 AM",
    totalSpace: 10,
  },
  {
    id: 3,
    subject: "Backup generators",
    visitingHour: "5:00 PM - 6:00 PM",
    totalSpace: 10,
  },
  {
    id: 4,
    subject: "Emergency testing",
    visitingHour: "7:00 AM - 8:30 AM",
    totalSpace: 10,
  },
  {
    id: 5,
    subject: "Power and distribution",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 6,
    subject: "Troubleshooting",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
];
const BookAppointment = ({ date }) => {
  return (
    <section>
      <h2 className='text-center text-brand mb-5'>
        Available Appointments on {date.toDateString()}
      </h2>
      <div className='row'>
        {bookingData.map((booking) => (
          <BookingCard
            booking={booking}
            date={date}
            key={booking.id}
          ></BookingCard>
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
