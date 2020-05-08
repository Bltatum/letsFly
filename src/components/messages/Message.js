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
import MessageForm from "./MessageForm";

export default ({ message, sender, pilot }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [replyModal, setReplyModal] = useState(false);
  const toggleReply = () => setReplyModal(!replyModal);

  const userId = parseInt(localStorage.getItem("letsFly_user"));

  const [selectedMessage, setMessage] = useState({ message: {} });

  const { deleteMessage } = useContext(MessageContext);

  if (userId === message.userId) {
    return (
      <>
        <Card className="message">
          <CardHeader>
            <b>{sender.username}</b> Sent you a message
          </CardHeader>
          <CardBody>
            <div>{message.message}</div>
          </CardBody>
          <div className="messageButtons">
            <Button
              className="deleteBtn"
              color="danger"
              size="sm"
              onClick={() => {
                deleteMessage(message.id);
                toggle();
              }}
            >
              <b>Delete</b>
            </Button>
            <Button
              className="replyBtn"
              size="sm"
              color="secondary"
              onClick={() => {
                setMessage({ message });
                toggleReply();
              }}
            >
              <b>Reply</b>
            </Button>
          </div>
        </Card>

        <Modal isOpen={replyModal} toggle={toggleReply}>
          <ModalHeader toggle={toggleReply}>Send Message</ModalHeader>
          <ModalBody>
            <MessageForm
              key={selectedMessage.message.id}
              toggleReply={toggleReply}
              {...selectedMessage}
              pilot={sender}
              sender={pilot}
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
  } else if (userId === message.senderId) {
    return (
      <>
        <Card className="message">
          <CardHeader className="messageHeader">
            Your message to <b>{pilot.username}</b>
          </CardHeader>
          <CardBody>{message.message}</CardBody>

          <Button
            className="deleteBtn"
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
            className="replyBtn"
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
            className="deleteBtn"
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
