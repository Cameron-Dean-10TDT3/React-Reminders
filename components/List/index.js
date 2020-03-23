import React, { Component } from "react";
import { render } from "react-dom";
import "../../style.css";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

const TITLE = "Reminders List";

const List = () => {
  return (
    <div className="listScreen">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h3 className="instruction">
        What would you like me to remind you about?
      </h3>
      <div className="btnPosition">
        <NavLink to="/Add">
          <button className="addButton">Tap here to add a new reminder</button>
        </NavLink>
      </div>
      <section className="display-item">
        <div className="wrapper">
          <ul>
            {this.state.items.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>
                    brought by: {item.user}
                    <button
                      className="btn"
                      onClick={() => this.removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default List;
