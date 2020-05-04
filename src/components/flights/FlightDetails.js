import React, { useState, useContext } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { MessageContext } from "../messages/MessageProvider";
import MessageForm from "../messages/MessageForm";

export default ({ flight, pilot }) => {
  const { addMessages } = useContext(MessageContext);
  const [replyModal, setReplyModal] = useState(false);
  const toggleReply = () => setReplyModal(!replyModal);

  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const [selectedFlight, setFlight] = useState({ flight: {} });

  return (
    <section className="flight">
      <h3 className="flight_name">{flight.tripName}</h3>
      <h5 className="flight_pilot">
        <b>Pilot:</b> {pilot.name}
      </h5>
      <div className="flight_date">
        <b>Date of Flight:</b> {flight.date}
      </div>
      <div className="flight_time">
        <b>Departure Time:</b> {flight.departureTime}
      </div>
      <div className="flight_purpose">
        <b>Purpose of Flight:</b> {flight.purpose}
      </div>
      <div className="flight_vfr">
        <b>Visual Flight Rules:</b> {flight.direct === "true" ? "VFR" : "IFR"}
      </div>
      <div className="flight_depart">
        <b>Departing Airport:</b> {flight.depart}
      </div>
      <div className="flight_destination">
        <b>Destination Airport:</b> {flight.destination}
      </div>
      <div className="flight_direct">
        <b>Direct Flight:</b> {flight.direct === "true" ? "YES" : "NO"}
      </div>
      <div className="coPilot">
        <b>Co-Pilot need:</b> {flight.coPilot}
      </div>
      <div className="flight_endorsements">
        <b>Endorsements Needed:</b> {flight.endorsements}
      </div>
      <div className="flight_plane">
        <b>Plane Flying:</b> {flight.planeType}
      </div>
      <Button
        size="lg"
        color="primary"
        onClick={() => {
          setFlight({ flight });
          toggleReply();
        }}
      >
        <b>Send Message</b>
      </Button>

      <Modal isOpen={replyModal} toggle={toggleReply}>
        <ModalHeader toggle={toggleReply}>Send Message</ModalHeader>
        <ModalBody>
          <MessageForm
            key={selectedFlight.flight.id}
            toggleReply={toggleReply}
            {...selectedFlight}
            pilot={pilot}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleReply}>
            <b>Cancel</b>
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};
