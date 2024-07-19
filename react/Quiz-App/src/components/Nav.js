import React from "react";

function Nav({ title, navItems }) {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu-item">
          <a href={navItems[0].href}>{navItems[0].name}</a>
        </li>
        <li className="menu-item">
          <a href={navItems[1].href}>{navItems[1].name}</a>
        </li>
        <li className="menu-item">
          <a href={navItems[2].href}>{navItems[2].name}</a>
        </li>
        <li className="menu-item">
          <a href={navItems[3].href}>{navItems[3].name}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
