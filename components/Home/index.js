import React, { Component } from "react";
import { render } from "react-dom";
import "../../style.css";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

const TITLE = 'Landing Page'

// Page only displays when first opened as landing page, no real content
const Home = () => {
  return (
    <div className="titleScreen">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <h1>React Reminders</h1>
      <div className="logo">
        <img src="https://i.ibb.co/BnsN2hS/logo.png" alt="React Reminders Logo" />
      </div>
      <br/>
      <br/>
      <br/>
      <div className="btnPosition">
        <NavLink to="/List">
          <button className="btn">Continue</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
