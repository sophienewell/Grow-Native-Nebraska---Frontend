import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav className="padding-1 font-karla flex-column">
        <div className="center">
          <NavLink className="headline" to="home">
            GROW NATIVE NEBRASKA
          </NavLink>
        </div>
        <div className="flex-container center menu-line">
          <NavLink className="center navlink padding-1" to="home">
            Home
          </NavLink>
          <NavLink className="center navlink padding-1" to="why">
            Why grow native?
          </NavLink>
          <NavLink className="center navlink padding-1" to="search">
            Search native plants
          </NavLink>
          <NavLink className="center navlink padding-1" to="mailinglist">
            Mailing List
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Menu;
