import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { EditProfileForm } from "./EditProfileForm";

export default ({ yourProfile, toggle }) => {
  const [editModal, setEditModal] = useState(false);
  const toggleEdit = () => setEditModal(!editModal);

  const [selectedProfile, setProfile] = useState({ yourProfile: {} });

  return (
    <>
      <section className="pilot_details">
        <div>
          <b>Username: </b>
          {yourProfile.username}
        </div>
        <div>
          <b>Email: </b>
          {yourProfile.email}
        </div>
        <div>
          <b>Password: </b>
          {yourProfile.password}
        </div>
        <div>
          <b>Certifcate: </b>
          {yourProfile.certificate}
        </div>
        <div>
          <b>Endorsements: </b>
          {yourProfile.endorsements}
        </div>
        <div>
          <b> Instrument Rated:</b> {yourProfile.ifr === "true" ? "YES" : "NO"}
        </div>
        <div>
          <b>Hours: </b>
          {yourProfile.hours}
        </div>
        <div>
          <b>Base Airport: </b>
          {yourProfile.baseApt}
        </div>
        <div>
          <b>Plane Owned: </b>
          {yourProfile.planeType}
        </div>

        <Button
          color="info"
          onClick={() => {
            setProfile({ yourProfile });
            toggleEdit();
          }}
        >
          <b>Edit Your Profile</b>
        </Button>
      </section>

      <Modal isOpen={editModal} toggle={toggleEdit}>
        <ModalHeader toggle={toggleEdit}>Edit Profile</ModalHeader>
        <ModalBody>
          <EditProfileForm
            key={selectedProfile.yourProfile.id}
            toggleEdit={toggleEdit}
            {...selectedProfile}
          />
          <Button color="secondary" onClick={toggleEdit}>
            <b>Cancel</b>
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
};
