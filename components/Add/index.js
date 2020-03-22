import React, { Component } from "react";
import { render } from "react-dom";
import "../../style.css";
import { NavLink } from "react-router-dom";

const Add = () => {
  return (
    <div className="addScreen">
      <h3>Reminder:</h3>
      <form>
        <label>
          <input type="text" />
        </label>
        <br />
        <br />
        Reminder Date:
        <br />
        <input type="date" />
        <br />
        <br />
        Reminder Time:
        <br />
        <input type="time" />
        <div className="btnPosition" id="btnAdd">
          <NavLink to="/List">
            <button className="btn">Add Reminder</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Add;
