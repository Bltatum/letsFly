import React, { useState, useEffect } from "react";

export const FlightPlanContext = React.createContext();

export const FlightPlanProvider = (props) => {
  const [flightPlan, setFlightPlan] = useState([]);

  const getFlightPlan = () => {
    return fetch("http://localhost:8088/flightPlan")
      .then((res) => res.json())
      .then(setFlightPlan);
  };

  const addFlightPlan = (flightPlan) => {
    return fetch("http://localhost:8088/flightPlan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flightPlan),
    }).then(getFlightPlan);
  };
  const updateFlightPlan = (flight) => {
    return fetch(`http://localhost:8088/flightPlan/${flight.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flight),
    }).then(getFlightPlan);
  };
  const deleteFlight = (flight) => {
    return fetch(`http://localhost:8088/flightPlan/${flight}`, {
      method: "DELETE",
    }).then(getFlightPlan);
  };

  useEffect(() => {
    getFlightPlan();
  }, []);

  useEffect(() => {
    console.log("****  FlightPlan APPLICATION STATE CHANGED  ****");
  }, [flightPlan]);

  return (
    <FlightPlanContext.Provider
      value={{
        flightPlan,
        addFlightPlan,
        updateFlightPlan,
        deleteFlight,
      }}
    >
      {props.children}
    </FlightPlanContext.Provider>
  );
};
