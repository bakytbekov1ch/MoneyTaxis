import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Input.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/Mtaxi";

function Input() {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    payeer: "",
    image: "",
    price: "",
    category: "",
    card: "",
  });
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

    navigate("/success");

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
          Перевести на этот кошелек: <br /> О деньги:
          <span> +996 507 111 669</span>
        </p>

        <select name="card" onChange={handlePost} value={post.card}>
          <option value="">Выберите карта</option>
          <option value="Деньги">О деньги</option>
          <option value="Мбанк">Mbank</option>
        </select>

        <input
          type="text"
          onChange={handlePost}
          name="payeer"
          placeholder="О денги/Mbank"
        />
        <input
          type="text"
          onChange={handlePost}
          name="price"
          placeholder="Сумма"
        />

        <select name="category" onChange={handlePost} value={post.category}>
          <option value="">Выберите категорию</option>
          <option value="Эконом">Курер</option>
          <option value="Эконом">Эконом</option>
          <option value="Комфорт">Комфорт</option>
          <option value="Бизнес">Бизнес</option>
        </select>

        <label className="input__image-label">Загрузите чек</label>
        <input
          type="file"
          onChange={handlePost}
          name="image"
          className="input__image"
        />

        <div className="input__checkbox">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={handleCheckboxChange}
          />
          <p>Я согласен.</p>
        </div>

        <button onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  );
}

export default Input;
