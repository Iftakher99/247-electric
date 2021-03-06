import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  const [isElectrician, setIsElectrician] = useState();
  useEffect(() => {
    fetch("https://electric-247.herokuapp.com/isElectrician", {
      method: "POST",
      headers: { "Content-type": "application.json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsElectrician);
  }, []);
  console.log(loggedInUser.email);
  return (
    <div
      className='sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4'
      style={{ height: "100vh" }}
    >
      <ul className='list-unstyled'>
        <li>
          <Link to='/dashboard' className='text-white'>
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to='/' className='text-white'>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {/* {isElectrician&& } */}
        <div>
          <li>
            <Link to='/dashboard/appointments' className='text-white'>
              <FontAwesomeIcon icon={faCalendar} /> <span>Appointments</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/allClients' className='text-white'>
              <FontAwesomeIcon icon={faUsers} /> <span>Clients</span>
            </Link>
          </li>
          <li></li>
          <li>
            <Link to='/addAElectrician' className='text-white'>
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Electrician</span>
            </Link>
          </li>
          <li>
            <Link to='/electrician/setting' className='text-white'>
              <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
            </Link>
          </li>
        </div>
      </ul>
      <div>
        <Link to='/' className='text-white'>
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
