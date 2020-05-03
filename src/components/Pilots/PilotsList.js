import React, { useContext } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { PilotsContext } from "./PilotsProvider";
import Pilots from "./Pilots";
import "./Pilots.css";

export const PilotsList = () => {
  const { pilots } = useContext(PilotsContext);

  return (
    <>
      <Card className="pilots_container">
        <CardHeader>
          <h3 className="pilotsHeader">Pilots</h3>
        </CardHeader>
        <CardBody className="text-center">
          <div className="coPilots">
            {pilots.map((pilot) => {
              return <Pilots key={pilot.id} pilot={pilot} />;
            })}
          </div>
        </CardBody>
      </Card>
    </>
  );
};
