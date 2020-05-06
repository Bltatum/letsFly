import React, { useState, useContext, useEffect } from "react";
import { PilotsContext } from "../Pilots/PilotsProvider";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import PilotDetails from "../Pilots/PilotDetails";

export const SearchResults = ({ searchTerms }) => {
  const { pilots } = useContext(PilotsContext);

  const [filteredPilots, setFiltered] = useState([]);
  const [selectedPilot, setPilot] = useState({
    pilot: {},
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = pilots.filter((pilot) =>
        pilot.username.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      setFiltered([]);
    }
  }, [searchTerms, pilots]);

  return (
    <div className="searchResults">
      <div className="pilots">
        {filteredPilots.map((pilot) => (
          <div
            className="fakeLink href"
            onClick={() => {
              setPilot({ pilot });
              toggle();
            }}
          >
            {pilot.username}
          </div>
        ))}
      </div>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{selectedPilot.pilot.name}</ModalHeader>
        <ModalBody>
          <PilotDetails key={selectedPilot.pilot.id} {...selectedPilot} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            <b>Close</b>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
