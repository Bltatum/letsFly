import React, { useContext } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
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
              const pilot = pilots.find((p) => p.id === message.userId);
              return (
                <Message
                  key={message.id}
                  message={message}
                  sender={sender}
                  pilot={pilot}
                />
              );
            })}
          </div>
        </CardBody>
      </Card>
    </>
  );
};
