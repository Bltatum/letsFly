import React, { useState, useContext } from "react";
import { PilotsContext } from "../Pilots/PilotsProvider";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Profile from "./Profile";
import "./Profile.css";

export const ProfileList = () => {
  const { pilots } = useContext(PilotsContext);
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const yourProfile = pilots.find((p) => p.id === userId);

  const [selectedPilot, setPilot] = useState({ yourProfile: {} });

  return (
    <>
      <div className="profile_container">
        <Button
          className="button_profile"
          color="success"
          onClick={() => {
            toggle();
            setPilot({ yourProfile });
          }}
        >
          Your Profile
        </Button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            {selectedPilot.yourProfile.name}
          </ModalHeader>

          <ModalBody>
            <Profile
              toggle={toggle}
              key={selectedPilot.yourProfile.id}
              {...selectedPilot}
            />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};
