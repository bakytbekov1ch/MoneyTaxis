import React from "react";
import { ButtonUrl } from "../../widgets/data/ButtonData";

import "./Button.scss";

function Button() {
  return (
    <div className="button">
      {ButtonUrl.map((item) => (
        <div key={item.id} className="button__content">
          <h1>{item.number}</h1>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Button;
