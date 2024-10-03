import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Hero.scss";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero__buttons">
        <button>
          <Link to="/" className="link">
            {t("home")}
          </Link>
        </button>
        <button>
          <Link to="/about" className="link">
            {t("about")}
          </Link>
        </button>
        <button style={{ background: "none" }}>
          <Link to="/contact" className="link">
            {t("contact")}
          </Link>
        </button>
      </div>

      <div className="hero__input">
        <p>https://web.telegram.org/k/#@Hellomyworld78</p>
      </div>
    </div>
  );
}

export default Hero;
