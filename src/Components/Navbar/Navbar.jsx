import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-nav position-fixed top-0 start-0 w-100 py-3 px-5">
      <div className="container-fluid">
        <Link to="/home" className="text-decoration-none">
          <h1 className="my-0 ms-5 text-uppercase heading p-3">Start Framework</h1>
        </Link>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler text-white border-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="list-unstyled d-flex flex-lg-row flex-column align-items-lg-center me-5 my-auto mb-0">
            <li className="mx-3 my-2 my-lg-0">
              <NavLink
                to="/about"
                id="nav-link"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none fw-semibold px-3 py-2 rounded fs-5 activ-link"
                    : "text-decoration-none fw-bold text-uppercase"
                }
              >
                About
              </NavLink>
            </li>
            <li className="mx-3 my-2 my-lg-0">
              <NavLink
                to="/portfolio"
                id="nav-link"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link"
                    : "text-decoration-none fw-bold text-uppercase"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="mx-3 my-2 my-lg-0">
              <NavLink
                to="/contact"
                id="nav-link"
                className={({ isActive }) =>
                  isActive
                    ? "text-decoration-none fw-semibold fs-5 px-3 py-2 rounded activ-link"
                    : "text-decoration-none fw-bold text-uppercase"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
