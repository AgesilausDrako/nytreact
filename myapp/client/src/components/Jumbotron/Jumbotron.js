import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div style={{ height: 250 }} className="jumbotron text-center">
    {children}
  </div>;

export default Jumbotron;
