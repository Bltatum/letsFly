import React, { useRef, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, Form } from "reactstrap";
import { MessageContext } from "./MessageProvider";

export default (props, toggleReply) => {
  const { addMessage } = useContext(MessageContext);

  const userId = parseInt(localStorage.getItem("letsFly_user"));
  const sender = props.sender;
  const date = Date.now();

  const message = useRef();

  const newMessage = () => {
    addMessage({
      message: message.current.value,
      senderId: userId,
      userId: sender.id,
      date: date,
    }).then(props.toggleReply);
  };

  return (
    <Form className="flightPlanForm">
      <div> Your message to {sender.username}</div>
      <div className="form-group">
        <input
          type="text"
          id="newMessage"
          ref={message}
          required
          autoFocus
          className="form-control"
          placeholder="Message"
        />
      </div>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          newMessage();
        }}
        className="btn btn-primary"
      >
        <b>Send</b>
      </button>
    </Form>
  );
};