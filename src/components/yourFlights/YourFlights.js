import React, { useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FlightPlanContext } from "../flights/FlightPlanProvider";
import { EditFlightForm } from "../flights/EditFlightForm";

export default ({ yourFlights }) => {
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedYourFlight, setYourFlight] = useState({ yourFlights: {} });

  const userId = parseInt(localStorage.getItem("letsFly_user"));
  const { flightPlan, deleteFlight } = useContext(FlightPlanContext);

  return (
    <>
      <section className="yourFlight">
        <h4 className="flight_name">{yourFlights.tripName}</h4>
        <div className="flight_date">
          <b>Date of Flight:</b> {yourFlights.date}
        </div>
        <div className="flight_depart">
          <b>Departing Airport:</b> {yourFlights.depart}
        </div>
        <div className="flight_destination">
          <b>Destination Airport:</b> {yourFlights.destination}
        </div>

        <Button
          color="warning"
          onClick={() => {
            setYourFlight({ yourFlights });
            toggleEdit();
          }}
        >
          Edit
        </Button>

        <Button
          color="danger"
          onClick={() => {
            deleteFlight(yourFlights.id);
            toggle();
          }}
        >
          Delete
        </Button>

        <Modal isOpen={editModal} toggle={toggleEdit}>
          <ModalHeader toggle={toggleEdit}>Edit Flight</ModalHeader>
          <ModalBody>
            <EditFlightForm
              key={selectedYourFlight.yourFlights.id}
              toggleEdit={toggleEdit}
              {...selectedYourFlight}
            />
          </ModalBody>
        </Modal>
      </section>
    </>
  );
};
