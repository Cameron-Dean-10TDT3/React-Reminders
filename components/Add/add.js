import React, { Component } from "react";
import { render } from "react-dom";
import "../../style.css";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

const TITLE = 'Add  Reminder'

const Add = () => {
  return (
    <div className="addScreen">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h3>Reminder:</h3>
      // User inputs the information (reminder/s) which is displayed on the list page
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
