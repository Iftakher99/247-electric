import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light '>
      <div class='container-fluid'>
        <Link class='navbar-brand' href='#'>
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
              <a class='nav-link mx-5 text-light ' aria-current='page' href='#'>
                Home
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link mx-5 text-light' href='#'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mx-5 text-light' href='#'>
                Dental Services
              </a>
            </li>
            <li class='nav-item '>
              <a class='nav-link mx-5 text-light' href='#'>
                Reviews{" "}
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mx-5 text-light' href='#'>
                Blogs
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mx-5 text-light' href='#'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
