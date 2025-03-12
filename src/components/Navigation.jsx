import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ activeSection }) {
  // This component renders a navigation bar with links to different sections of the website.
  // The `activeSection` prop is used to highlight the currently active link.

  return (
    <nav>
      {/* Unordered list for navigation links */}
      <ul>
        {/* Home link */}
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {/* About Me link */}
        <li>
          <NavLink to="/about" activeClassName="active">
            About Me
          </NavLink>
        </li>
        {/* Portfolio link */}
        <li>
          <NavLink to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        {/* Contact link */}
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        {/* Resume link */}
        <li>
          <NavLink to="/resume" activeClassName="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
