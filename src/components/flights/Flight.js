import React, { useState } from "react";
import {
  Button,
  Modal,
  Card,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardHeader,
} from "reactstrap";
import FlightDetails from "./FlightDetails";

export default ({ flight, pilot }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedFlight, setFlight] = useState({ flight: {}, pilot: null });

  const reverseDate = () => {
    let date = flight.date.split("-");
    let newDate = date[1] + "-" + date[2] + "-" + date[0];
    return newDate;
  };

  return (
    <>
      <section className="flight">
        <Card>
          <CardHeader>
            <h4 className="flight_name">{flight.tripName}</h4>
          </CardHeader>
          <h5 className="flight_pilot">Posted by: {pilot.username}</h5>
          <div className="flight_date">
            <b>Date:</b> {reverseDate()}
          </div>
          <div className="flight_time">
            <b>Departure Time:</b> {flight.departureTime}
          </div>
          <div className="flight_depart">
            <b>Departing From:</b> {flight.depart}
          </div>
          <div className="flight_purpose">
            <b>Purpose:</b> {flight.purpose}
          </div>
          <div className="coPilot">
            <b>Co-Pilot need:</b> {flight.coPilot}
          </div>

          <Button
            className="detailsBtn"
            color="secondary"
            onClick={() => {
              toggle();
              setFlight({ flight, pilot });
            }}
          >
            <b>Flight Details</b>
          </Button>
        </Card>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Flight Details</ModalHeader>
          <ModalBody>
            <FlightDetails
              toggler={toggle}
              key={selectedFlight.flight.id}
              {...selectedFlight}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              <b>Close</b>
            </Button>
          </ModalFooter>
        </Modal>
      </section>
    </>
  );
};
