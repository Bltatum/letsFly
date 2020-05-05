import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  UncontrolledCollapse,
} from "reactstrap";

import { FlightPlanContext } from "../flights/FlightPlanProvider";
import YourFlights from "./YourFlights";
import "./YourFlights.css";

export const YourFlightsList = () => {
  const { flightPlan } = useContext(FlightPlanContext);
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const yourFlights = flightPlan.filter((f) => f.pilotId === userId);
  const sortedByDateFlights = yourFlights.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  const [yourEditFlight, setFlight] = useState([]);
  useEffect(() => {
    setFlight(yourFlights);
  }, [flightPlan]);

  return (
    <>
      <div className="yourFlights_container">
        <Button color="secondary" id="toggler" style={{ marginBottom: "1rem" }}>
          <b>Your Flights</b>
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody className="yourFlights">
              <h3 className="yourFlightHeader">Your Upcoming Flights</h3>
              {sortedByDateFlights.map((yourFlight) => {
                return (
                  <YourFlights
                    key={yourFlight.id}
                    yourFlights={yourFlight}
                    yourEditFlight={yourEditFlight}
                  />
                );
              })}
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </>
  );
};
