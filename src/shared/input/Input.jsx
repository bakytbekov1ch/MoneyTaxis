import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Input.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/Mtaxi";

function Input() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [post, setPost] = useState({ payeer: "", number: "", price: "" });
  const [isAgreed, setIsAgreed] = useState(false);

  const handlePost = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!isAgreed) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }

    navigate("/motion");

    axios
      .post(API, post)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="input">
      <div className="input__inputs">
        <p>
          Перевести на этот кошелек: <span>P1098141289</span>
        </p>

        <input
          type="text"
          onChange={handlePost}
          name="payeer"
          placeholder="Payeer"
        />
        <input
          type="text"
          onChange={handlePost}
          name="price"
          placeholder="Сумма"
        />
        <input
          type="text"
          onChange={handlePost}
          name="number"
          placeholder="ID"
        />

        <div className="input__checkbox">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
          />
          <p>I agree to all the Terms & Conditions</p>
        </div>

        <button onClick={handleSubmit}>{t("btn")}</button>
      </div>
    </div>
  );
}

export default Input;
