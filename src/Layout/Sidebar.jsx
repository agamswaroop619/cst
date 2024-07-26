import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div className="sidebar-header">
        <img
          src="https://infringementportalcontent.mfilterit.com/images/media/logos/mfilterit-white-logo.png"
          height={20}
        />
      </div>
      <ul className="sidebar-menu">
        <li
          className={`${
            location.pathname === "/cst" || location.pathname === "/"
              ? "active"
              : ""
          } `}
          style={{ border: "none" }}
        >
          <Link to="/cst">Calgate Social Tool</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
