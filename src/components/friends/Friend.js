import React, { useState, useContext } from "react";
import { Button, Card, CardBody, CardHeader } from "reactstrap";
import { FriendsContext } from "./FriendsProvider";

export default ({ friend }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { deleteFriend } = useContext(FriendsContext);

  // const [unfriend, setUnfriend] = useState({ friend: {} });

  return (
    <>
      <Card className="friend">
        <CardHeader>
          <b>{friend.username}</b>
        </CardHeader>
        <CardBody>
          <img
            src={friend.image}
            style={{ width: "100px" }}
            alt="profile pic"
            className="friendPic"
          />
          <h3 className="friend_name">{friend.name}</h3>
          <div className="friend_email">
            <b>Email:</b> {friend.email}
          </div>
          <div className="friend_cert">
            <b>Certificate Held:</b> {friend.certificate}
          </div>
          <div className="friend_endorsements">
            <b>Endorsements:</b> {friend.endorsements}
          </div>

          <div className="friend_hours">
            <b>Flight Hours:</b> {friend.hours}
          </div>
          <div className="friend_base">
            <b>Home Base Airport:</b> {friend.baseApt}
          </div>
          <div className="friend_plane">
            <b>Plane Owned:</b>
            {friend.planeType}
          </div>
          <div className="friend_ifr">
            <b> Instrument Rated:</b> {friend.ifr === "true" ? "YES" : "NO"}
          </div>
          <Button
            className="friendDeleteBtn"
            color="danger"
            onClick={() => {
              deleteFriend(friend.id);
              toggle();
            }}
          >
            <b>Unfriend</b>
          </Button>
        </CardBody>
      </Card>
    </>
  );
};
