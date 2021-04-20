import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import Dashboard from "../../DashBoard/Dashboard/Dashboard";
const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light '>
      <div class='container-fluid'>
        <Link class='navbar-brand' to='/home'>
          <img src={logo} alt='' />
        </Link>
        <button
          class='navbar-toggler '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNav'>
          <ul class='navbar-nav  text-light float-end ms-auto'>
            <li class='nav-item'>
              <Link
                class='nav-link mx-5 text-light '
                aria-current='page'
                href='#'
              >
                Home
              </Link>
            </li>

            <li class='nav-item'>
              <Link
                to='/dashboard/allClients'
                class='nav-link mx-5 text-light'
                href='#'
              >
                Clients
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='/dashboard' class='nav-link mx-5 text-light' href='#'>
                Dashboard
              </Link>
            </li>
            <li class='nav-item '>
              <Link to='/admin' class='nav-link mx-5 text-light' href='#'>
                Admin{" "}
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='blogs' class='nav-link mx-5 text-light' href='#'>
                Blogs
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='contactUs' class='nav-link mx-5 text-light' href='#'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
