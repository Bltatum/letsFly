import React, { useState, useEffect } from "react";

export const PilotsContext = React.createContext();

export const PilotsProvider = (props) => {
  const [pilots, setPilots] = useState([]);

  const getPilots = () => {
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then(setPilots);
  };

  const addPilots = (Pilots) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Pilots),
    }).then(getPilots);
  };
  const updatePilot = (pilot) => {
    return fetch(`http://localhost:8088/users/${pilot.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pilot),
    }).then(getPilots);
  };

  useEffect(() => {
    getPilots();
  }, []);

  useEffect(() => {
    console.log("****  Pilots APPLICATION STATE CHANGED  ****");
  }, [pilots]);

  return (
    <PilotsContext.Provider
      value={{
        pilots,
        addPilots,
        updatePilot,
      }}
    >
      {props.children}
    </PilotsContext.Provider>
  );
};
