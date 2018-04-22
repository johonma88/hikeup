import React from "react";
import "./DropdownList.css";

export const DropdownList = ({ children }) => {
  return (
      <div>
      <ul className="dropdown-menu">
        {children}
      </ul>
      </div>
  );
};