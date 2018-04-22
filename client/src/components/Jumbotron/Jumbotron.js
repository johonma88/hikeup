import React from "react";
import './Jumbotron.css'

const Jumbotron = ({ children }) => (
  <div style={{ 
    height: 210, 
    clear: "both",
    }} className="jumbotron shadow text">
    {children}
  </div>
);

export default Jumbotron;
