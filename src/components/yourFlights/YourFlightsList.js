import React, { useContext } from "react";
import { FlightPlanContext } from "../flights/FlightPlanProvider";
import YourFlights from "./YourFlights";
import "./YourFlights.css";

export const YourFlightsList = () => {
  const { flightPlan } = useContext(FlightPlanContext);
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const yourFlights = flightPlan.filter((f) => f.pilotId === userId);

  return (
    <>
      <div className="yourFlights_container">
        <h3 className="yourFlightHeader">Your Upcoming Flights</h3>

        <div className="flights">
          {yourFlights.map((yourFlight) => {
            return <YourFlights key={yourFlight.id} yourFlights={yourFlight} />;
          })}
        </div>
      </div>
    </>
  );
};
