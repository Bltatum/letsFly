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
import { MessageProvider } from "./components/messages/MessageProvider";
import { MessagesList } from "./components/messages/MessageList";
export default () => {
  return (
    <>
      <div className="header">
        <img
          className="resize"
          alt="header img"
          src=" http://i2.mirror.co.uk/incoming/article6498508.ece/ALTERNATES/s1200/Central-view-of-runway-at-Rome-Ciampino-airport-Italy.jpg"
        ></img>
      </div>

      <div className="mainContainer">
        <MessageProvider>
          <FlightPlanProvider>
            <PilotsProvider>
              <ProfileList />
              <YourFlightsList />
              <MessagesList />
              <FlightList />
              <PilotsList />
            </PilotsProvider>
          </FlightPlanProvider>
        </MessageProvider>
      </div>
    </>
  );
};
