import React from "react";
import { Button } from "reactstrap";
import { FlightPlanProvider } from "./components/flights/FlightPlanProvider";
import { YourFlightsList } from "./components/yourFlights/YourFlightsList";
import { PilotsProvider } from "./components/Pilots/PilotsProvider";
import { PilotsList } from "./components/Pilots/PilotsList";
import { ProfileList } from "./components/profile/ProfileList";
import { MessageProvider } from "./components/messages/MessageProvider";
import { MessagesList } from "./components/messages/MessageList";
import FlightList from "./components/flights/FlightList";
import "./index.css";
import "./Layout.css";
import "./components/flights/Flight.css";
import Welcome from "./components/Welcome";
import { FriendsList } from "./components/friends/FriendsList";
import { FriendsProvider } from "./components/friends/FriendsProvider";

export default ({ toggle }) => {
  return (
    <>
      <div className="header">
        <img
          className="resize"
          alt="header img"
          src=" http://i2.mirror.co.uk/incoming/article6498508.ece/ALTERNATES/s1200/Central-view-of-runway-at-Rome-Ciampino-airport-Italy.jpg"
        />
        <div className="headerText" style={{ fontSize: 75 }}>
          Let's Fly
        </div>
      </div>

      <div className="mainContainer">
        <MessageProvider>
          <FlightPlanProvider>
            <FriendsProvider>
              <PilotsProvider>
                <ProfileList />
                <Button
                  className="logout"
                  color="secondary"
                  type="submit"
                  onClick={() => {
                    localStorage.clear();
                    toggle();
                  }}
                >
                  <b>Logout</b>
                </Button>
                <Welcome />
                <YourFlightsList />
                <FriendsList />
                <MessagesList />
                <FlightList />
                <PilotsList />
              </PilotsProvider>
            </FriendsProvider>
          </FlightPlanProvider>
        </MessageProvider>
      </div>
      <div className="footer">
        <b>Brennen Tatum, NSS 2020</b>
        <a
          className="skyvector"
          href="https://skyvector.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <b>Make a flight plan with SkyVector</b>
        </a>
      </div>
    </>
  );
};
