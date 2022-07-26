import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="flex">
        {/* pc menu */}
        <div className="navbar_menu">
          <ul>
            <li className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </li>
          </ul>
        </div>

        {/* hamburger */}
        <div
          onClick={() => setShowMobMenu(!showMobMenu)}
          className="navbar_hamburger"
        >
          {!showMobMenu ? (
            <div className="cursor-pointer">✖</div>
          ) : (
            <div className="cursor-pointer">☰</div>
          )}
        </div>

        {/* mobile menu */}
        <ul className={!showMobMenu ? "navbar_hidden" : "navbar_mobile-menu"}>
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
