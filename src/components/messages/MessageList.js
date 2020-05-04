import React, { useContext } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Button,
  UncontrolledCollapse,
} from "reactstrap";
import { MessageContext } from "./MessageProvider";
import { PilotsContext } from "../Pilots/PilotsProvider";
import Message from "./Message";
import "./Messages.css";

export const MessagesList = () => {
  const { messages } = useContext(MessageContext);
  const { pilots } = useContext(PilotsContext);
  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const yourMessages = messages.filter(
    (m) => m.userId === userId || m.senderId === userId
  );

  //   const sender = pilots.map((p) => p.id === messages.pilotId);

  const sortedByDateMessages = yourMessages.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <Card className="messages_container">
        <CardHeader>
          <h3 className="messagesHeader">Messages</h3>
        </CardHeader>
        <CardBody className="text-center">
          <div className="messages">
            {sortedByDateMessages.map((message) => {
              const sender = pilots.find((p) => p.id === message.senderId);
              return (
                <Message key={message.id} message={message} sender={sender} />
              );
            })}
          </div>
        </CardBody>
      </Card>
    </>
  );
};
