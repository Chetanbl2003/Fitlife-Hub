import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-F">F</span>ITLIFE <span className="logo-H">H</span>UB
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/workout-plans" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Workout Plans
            </NavLink>
          </li>
          <li>
            <NavLink to="/nutrition-guide" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Nutrition Guide
            </NavLink>
          </li>
          <li>
            <NavLink to="/memberships" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Memberships
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
