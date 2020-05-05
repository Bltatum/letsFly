import React, { useState, useContext, useEffect } from "react";
import { PilotsContext } from "../Pilots/PilotsProvider";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Profile from "./Profile";
import "./Profile.css";

export const ProfileList = () => {
  const { pilots, getPilots } = useContext(PilotsContext);
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  //const yourProfile = pilots.find((p) => p.id === userId);

  const [selectedPilot, setPilot] = useState({ yourProfile: {} });

  const [yourProfile, setProfile] = useState([]);
  useEffect(() => {
    setProfile(pilots.find((p) => p.id === userId));
  }, [pilots]);

  return (
    <>
      <div className="profile_container">
        <Button
          className="button_profile"
          color="secondary"
          onClick={() => {
            toggle();
            setPilot({ yourProfile });
          }}
        >
          <b>Your Profile</b>
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
              yourProfile={yourProfile}
            />
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                <b>Close</b>
              </Button>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};
