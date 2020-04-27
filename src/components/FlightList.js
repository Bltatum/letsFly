import React, { Component, useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FlightPlanContext } from "./FlightPlanProvider";
import FlightForm from "./FlightForm";
import Flight from "./Flight";

export default () => {
  const { flightPlan } = useContext(FlightPlanContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div>
        <h3>Flights</h3>
      </div>
      <div className="fakeLink href" onClick={toggle}>
        Make New Flight
      </div>

      <div className="flights">
        {flightPlan.map((flight) => {
          return <Flight key={flight.id} flight={flight} />;
        })}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Flight</ModalHeader>
        <ModalBody>
          <FlightForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
