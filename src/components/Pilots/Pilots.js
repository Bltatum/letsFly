import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
} from "reactstrap";
import PilotDetails from "./PilotDetails";

export default ({ pilot }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedPilot, setPilot] = useState({ pilot: {} });

  return (
    <>
      <Card className="pilot">
        <h4>{pilot.username}</h4>
        <div>
          <b>Base Airport:</b> {pilot.baseApt}
        </div>

        <Button
          className="button_pilotDetails"
          size="sm"
          color="secondary"
          onClick={() => {
            toggle();
            setPilot({ pilot });
          }}
        >
          <b>Pilot Profile</b>
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
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              <b>Close</b>
            </Button>
          </ModalFooter>
        </Modal>
      </Card>
    </>
  );
};
