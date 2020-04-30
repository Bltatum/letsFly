import React, { useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Login.css";

const Register = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const endorsements = useRef();
  const hours = useRef();
  const certificate = useRef();
  const base = useRef();
  const plane = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const ifr = useRef();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((_) => _.json())
      .then((user) => {
        if (user.length) {
          return true;
        }
        return false;
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const whatCertificate = certificate.current.value;
    const isIFR = ifr.current.value;

    if (password.current.value === verifyPassword.current.value) {
      existingUserCheck().then(() => {
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            name: `${firstName.current.value} ${lastName.current.value}`,
            username: username.current.value,
            certificate: whatCertificate,
            ifr: isIFR,
            endorsements: endorsements.current.value,
            hours: hours.current.value,
            baseApt: base.current.value,
            planeType: plane.current.value,
          }),
        })
          .then((_) => _.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              localStorage.setItem("letsFly_user", createdUser.id);
              props.toggle();
            }
          });
      });
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <main className="container--login">
      <form className="form--register" onSubmit={handleRegister}>
        <h4 className="blue">
          If you are not a user yet, please register a new account
        </h4>
        <fieldset>
          <label htmlFor="firstName"> First Name </label>
          <input
            ref={firstName}
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            required
          />

          <label htmlFor="lastName"> Last Name </label>
          <input
            ref={lastName}
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            required
          />

          <label htmlFor="username"> Username </label>
          <input
            ref={username}
            type="text"
            name="username"
            className="form-control"
            placeholder="username"
            required
          />

          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            name="email"
            className="form-control"
            placeholder="Email address"
            required
          />

          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />

          <label htmlFor="verifyPassword"> Verify Password </label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />

          <div className="form-group">
            <label htmlFor="certificate">Certificate</label>
            <select
              defaultValue=""
              name="certificate"
              ref={certificate}
              id="certificate"
              className="form-control"
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
              defaultValue=""
              name="direct"
              ref={ifr}
              id="ifr"
              className="form-control"
            >
              <option value="0">Select a option</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
              ))}
            </select>
          </div>

          <label htmlFor="endorsements"> Endorsements Held </label>
          <input
            ref={endorsements}
            type="text"
            name="endorsements"
            className="form-control"
            placeholder="i.e. High Horsepower, taildragger, complex, MEL, none"
            required
          />

          <label htmlFor="hours"> Hours</label>
          <input
            ref={hours}
            type="text"
            name="hours"
            className="form-control"
            placeholder="Flight Hours"
            required
          />

          <label htmlFor="base"> Base Airport </label>
          <input
            ref={base}
            type="text"
            name="base"
            className="form-control"
            placeholder="Home Base Airport"
          />

          <label htmlFor="base"> Plane (If Owned) </label>
          <input
            ref={plane}
            type="text"
            name="plane"
            className="form-control"
            placeholder="Plane Owned"
          />
        </fieldset>
        <fieldset>
          <Button color="success" type="submit">
            Register
          </Button>
        </fieldset>
      </form>
    </main>
  );
};

export default Register;
