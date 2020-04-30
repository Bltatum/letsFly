import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Autherization from "./components/autherization/Autherization";

export default () => {
  const [check, update] = useState(false);
  const toggle = () => update(!check);

  return localStorage.getItem("letsFly_user") ? (
    <Dashboard />
  ) : (
    <Autherization toggle={toggle} />
  );
};
