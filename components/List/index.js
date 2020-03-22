import React, { Component } from "react";
import { render } from "react-dom";
import "../../style.css";
import { NavLink } from "react-router-dom";

const List = () => {
  return (
    <div className="listScreen">
      <h3 className="instruction">
        What would you like me to remind you about?
      </h3>
      <div className="btnPosition">
        <NavLink to="/Add">
          <button className="addButton">Tap here to add a new reminder</button>
        </NavLink>
      </div>
    </div>
  );
};

export default List;
