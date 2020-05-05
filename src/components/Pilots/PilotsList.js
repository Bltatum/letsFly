import React, { useContext, useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { PilotsContext } from "./PilotsProvider";
import Pilots from "./Pilots";
import { SearchBar } from "../search/SearchBar";
import { SearchResults } from "../search/SearchResults";
import "./Pilots.css";
import "../search/Search.css";

export const PilotsList = () => {
  const [searchTerms, setTerms] = useState(null);
  const { pilots } = useContext(PilotsContext);

  return (
    <>
      <Card className="pilots_container">
        <CardHeader>
          <h3 className="pilotsHeader">Pilots</h3>
        </CardHeader>
        <SearchBar setTerms={setTerms} />
        <SearchResults searchTerms={searchTerms} />
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
