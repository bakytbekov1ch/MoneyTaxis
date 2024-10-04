import React from "react";
import { ProductUrl } from "../../widgets/data/ProductData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Product.scss";

function Product() {
  const { t } = useTranslation();

  return (
    <div className="product">
      {ProductUrl.map((item) => (
        <div key={item.id} className="product__data">
          <img src={item.image} alt="" />

          <div className="product__text">
            <h1>{item.name}</h1>
            <h2>MIN: {item.price}₽</h2>

            <div className="product__timer">
              <h3>{item.timer}час</h3>
              <h3>{item.number}%</h3>
            </div>

            <button>
              <Link to="/input" className="link">
                {t("btn")}
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
