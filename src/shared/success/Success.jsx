import React from "react";
import success from "../../assets/images/success.png";

import "./Success.scss";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success">
      <div className="success__content">
        <img src={success} alt="" />
        <p>
          Ваш запрос отправлен. По истечении времени деньги будут положены в ваш
          кошелек. В случае ошибки <mark>kalmamat0v</mark> обратитесь по этому
          адресу
        </p>
        <button>
          <Link to="/" style={{ color: "black" }}>
            BACK TO HOME
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Success;
