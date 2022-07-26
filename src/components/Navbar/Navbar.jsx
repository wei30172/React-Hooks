import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SwitchMode } from "../index";
import "./Navbar.scss";

const menuItems = [
  {
    id: "home",
    name: "Home",
    link: "home",
  },
  {
    id: "useRef",
    name: "UseRef",
    link: "useRef",
  },
  {
    id: "useMemo",
    name: "UseMemo",
    link: "useMemo",
  },
  {
    id: "memo",
    name: "Memo",
    link: "memo",
  },
  {
    id: "useCallback",
    name: "UseCallback",
    link: "useCallback",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="flex">
        {/* pc menu */}
        <div className="navbar_menu">
          <ul className="flex">
            {menuItems &&
              menuItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer"
                  onClick={() => navigate(`/${item.link}`)}
                >
                  {item.name}
                </li>
              ))}
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
          {menuItems &&
            menuItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer"
                onClick={() => navigate(`/${item.link}`)}
              >
                {item.name}
              </li>
            ))}
        </ul>

        {/* switch mode */}
        <SwitchMode />
      </div>
    </div>
  );
};

export default Navbar;
