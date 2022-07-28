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
    id: "useCallback",
    name: "UseCallback",
    link: "useCallback",
  },
  {
    id: "memo",
    name: "React.Memo",
    link: "memo",
  },
  {
    id: "useMemo",
    name: "UseMemo",
    link: "useMemo",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobMenu, setShowMobMenu] = useState(false);

  return (
    <div className="navbar">
      {/* switch mode */}
      <SwitchMode />
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
            <button className="cursor-pointer">
              <h1>☰</h1>
            </button>
          ) : (
            <button className="cursor-pointer">
              <h1>✖</h1>
            </button>
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
      </div>
    </div>
  );
};

export default Navbar;
