import React from "react";
import { FlightPlanProvider } from "./components/flights/FlightPlanProvider";
import { YourFlightsList } from "./components/yourFlights/YourFlightsList";

import FlightList from "./components/flights/FlightList";
import "./components/flights/Flight.css";
import "./index.css";
import "./Layout.css";
import { PilotsProvider } from "./components/Pilots/PilotsProvider";
import { PilotsList } from "./components/Pilots/PilotsList";
import { ProfileList } from "./components/profile/ProfileList";
export default () => {
  return (
    <>
      <div className="header">
        <h1>Let's FLY</h1>
      </div>
      <div className="mainContainer">
        <FlightPlanProvider>
          <PilotsProvider>
            <ProfileList />
            <FlightList />
            <YourFlightsList />
            <PilotsList />
          </PilotsProvider>
        </FlightPlanProvider>
      </div>
    </>
  );
};
