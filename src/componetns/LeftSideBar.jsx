import { Link } from "react-router-dom";
import { GiSushis } from "react-icons/gi";

import CategoriesSideBar from "./categoriesSideBar/index.jsx";

const LeftSideBar = () => {
  return (
    <div className="shop__left-sidebar sidebar-left">
      <div className="sidebar-left__logo-block">
        <Link to={"/"} className="shop__left-sidebar__link">
          <div className="sushi-logo">
            <GiSushis className="sushi-icon" />
          </div>
          <p className="sidebar-left__title">Sushop</p>
        </Link>
        <div className="sidebar-left__bottom-line"></div>
      </div>
      <CategoriesSideBar />
    </div>
  );
};

export default LeftSideBar;
