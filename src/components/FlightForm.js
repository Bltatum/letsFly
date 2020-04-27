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
  const splitTime = useRef();
  const flightPlan = useRef();

  const makeFlightPlan = () => {
    const isDirect = direct.current.value;
    // const splitTime = splitTime.current.value;

    addFlightPlan({
      tripName: tripName.current.value,
      date: date.current.value,
      depart: depart.current.value,
      destination: destination.current.value,
      departureTime: departureTime.current.value,
      direct: isDirect,
      purpose: purpose.current.value,
      //   coPilot: coPilot.current.value,
      //   splitTime: splitTime,
      //   flightPlan: flightPlan,
    }).then(props.toggler);
  };

  return (
    <form className="flightPlanForm">
      <h2 className="flightPlanForm__title">Make Trip</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="tripName"></label>
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
          <label htmlFor="depart"></label>
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
          <label htmlFor="destination"></label>
          <input
            type="text"
            id="destination"
            ref={destination}
            required
            autoFocus
            className="form-control"
            placeholder="destination"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="direct">Direct Flight </label>
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
          <label htmlFor="purpose"></label>
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
