import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Input.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/Mtaxi";

function Input() {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    payeer: "",
    image: null, // Adjusted to handle a File object
    price: "",
    category: "",
    card: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handlePost = (event) => {
    const { name, value, files } = event.target;
    if (name === "image" && files.length > 0) {
      setPost({ ...post, [name]: files[0] }); // Store the file object
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }

    navigate("/success");

    // Creating a FormData object to handle file uploads
    const formData = new FormData();
    for (const key in post) {
      formData.append(key, post[key]);
    }

    try {
      const res = await axios.post(API, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

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
          placeholder="О деньги/Mbank"
        />
        <input
          type="text"
          onChange={handlePost}
          name="price"
          placeholder="Сумма"
        />

        <select name="category" onChange={handlePost} value={post.category}>
          <option value="">Выберите категорию</option>
          <option value="Курер">Курер</option>
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
