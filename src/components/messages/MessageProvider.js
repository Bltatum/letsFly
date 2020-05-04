import React, { useState, useEffect } from "react";

export const MessageContext = React.createContext();

export const MessageProvider = (props) => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return fetch("http://localhost:8088/messages")
      .then((res) => res.json())
      .then(setMessages);
  };

  const addMessage = (message) => {
    return fetch("http://localhost:8088/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    }).then(getMessages);
  };
  const deleteMessage = (message) => {
    return fetch(`http://localhost:8088/messages/${message}`, {
      method: "DELETE",
    }).then(getMessages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    console.log("****  Messages APPLICATION STATE CHANGED  ****");
  }, [messages]);

  return (
    <MessageContext.Provider
      value={{
        messages,
        addMessage,
        deleteMessage,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};
