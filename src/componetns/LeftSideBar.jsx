import { Link } from "react-router-dom";

import CategoriesSideBar from "./categoriesSideBar/index.jsx";

import logo from "../assets/leftsidebar/logo.svg";

const LeftSideBar = () => {
  return (
    <div className="shop__left-sidebar sidebar-left">
      <div className="sidebar-left__logo-block">
        <Link to={"/"} className="shop__left-sidebar__link">
          <img src={logo} alt="logo" />
          <p className="sidebar-left__title">Romsem</p>
        </Link>
        <div className="sidebar-left__bottom-line"></div>
      </div>
      <CategoriesSideBar />
    </div>
  );
};

export default LeftSideBar;
