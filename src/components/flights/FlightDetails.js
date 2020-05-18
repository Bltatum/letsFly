import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MessageForm from "../messages/MessageForm";

export default ({ flight, pilot }) => {
  const [replyModal, setReplyModal] = useState(false);
  const toggleReply = () => setReplyModal(!replyModal);

  const [selectedFlight, setFlight] = useState({ flight: {} });
  const reverseDate = () => {
    let date = flight.date.split("-");
    let newDate = date[1] + "-" + date[2] + "-" + date[0];
    return newDate;
  };
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  if (userId === pilot.id) {
    return (
      <section className="flight">
        <h3 className="flight_name">{flight.tripName}</h3>
        <h5 className="flight_pilot">
          <b>Pilot:</b> {pilot.name}
        </h5>
        <div className="flight_date">
          <b>Date of Flight:</b> {reverseDate()}
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
        <div className="flightplanlink">
          <b>Flight Plan Link:</b>{" "}
          <a
            href={flight.flightPlanUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>CLICK</b>
          </a>
        </div>
      </section>
    );
  } else {
    return (
      <section className="flight">
        <h3 className="flight_name">{flight.tripName}</h3>
        <h5 className="flight_pilot">
          <b>Pilot:</b> {pilot.name}
        </h5>
        <div className="flight_date">
          <b>Date of Flight:</b> {reverseDate()}
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
        <div className="flightplanlink">
          <b>Flight Plan Link:</b>{" "}
          <a
            href={flight.flightPlanUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>CLICK</b>
          </a>
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
  }
};
