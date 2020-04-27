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

  /*
        Load all FlightPlan when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
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
      }}
    >
      {props.children}
    </FlightPlanContext.Provider>
  );
};
