import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faBars } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <nav className="flex-container bg-green padding-1 font-karla text-white">
      <FontAwesomeIcon icon={faSeedling} size="xl" />
      <div>
        <NavLink className="center link padding-1 text-lg" to="home">
          Grow Native Nebraska
        </NavLink>
      </div>
      <div className="r-align dropdown">
        <div className="drop-button">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
        <div className="drop-content">
          <NavLink className="center link-dropdown padding-1" to="home">
            Home
          </NavLink>
          <NavLink className="center link-dropdown padding-1" to="search">
            Search native plants
          </NavLink>
          <NavLink className="center link-dropdown padding-1" to="mailinglist">
            Mailing List
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
