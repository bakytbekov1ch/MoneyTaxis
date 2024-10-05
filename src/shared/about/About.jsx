import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/createBasket/CreateBasket";
import "./About.scss";
import { Link } from "react-router-dom";

function About() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id));
  };

  if (!items || items.length === 0) {
    return (
      <div className="about__title">
        Ваш исория пустой{" "}
        <Link to="/">
          <button>BACK TO HOME</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="about">
      {items.map((item) => (
        <div key={item.id} className="about__data">
          <img src={item.image} alt={item.name} />
          <MdOutlineDeleteSweep
            className="about__icon"
            onClick={() => handleRemoveFromCart(item.id)}
          />
          <button>36:59:59</button>
        </div>
      ))}
    </div>
  );
}

export default About;
