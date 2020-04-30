import React, { Component, useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FlightDetails from "./FlightDetails";

export default ({ flight, pilot }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedFlight, setFlight] = useState({ flight: {}, pilot: null });

  return (
    <>
      <section className="flight">
        <h3 className="flight_name">{flight.tripName}</h3>
        <h5 className="flight_pilot">Pilot: {pilot.name}</h5>
        <div className="flight_date">
          <b>Date:</b> {flight.date}
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
          classname="button_flightDetails"
          color="info"
          onClick={() => {
            toggle();
            setFlight({ flight, pilot });
          }}
        >
          Flight Details
        </Button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Flight Details</ModalHeader>
          <ModalBody>
            <FlightDetails
              toggler={toggle}
              key={selectedFlight.flight.id}
              {...selectedFlight}
            />
          </ModalBody>
        </Modal>
      </section>
    </>
  );
};
