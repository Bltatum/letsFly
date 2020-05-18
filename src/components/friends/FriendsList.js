import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";

import { FriendsContext } from "./FriendsProvider";
import { PilotsContext } from "../Pilots/PilotsProvider";
import Friend from "./Friend";
import "./Friends.css";

export const FriendsList = () => {
  const { friends } = useContext(FriendsContext);
  const { pilots } = useContext(PilotsContext);
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const [friendsModal, setFriendsModal] = useState(false);
  const toggle = () => setFriendsModal(!friendsModal);

  const yourFriends = friends.filter((f) => f.userId === userId);

  return (
    <>
      <div className="friends_container">
        <Button
          color="secondary"
          id="toggler"
          style={{ marginBottom: "1rem" }}
          onClick={() => {
            toggle();
          }}
        >
          <b>Your Friends</b>
        </Button>
      </div>

      <Modal isOpen={friendsModal} toggle={toggle}>
        <ModalHeader className="yourFlightHeader" toggle={toggle}>
          Your Friends
        </ModalHeader>
        <ModalBody>
          {yourFriends.map((yf) => {
            const foundPilot = pilots.find((p) => p.id === yf.friendId);
            const foundRelationship = yourFriends.find(
              (f) => f.userId === userId && f.friendId === foundPilot.id
            );
            return (
              <Friend
                key={yf.id}
                friend={foundPilot}
                foundRelationship={foundRelationship}
              />
            );
          })}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            <b>Close</b>
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
