import React, { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { FlightPlanContext } from "./FlightPlanProvider";
import FlightForm from "./FlightForm";
import Flight from "./Flight";
import { PilotsContext } from "../Pilots/PilotsProvider";

export default () => {
  const { flightPlan } = useContext(FlightPlanContext);
  const { pilots } = useContext(PilotsContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const sortedByDateFlights = flightPlan.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Card className="flight_container">
        <CardHeader className="text-center">
          <h1 className="flightHeader">Flights</h1>
          <Button onClick={toggle} color="secondary">
            <b>Make New Flight</b>
          </Button>
        </CardHeader>

        <CardBody className="text-center">
          <div className="flights">
            {sortedByDateFlights.map((flight) => {
              const pilot = pilots.find((p) => p.id === flight.pilotId);
              return <Flight key={flight.id} flight={flight} pilot={pilot} />;
            })}
          </div>
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Flight</ModalHeader>
        <ModalBody>
          <FlightForm toggler={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};
