import React from "react";
import "../styles/Header.css";
import Logo from "../images/1.png";

const Header = () => {
  return (
    <header>
      <div className="mini-header h-7 flex justify-center">
        <div className="flex justify-center items-center gap-4 text-white text-xs">
          <div className="flex items-center gap-1">
            <span class="material-symbols-outlined text-sm">code</span>
            <span>Frontend Developer</span>
          </div>
          <div className="flex items-center gap-1">
            <span class="material-symbols-outlined text-xs ">work</span>
            <span>Working At Mrikal</span>
          </div>
          <div className="flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">schedule</span>
            <span>Experience: 2+ years</span>
          </div>
          <div className="flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">location_on</span>
            <span>Gurugram, Harayana</span>
          </div>
        </div>
      </div>
      <div>
        <div className="header">
          <img className="logo" src={Logo} alt="logo" />
          <nav className="nav-links">
            <ul className="flex items-center text-xs font-semibold">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
