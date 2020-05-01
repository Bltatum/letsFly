import React, { useContext } from "react";
import { PilotsContext } from "./PilotsProvider";
import Pilots from "./Pilots";
import "./Pilots.css";

export const PilotsList = () => {
  const { pilots } = useContext(PilotsContext);

  return (
    <>
      <div className="coPilot_container">
        <h3>Pilots</h3>

        <div className="coPilots">
          {pilots.map((pilot) => {
            return <Pilots key={pilot.id} pilot={pilot} />;
          })}
        </div>
      </div>
    </>
  );
};
