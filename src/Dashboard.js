import React from "react";
import { FlightPlanProvider } from "./components/FlightPlanProvider";
import FlightList from "./components/FlightList";
import "./components/Flight.css";
import "./index.css";

export default () => {
  return (
    <div className="mainContainer">
      <FlightPlanProvider>
        <FlightList />
      </FlightPlanProvider>
    </div>
  );
};
