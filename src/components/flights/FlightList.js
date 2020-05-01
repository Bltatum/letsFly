import React, { useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FlightPlanContext } from "./FlightPlanProvider";
import FlightForm from "./FlightForm";
import Flight from "./Flight";
import { PilotsContext } from "../Pilots/PilotsProvider";

export default () => {
  const { flightPlan } = useContext(FlightPlanContext);
  const { pilots } = useContext(PilotsContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <div className="flight_container">
        <h3 className="flightHeader">Flights</h3>

        <div className="flights">
          {flightPlan.map((flight) => {
            const pilot = pilots.find((p) => p.id === flight.pilotId);
            return <Flight key={flight.id} flight={flight} pilot={pilot} />;
          })}
        </div>
        <Button onClick={toggle} color="info">
          Make New Flight
        </Button>
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
