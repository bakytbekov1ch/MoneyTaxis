import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n } = useTranslation();

  const changelang = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/" className="link">
            MTAXI
          </Link>
        </div>

        <div className="header__translate">
          <select onChange={changelang}>
            <option value="ru">RUB</option>
            <option value="en">ENG</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
