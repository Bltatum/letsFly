import React from "react";

export default ({ flight }) => (
  <section className="flight">
    <h3 className="flight_name">{flight.tripName}</h3>
    <div className="flight_date">{flight.date}</div>
    <div className="flight_depart">Depart: {flight.depart}</div>
    <div className="flight_destination">Dest: {flight.destination}</div>
    <div className="flight_direct">
      Direct: {flight.direct === "true" ? "YES" : "NO"}
    </div>
  </section>
);
