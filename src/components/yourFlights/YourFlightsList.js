import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";

import { FlightPlanContext } from "../flights/FlightPlanProvider";
import YourFlights from "./YourFlights";
import "./YourFlights.css";

export const YourFlightsList = () => {
  const { flightPlan } = useContext(FlightPlanContext);
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const [yourFlightsModal, setYourFlightModal] = useState(false);
  const toggle = () => setYourFlightModal(!yourFlightsModal);

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
        <Button
          color="secondary"
          id="toggler"
          style={{ marginBottom: "1rem" }}
          onClick={() => {
            toggle();
          }}
        >
          <b>Your Flights</b>
        </Button>
      </div>

      <Modal isOpen={yourFlightsModal} toggle={toggle}>
        <ModalHeader className="yourFlightHeader" toggle={toggle}>
          Your Flights
        </ModalHeader>
        <ModalBody className="yourFlights">
          {sortedByDateFlights.map((yourFlight) => {
            return (
              <YourFlights
                key={yourFlight.id}
                yourFlights={yourFlight}
                yourEditFlight={yourEditFlight}
              />
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            <b>Close</b>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
