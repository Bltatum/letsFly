import { FlightPlanContext } from "./FlightPlanProvider";
import React, {
  Component,
  useState,
  DatePicker,
  useRef,
  useContext,
} from "react";

export default (props) => {
  const { addFlightPlan } = useContext(FlightPlanContext);
  //const [startDate, setStartDate] = useState(new Date());

  const tripName = useRef();
  const date = useRef();
  const depart = useRef();
  const destination = useRef();
  const departureTime = useRef();
  const direct = useRef();
  const purpose = useRef();
  const coPilot = useRef();
  //const flightPlanURL = useRef();
  const planeType = useRef();
  const endorsements = useRef();
  const flightRules = useRef();

  const makeFlightPlan = () => {
    const isDirect = direct.current.value;
    const coPilotNeed = coPilot.current.value;
    const flightRulesVFR = flightRules.current.value;
    const userId = parseInt(localStorage.getItem("letsFly_user"));

    addFlightPlan({
      tripName: tripName.current.value,
      date: date.current.value,
      depart: depart.current.value,
      destination: destination.current.value,
      departureTime: departureTime.current.value,
      direct: isDirect,
      purpose: purpose.current.value,
      coPilot: coPilotNeed,
      //flightPlanURL: flightPlanURL,
      planeType: planeType.current.value,
      endorsements: endorsements.current.value,
      flightRulesVFR: flightRulesVFR,
      pilotId: userId,
    }).then(props.toggler);
  };

  return (
    <form className="flightPlanForm">
      <h2 className="flightPlanForm__title">Make Trip</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="tripName">Trip Description</label>
          <input
            type="text"
            id="tripName"
            ref={tripName}
            required
            autoFocus
            className="form-control"
            placeholder="Trip Name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="direct">IFR or VFR </label>
          <select
            defaultValue=""
            name="direct"
            ref={flightRules}
            id="direct"
            className="form-control"
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
          <input type="date" id="date" name="date" ref={date} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <input type="time" id="time" name="time" ref={departureTime} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="depart">Departing Airport</label>
          <input
            type="text"
            id="depart"
            ref={depart}
            required
            autoFocus
            className="form-control"
            placeholder="Depart"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="destination">Destination Airport</label>
          <input
            type="text"
            id="destination"
            ref={destination}
            required
            autoFocus
            className="form-control"
            placeholder="Destination"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="direct">Direct Flight? </label>
          <select
            defaultValue=""
            name="direct"
            ref={direct}
            id="direct"
            className="form-control"
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
            ref={purpose}
            required
            autoFocus
            className="form-control"
            placeholder="Purpose of Flight"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="coPilot">Co-Pilot Need</label>
          <select
            defaultValue=""
            name="coPilot"
            ref={coPilot}
            id="coPilot"
            className="form-control"
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
            ref={planeType}
            required
            autoFocus
            className="form-control"
            placeholder="i.e Cessna 182, Piper Cherokee"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="endorsements">Endorsements Needed</label>
          <input
            type="text"
            id="endorsements"
            ref={endorsements}
            required
            autoFocus
            className="form-control"
            placeholder="i.e. high horsepower, taildragger, none"
          />
        </div>
      </fieldset>
      {/* <fieldset>
        <div className="form-group">
          <label htmlFor="flightPlan">Insert Flight Plan URL here:</label>
          <input
            type="text"
            id="flightPlan"
            ref={flightPlanURL}
            required
            autoFocus
            className="form-control"
            placeholder="Paste Flight Plan URL here."
          />
        </div>
      </fieldset> */}

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          makeFlightPlan();
        }}
        className="btn btn-primary"
      >
        Save Flight
      </button>
    </form>
  );
};
