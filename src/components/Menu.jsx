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
      <nav className="padding-1 font-karla flex-column">
        {/* <FontAwesomeIcon icon={faSeedling} size="xl" /> */}
        <div className="center">
          <NavLink className="headline" to="home">
            Grow Native Nebraska
          </NavLink>
        </div>
        <div className="flex-container center menu-line">
          <NavLink className="center navlink padding-1" to="home">
            Home
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
