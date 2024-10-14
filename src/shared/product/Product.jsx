import React from "react";
import { ProductUrl } from "../../widgets/data/ProductData";
import { Link } from "react-router-dom";

import "./Product.scss";

function Product() {
  return (
    <div className="product">
      {ProductUrl.map((item) => (
        <div key={item.id} className="product__data">
          <img src={item.image} alt="" />

          <div className="product__text">
            <h1>{item.name}</h1>
            <h2>МИН: {item.price}₽</h2>

            <div className="product__timer">
              <h3>
                {item.timer}
                час
              </h3>
              <h3>{item.number}%</h3>
            </div>

            <Link to="/input" className="link">
              <button>Купить</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
