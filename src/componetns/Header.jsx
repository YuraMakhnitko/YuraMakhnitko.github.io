import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useScreenWidth } from "../hooks/useScreenWidth";
import { GiSushis } from "react-icons/gi";

import Search from "./Search";

const orderHeaderStyle = "header__contacts_order";

const Header = ({ searchChageHandle, searchValue }) => {
  const search = useLocation();

  const widowSize = useScreenWidth();

  return (
    <header className="header">
      <Link to="/" className="healer__logo-link">
        <div className="sushi-logo sushi-logo_mobile">
          <GiSushis className="sushi-icon sushi-icon_mobile" />
        </div>
      </Link>
      {search.pathname === "/order" && widowSize.width > 991.98 && (
        <div className="order__go-back-button">
          <Link to="/">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="10" fill="#FF9846" />
              <path
                d="M11.75 5.75L7.25 10.25L11.75 14.75"
                stroke="#F2F2F2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <Link to="/">
            <p className="page-card__button-text">Continue selection</p>
          </Link>
        </div>
      )}
      <div
        className={`header__contacts ${
          search.pathname === "/order" ? orderHeaderStyle : ""
        }`}
      >
        <div className="header__contacts-box">
          <p className="header__contacts-text">Our phones</p>
          <a href="#" className="header__contacts-tel">
            +000 000 00 955
          </a>
          <a href="#" className="header__contacts-tel">
            +000 000 00 955
          </a>
        </div>
        <div className="header__avalible">
          <img
            className="header__clocks"
            src="img/icons/clocks.svg"
            alt="clocks"
          />
          <p className="header__work-time">We work from 10:00 to 00:00</p>
        </div>
      </div>
      {search.pathname !== "/order" && search.pathname !== "/cart" && (
        <div className="header__center">
          <div className="header__place">
            <p className="header__place-title">City:</p>
            <p className="header__info-place">Kyiv</p>
          </div>
          <div className="header__search">
            {search.pathname !== "/" ? (
              <Search
                searchChageHandle={searchChageHandle}
                searchValue={searchValue}
              />
            ) : (
              <div className="header__lang">
                <button className="header__lang-button header__lang-button_active">
                  En
                </button>
                <button className="header__lang-button">Ua</button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
