import React from "react";
import { Link } from "react-router-dom";
import { FaChrome } from "react-icons/fa";
import { GrApps } from "react-icons/gr";
import { BsPlus } from "react-icons/bs";

const LinksMenu = () => {
    
  return (
    <section className="links-menu">
      <ul className="list">
        <Link id="blank-page" to="https://www.google.com" target="_blank">
          <li id="menu-item">
            <FaChrome id="icon" />
            Chrome Tab
          </li>
        </Link>
        <li id="menu-item">
          <GrApps id="icon" />
          Apps
        </li>
        <li id="menu-item">
          <BsPlus id="icon" />
          New Link
        </li>
      </ul>
    </section>
  );
};

export default LinksMenu;
