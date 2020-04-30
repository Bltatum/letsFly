import React, { useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Login.css";

const Login = (props) => {
  const email = useRef();
  const password = useRef();

  const existingUserCheck = () => {
    return fetch(`http://localhost:8088/users?email=${email.current.value}`)
      .then((_) => _.json())
      .then((user) => {
        if (user.length) {
          return user[0];
        }
        return false;
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    existingUserCheck().then((exists) => {
      if (exists && exists.password === password.current.value) {
        localStorage.setItem("letsFly_user", exists.id);
        props.toggle();
      } else if (exists && exists.password !== password.current.value) {
        window.alert("Password does not match");
      } else if (!exists) {
        window.alert("User account does not exist");
      }
    });
  };

  return (
    <main className="container--login">
      <form className="form--login" onSubmit={handleLogin}>
        <h2>Please sign in</h2>
        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input
            ref={email}
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset>
          <Button color="success" type="submit">
            Sign in
          </Button>
        </fieldset>
      </form>
    </main>
  );
};

export default Login;
