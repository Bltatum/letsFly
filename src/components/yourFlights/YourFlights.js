import React, { useContext, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { FlightPlanContext } from "../flights/FlightPlanProvider";
import { EditFlightForm } from "../flights/EditFlightForm";

export default ({ yourFlights }) => {
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedFlight, setFlight] = useState({ yourFlights: {} });

  const { deleteFlight } = useContext(FlightPlanContext);

  const reverseDate = () => {
    let date = yourFlights.date.split("-");
    let newDate = date[1] + "-" + date[2] + "-" + date[0];
    return newDate;
  };

  return (
    <>
      <div>
        <Card className="yourFlight">
          <CardTitle>
            <h5 className="flight_name">{yourFlights.tripName}</h5>
          </CardTitle>
          <b>Date of Flight:</b> {reverseDate()}
          <b>Departing Airport:</b> {yourFlights.depart}
          <b>Destination Airport:</b> {yourFlights.destination}
          <Button
            color="warning"
            onClick={() => {
              setFlight({ yourFlights });
              toggleEdit();
            }}
          >
            <b>Edit</b>
          </Button>
        </Card>

        <Modal isOpen={editModal} toggle={toggleEdit}>
          <ModalHeader toggle={toggleEdit}>Edit Flight</ModalHeader>
          <ModalBody>
            <EditFlightForm
              key={selectedFlight.yourFlights.id}
              toggleEdit={toggleEdit}
              {...selectedFlight}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() => {
                deleteFlight(selectedFlight.yourFlights.id);
                toggle();
              }}
            >
              <b>Delete Flight</b>
            </Button>
            <Button color="secondary" onClick={toggleEdit}>
              <b>Cancel</b>
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
};
