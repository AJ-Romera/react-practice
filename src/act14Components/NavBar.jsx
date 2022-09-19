import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        end
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/headphones"
      >
        Page 1
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/watch"
      >
        Page 2
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/donuts"
      >
        Page 3
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/shoes"
      >
        Page 4
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/gopro"
      >
        Page 5
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to="/laptop"
      >
        Page 6
      </NavLink>
    </nav>
  );
}

export default NavBar;
