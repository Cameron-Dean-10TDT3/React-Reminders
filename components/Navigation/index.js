import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/List">List</NavLink>
      <NavLink to="/Add">Add</NavLink>
    </div>
  );
};

export default Navigation;
