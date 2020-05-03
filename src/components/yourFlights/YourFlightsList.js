import React, { useContext } from "react";
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
              {yourFlights.map((yourFlight) => {
                return (
                  <YourFlights key={yourFlight.id} yourFlights={yourFlight} />
                );
              })}
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </>
  );
};
