import React, { Component, useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default ({ pilot }) => (
  <section className="pilot_details">
    <h3 className="pilot_name">{pilot.name}</h3>
    <div className="pilot_email">
      <b>Email:</b> {pilot.email}
    </div>
    <div className="pilot_cert">
      <b>Certificate Held:</b> {pilot.certificate}
    </div>
    <div className="pilot_endorsements">
      <b>Endorsements:</b> {pilot.endorsements}
    </div>

    <div className="pilot_hours">
      <b>Flight Hours:</b> {pilot.flightHours}
    </div>
    <div className="pilot_base">
      <b>Home Base Airport:</b> {pilot.baseApt}
    </div>
    <div className="pilot_plane">
      <b>Plane Owned:</b>
      {pilot.planeType}
    </div>
    <div className="pilot_ifr">
      <b> Instrument Rated:</b> {pilot.ifr === "true" ? "YES" : "NO"}
    </div>
  </section>
);
