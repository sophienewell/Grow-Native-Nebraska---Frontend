import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faBars } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const clickOutside = (e) => {
    const dropdownbutton = document.getElementById("drop-button");
    if (dropdownOpen && !dropdownbutton.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  document.addEventListener("click", (e) => clickOutside(e));

  return (
    <>
      <nav className="flex-container bg-green padding-1 font-karla text-white">
        <FontAwesomeIcon icon={faSeedling} size="xl" />
        <div>
          <NavLink className="center link padding-1 text-lg" to="home">
            Grow Native Nebraska
          </NavLink>
        </div>
        <div className="r-align dropdown">
          <div
            id="drop-button"
            className="drop-button"
            onClick={toggleDropdownOpen}
          >
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </div>
        </div>
      </nav>
      <div className={"drop-content " + (dropdownOpen ? "show" : "hide")}>
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
    </>
  );
}

export default Menu;
