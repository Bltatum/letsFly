import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MessageForm from "../messages/MessageForm";
import { FriendsContext } from "../friends/FriendsProvider";

export default ({ pilot }) => {
  const { addFriend } = useContext(FriendsContext);

  const [replyModal, setReplyModal] = useState(false);
  const toggleReply = () => setReplyModal(!replyModal);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [selectedPilot, setPilot] = useState({ pilot: {} });

  const addNewFriend = () => {
    const userId = parseInt(localStorage.getItem("letsFly_user"));
    const friendId = pilot.id;
    addFriend({
      userId: userId,
      friendId: friendId,
    });
  };

  return (
    <section className="pilot_details">
      <img
        src={pilot.image}
        style={{ width: "100px" }}
        alt="profile pic"
        className="pilotPic"
      />
      <div></div>
      <h3 className="pilot_name">{pilot.name}</h3>
      <div className="pilot_username">
        <b>Username:</b> {pilot.username}
      </div>
      <div className="pilot_email">
        <b>Email:</b> {pilot.email}
      </div>
      <div className="pilot_cert">
        <b>Certificate Held:</b> {pilot.certificate}
      </div>
      <div className="pilot_endorsements">
        <b>Endorsements:</b> {pilot.endorsements}
      </div>

      <div className="pilot_hours">
        <b>Flight Hours:</b> {pilot.hours}
      </div>
      <div className="pilot_base">
        <b>Home Base Airport:</b> {pilot.baseApt}
      </div>
      <div className="pilot_plane">
        <b>Plane Owned:</b>
        {pilot.planeType}
      </div>
      <div className="pilot_ifr">
        <b> Instrument Rated:</b> {pilot.ifr === "true" ? "YES" : "NO"}
      </div>
      <Button
        size="lg"
        color="primary"
        onClick={() => {
          setPilot({ pilot });
          toggleReply();
        }}
      >
        <b>Send Message</b>
      </Button>
      <Button
        size="lg"
        color="secondary"
        onClick={() => {
          setPilot({ pilot });
          addNewFriend();
          toggle();
        }}
      >
        <b>Add Friend</b>
      </Button>

      <Modal isOpen={replyModal} toggle={toggleReply}>
        <ModalHeader toggle={toggleReply}>Send Message</ModalHeader>
        <ModalBody>
          <MessageForm
            key={selectedPilot.pilot.id}
            toggleReply={toggleReply}
            {...selectedPilot}
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
