import React from "react";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const noNamed = [
    { name: "Emergency Call", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },

    { name: "Wiring", link: "/wiring" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const electro = [
    { name: "Emergency Electrician", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Professional", link: "/personal" },

    { name: "test", link: "/test" },
    { name: "test", link: "/test" },
    { name: "test", link: "/test" },
  ];
  const services = [
    { name: "Emergency Electricity Repair", link: "/emergency" },

    { name: "Home", link: "/home" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Prices", link: "/prices" },
  ];
  return (
    <footer className='footer-area clear-both'>
      <div className='container pt-5'>
        <div className='row py-5 '>
          <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
          <FooterCol key={2} menuTitle='Services' menuItems={services} />
          <FooterCol key={3} menuTitle='Electro' menuItems={electro} />
          <FooterCol key={4} menuTitle='Our Address' menuItems={ourAddress}>
            <ul className='social-media list-inline'>
              <li className='list-inline-item'>
                <a href='//facebook.com'>
                  <FontAwesomeIcon
                    className='icon active-icon'
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='//google.com'>
                  <FontAwesomeIcon className='icon' icon={faGooglePlusG} />
                </a>
              </li>
              <li className='list-inline-item'>
                <a href='//instagram.com'>
                  <FontAwesomeIcon className='icon' icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className='mt-5'>
              <h6>Call now</h6>
              <button className='btn btn-brand'>+2025550295</button>
            </div>
          </FooterCol>
        </div>
        <div className='copyRight text-center'>
          <p>
            Copyright {new Date().getFullYear()} All Rights Reserved by Iftakher
            Mahmud
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
