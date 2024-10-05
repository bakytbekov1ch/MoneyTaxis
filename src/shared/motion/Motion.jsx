import React from "react";
import { ProductUrl } from "../../widgets/data/ProductData";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/createBasket/CreateBasket";
import "./Motion.scss";

function Motion() {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="motion">
      {ProductUrl.map((item) => (
        <div key={item.id} className="motion__data">
          <img src={item.image} alt={item.name} />
          <Link to="/success" className="link">
            <button onClick={() => handleAddToCart(item)}>{item.name}</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Motion;
