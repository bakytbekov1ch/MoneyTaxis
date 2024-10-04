import React from "react";

import "./Input.scss";
import { Link } from "react-router-dom";

function Input() {
  return (
    <div className="input">
      <div className="input__inputs">
        <p>
          Перевести на этот кошелек: <span>P1098141289</span>
        </p>

        <input type="text" placeholder="Payeer" />
        <input type="text" placeholder="ID" />

        <div className="input__checkbox">
          <input type="checkbox" />
          <p>I agree to all the Terms & Conditions</p>
        </div>

        <button>
          <Link to="/success" style={{ color: "white" }}>
            Submit
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Input;
