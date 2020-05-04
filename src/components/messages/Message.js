import React, { useState, useContext } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import { MessageContext } from "./MessageProvider";
import { PilotsContext } from "../Pilots/PilotsProvider";
import MessageForm from "./MessageForm";

export default ({ message, sender }) => {
  const { pilots } = useContext(PilotsContext);
  const { messages } = useContext(MessageContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [replyModal, setReplyModal] = useState(false);
  const toggleReply = () => setReplyModal(!replyModal);

  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const [selectedMessage, setMessage] = useState({ message: {} });

  const { deleteMessage, addMessage, getMessages } = useContext(MessageContext);

  const pilot = messages.map((m) => {
    pilots.find((p) => p.id === m.senderId);
  });

  if (userId === message.userId) {
    return (
      <>
        <Card className="message">
          <CardHeader>
            <b>From {sender.username}</b>
          </CardHeader>
          <CardBody>
            <div>{message.message}</div>
            {/* <div> {new Date(message.date).toLocaleDateString()}</div> */}
          </CardBody>

          <Button
            color="danger"
            size="sm"
            onClick={() => {
              deleteMessage(message.id);
              toggle();
            }}
          >
            <b>Delete</b>
          </Button>
        </Card>

        <Modal isOpen={replyModal} toggle={toggleReply}>
          <ModalHeader toggle={toggleReply}>Send Message</ModalHeader>
          <ModalBody>
            <MessageForm
              key={selectedMessage.message.id}
              toggleReply={toggleReply}
              {...selectedMessage}
              pilot={pilot}
              sender={sender}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleReply}>
              <b>Cancel</b>
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  } else if (userId === sender.id) {
    return (
      <>
        <Card className="message">
          <CardHeader>
            <b>To: {sender.username}</b>
          </CardHeader>
          <CardBody>{message.message}</CardBody>
          <Button
            color="danger"
            size="sm"
            onClick={() => {
              deleteMessage(message.id);
              toggle();
            }}
          >
            <b>Delete</b>
          </Button>
        </Card>

        <Modal isOpen={replyModal} toggle={toggleReply}>
          <ModalHeader toggle={toggleReply}>Send Message</ModalHeader>
          <ModalBody>
            <MessageForm
              key={selectedMessage.message.id}
              toggleReply={toggleReply}
              {...selectedMessage}
              sender={sender}
              pilot={pilot}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleReply}>
              <b>Cancel</b>
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Card className="message">
          <CardHeader>
            <b>{sender.username}</b>
          </CardHeader>
          <CardBody>{message.message}</CardBody>

          <Button
            size="sm"
            color="secondary"
            onClick={() => {
              setMessage({ message });
              toggleReply();
            }}
          >
            <b>Reply</b>
          </Button>
          <Button
            color="danger"
            size="sm"
            onClick={() => {
              deleteMessage(message.id);
              toggle();
            }}
          >
            <b>Delete</b>
          </Button>
        </Card>

        <Modal isOpen={replyModal} toggle={toggleReply}>
          <ModalHeader toggle={toggleReply}>Send Message</ModalHeader>
          <ModalBody>
            <MessageForm
              key={selectedMessage.message.id}
              toggleReply={toggleReply}
              {...selectedMessage}
              sender={sender}
              pilot={pilot}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleReply}>
              <b>Cancel</b>
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
};
