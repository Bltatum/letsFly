import React, { useContext, useState } from "react";
import { FlightPlanContext } from "./FlightPlanProvider";

export const EditFlightForm = ({ yourFlights, toggleEdit }) => {
  const { updateFlightPlan } = useContext(FlightPlanContext);

  const [updatedFlight, setFlight] = useState(yourFlights);

  const handleControlledInputChange = (event) => {
    const newFlight = Object.assign({}, updatedFlight);

    newFlight[event.target.name] = event.target.value;

    setFlight(newFlight);
  };

  const editFlight = () => {
    updateFlightPlan({
      id: updatedFlight.id,
      tripName: updatedFlight.tripName,
      date: updatedFlight.date,
      depart: updatedFlight.depart,
      destination: updatedFlight.destination,
      departureTime: updatedFlight.departureTime,
      direct: updatedFlight.direct,
      purpose: updatedFlight.purpose,
      coPilot: updatedFlight.coPilot,
      planeType: updatedFlight.planeType,
      endorsements: updatedFlight.endorsements,
      flightRulesVFR: updatedFlight.flightRulesVFR,
      pilotId: updatedFlight.pilotId,
    }).then(toggleEdit);
  };

  return (
    <form className="form--UpdateFlight">
      <h2 className="flightPlanForm__title">Make Trip</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="tripName">Trip Description</label>
          <input
            type="text"
            name="tripName"
            id="tripName"
            required
            autoFocus
            className="form-control"
            defaultValue={yourFlights.tripName}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="direct">IFR or VFR </label>
          <select
            name="flightRulesVFR"
            id="direct"
            className="form-control"
            defaultValue={yourFlights.flightRulesVFR}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a option</option>
            <option value="true">VFR</option>
            <option value="false">IFR</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Date and Time of Flight</div>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={yourFlights.tripName}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <input
            type="time"
            id="time"
            name="departureTime"
            defaultValue={yourFlights.departureTime}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="depart">Departing Airport</label>
          <input
            type="text"
            id="depart"
            name="depart"
            required
            autoFocus
            className="form-control"
            defaultValue={yourFlights.depart}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="destination">Destination Airport</label>
          <input
            type="text"
            id="destination"
            name="destination"
            required
            autoFocus
            className="form-control"
            defaultValue={yourFlights.destination}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="direct">Direct Flight? </label>
          <select
            name="direct"
            id="direct"
            className="form-control"
            defaultValue={yourFlights.direct}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a option</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="purpose">Purpose of Flight</label>
          <input
            type="text"
            id="purpose"
            name="purpose"
            required
            autoFocus
            className="form-control"
            defaultValue={yourFlights.purpose}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="coPilot">Co-Pilot Need</label>
          <select
            name="coPilot"
            id="coPilot"
            className="form-control"
            defaultValue={yourFlights.coPilot}
            onChange={handleControlledInputChange}
          >
            <option value="0">Select a option</option>
            <option value="Saftey Pilot">Saftey Pilot</option>
            <option value="Need Instructor">Intruction</option>
            <option value="Co-Pilot">Co-Pilot</option>
            <option value="Split-Time">Split-Time</option>
            ))} ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="planeType">Type of Plane</label>
          <input
            type="text"
            id="planeType"
            name="planeType"
            required
            autoFocus
            className="form-control"
            defaultValue={yourFlights.planeType}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="endorsements">Endorsements Needed</label>
          <input
            type="text"
            id="endorsements"
            name="endorsements"
            required
            autoFocus
            className="form-control"
            defaultValue={yourFlights.endorsements}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(evt) => {
          evt.preventDefault();
          editFlight();
        }}
      >
        Save Updates
      </button>
    </form>
  );
};
