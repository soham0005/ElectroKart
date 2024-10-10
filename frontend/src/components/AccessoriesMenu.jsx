import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Accessories.css";

function AccessoriesMenu() {
  const location = useLocation();
  return (
    <div className="AccessoriesMenu">
      <Link
        className={`AccessoriesLink ${
          location.pathname === "/music" ? "AccessoriesActive" : ""
        }`}
        to="/music"
      >
        Music
      </Link>
      <Link
        className={`AccessoriesLink ${
          location.pathname === "/smartDevices" ? "AccessoriesActive" : ""
        }`}
        to="/smartDevices"
      >
        Smart Devices
      </Link>
      <Link
        className={`AccessoriesLink ${
          location.pathname === "/home" ? "AccessoriesActive" : ""
        }`}
        to="/home"
      >
        Home
      </Link>
      <Link
        className={`AccessoriesLink ${
          location.pathname === "/lifestyle" ? "AccessoriesActive" : ""
        }`}
        to="/lifestyle"
      >
        LifeStyle
      </Link>
      <Link
        className={`AccessoriesLink ${
          location.pathname === "/mobileAccessories" ? "AccessoriesActive" : ""
        }`}
        to="/mobileAccessories"
      >
        Mobile Accessories
      </Link>
    </div>
  );
}

export default AccessoriesMenu;
