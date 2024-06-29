import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/drive-download-20240615T053340Z-001/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex flex-col sm:flex-row justify-around w-full bg-black-50">
      <ul className="hidden sm:flex gap-3 sm:gap-4 md:gap-5">
        <li>
          <FontAwesomeIcon
            className="h-6 sm:h-7 md:h-8 cursor-pointer hover:text-yellow-500 transition-all duration-1000"
            icon={faTwitter}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="h-6 sm:h-7 md:h-8 cursor-pointer hover:text-yellow-500 transition-all duration-1000"
            icon={faFacebook}
          />
        </li>
        <li>
          <FontAwesomeIcon
            className="h-6 sm:h-7 md:h-8 cursor-pointer hover:text-yellow-500 transition-all duration-1000"
            icon={faInstagram}
          />
        </li>
      </ul>
      <div className="flex-col justify-between gap-10 flex font-serif">
        <div className="flex justify-center">
          <img
            className="w-52 h-24 bg-transparent brightness-200"
            src={logo}
            alt="Logo"
          />
        </div>

        <ul
          className={`${
            isNavOpen ? "flex" : "hidden"
          } sm:flex tracking-widest flex-col sm:flex-row gap-2 md:gap-14 font-serif cursor-pointer `}
        >
          <li>
            <Link
              className="navlinks"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1500}
              to="Page1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="navlinks"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              to="Page2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="navlinks"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={2000}
              to="Page4"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="navlinks"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={3000}
              to="Page5"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              className="navlinks"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={3500}
              to="Page6"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              className="navlinks"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={4000}
              to="Page7"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden flex justify-between w-full px-4">
        <button onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="hidden sm:flex">
        <a href="/Booking">
          <button className="sm:gap-4 md:gap-5 rounded-lg justify-center border-yellow-400 w-44 border-solid p-2 text-xl bg-yellow-500">
            Book now
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
