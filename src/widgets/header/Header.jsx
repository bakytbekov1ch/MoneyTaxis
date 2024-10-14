import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/" className="link">
            MoneyTaxi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
