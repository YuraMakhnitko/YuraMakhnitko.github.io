import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import Search from './Search';

const orderHeaderStyle = 'header__contacts_order';

const Header = ({ searchChageHandle, searchValue }) => {
  const search = useLocation();

  return (
    <header className="header">
      <Link to="/" className="healer__logo-link">
        <img
          className="header__logo"
          src="img/leftsidebar/logo.svg"
          alt="logo"
        />
      </Link>
      <div
        className={`header__contacts ${
          search.pathname === '/order' ? orderHeaderStyle : ''
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
      {search.pathname !== '/order' && (
        <div className="header__center">
          <div className="header__place">
            <p className="header__place-title">City:</p>
            <p className="header__info-place">Kyiv</p>
          </div>
          <div className="header__search">
            <a href="#" className="header__link">
              Reviews
            </a>
            <a href="#" className="header__link">
              Sipping and payment
            </a>
            <Search
              searchChageHandle={searchChageHandle}
              searchValue={searchValue}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
