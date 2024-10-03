import React from "react";
import { ProductUrl } from "../../widgets/data/ProductData";
import { MdOutlineDeleteSweep } from "react-icons/md";

import "./About.scss";

function About() {
  return (
    <div className="about">
      {ProductUrl.map((item) => (
        <div key={item.id} className="about__data">
          <img src={item.image} alt="" />
          <MdOutlineDeleteSweep className="about__icon"/>

          <div className="about__text">
            <h1>{item.name}</h1>
            <h2>MIN: {item.price}₽</h2>

            <div className="about__timer">
              <h3>{item.timer}час</h3>
              <h3>{item.number}%</h3>
            </div>

            <button>36:59:59</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
