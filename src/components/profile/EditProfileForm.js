import React, { useContext, useState } from "react";

import { PilotsContext } from "../Pilots/PilotsProvider";

export const EditProfileForm = ({ yourProfile, toggleEdit }) => {
  const { updatePilot } = useContext(PilotsContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Separate state variable to track the animal as it is edited
  const [updatedPilot, setPilot] = useState(yourProfile);

  const handleControlledInputChange = (event) => {
    // Create a new copy of the Employee being edited
    const newPilot = Object.assign({}, updatedPilot);

    // Change the property value on the copy
    newPilot[event.target.name] = event.target.value;

    // Set the copy as the new state
    setPilot(newPilot);
  };

  const editPilot = () => {
    updatePilot({
      id: updatedPilot.id,
      name: updatedPilot.name,
      username: updatedPilot.username,
      email: updatedPilot.email,
      password: updatedPilot.password,
      certificate: updatedPilot.certificate,
      ifr: updatedPilot.ifr,
      endorsements: updatedPilot.endorsements,
      hours: updatedPilot.hours,
      baseApt: updatedPilot.baseApt,
      planeType: updatedPilot.planeType,
    }).then(toggleEdit);
  };

  return (
    <form className="form--UpdateProfile">
      <fieldset>
        <div className="form-group">
          <label htmlFor="username"> Username </label>
          <input
            type="text"
            name="username"
            className="form-control"
            required
            defaultValue={yourProfile.username}
            onChange={handleControlledInputChange}
          />

          <label htmlFor="inputEmail"> Email address </label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            defaultValue={yourProfile.email}
            onChange={handleControlledInputChange}
          />

          <label htmlFor="inputPassword"> Password </label>
          <input
            type="password"
            name="password"
            className="form-control"
            required
            defaultValue={yourProfile.password}
            onChange={handleControlledInputChange}
          />

          <div className="form-group">
            <label htmlFor="certificate">Certificate</label>
            <select
              name="certificate"
              id="certificate"
              className="form-control"
              defaultValue={yourProfile.certificate}
              onChange={handleControlledInputChange}
            >
              <option value="0">Select a option</option>
              <option value="Private Pilot">Private Pilot</option>
              <option value="Commercial">Commercial Pilot</option>
              <option value="ATP">ATP Pilot</option>
              <option value="Student">Student Pilot</option>
              ))} ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="ifr">Intrument rated? </label>
            <select
              name="ifr"
              id="ifr"
              className="form-control"
              defaultValue={yourProfile.ifr}
              onChange={handleControlledInputChange}
            >
              <option value="0">Select a option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
              ))}
            </select>
          </div>

          <label htmlFor="endorsements"> Endorsements Held </label>
          <input
            type="text"
            name="endorsements"
            className="form-control"
            required
            defaultValue={yourProfile.endorsements}
            onChange={handleControlledInputChange}
          />

          <label htmlFor="hours"> Hours</label>
          <input
            type="text"
            name="hours"
            className="form-control"
            required
            defaultValue={yourProfile.hours}
            onChange={handleControlledInputChange}
          />

          <label htmlFor="base"> Base Airport </label>
          <input
            type="text"
            name="baseApt"
            className="form-control"
            defaultValue={yourProfile.baseApt}
            onChange={handleControlledInputChange}
          />

          <label htmlFor="base"> Plane Owned</label>
          <input
            type="text"
            name="planeType"
            className="form-control"
            defaultValue={yourProfile.planeType}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(evt) => {
          evt.preventDefault();
          editPilot();
        }}
      >
        <b>Save Updates</b>
      </button>
    </form>
  );
};
