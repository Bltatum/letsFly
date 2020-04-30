import React, { Component, useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PilotDetails from "./PilotDetails";

export default ({ pilot }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedPilot, setPilot] = useState({ pilot: {} });

  return (
    <>
      <section className="pilot">
        <h4 className="pilot_name">{pilot.username}</h4>
        <div className="pilot__base">
          <b>Base Airport:</b> {pilot.baseApt}
        </div>

        <Button
          classname="button_pilotDetails"
          size="sm"
          color="primary"
          onClick={() => {
            toggle();
            setPilot({ pilot });
          }}
        >
          Pilot Profile
        </Button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Pilot Profile</ModalHeader>
          <ModalBody>
            <PilotDetails
              toggler={toggle}
              key={selectedPilot.pilot.id}
              {...selectedPilot}
            />
          </ModalBody>
        </Modal>
      </section>
    </>
  );
};
