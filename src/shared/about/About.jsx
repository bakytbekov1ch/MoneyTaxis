import React, { useEffect, useRef, useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/createBasket/CreateBasket";
import "./About.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [time, setTime] = useState(() => {
    // Retrieve the timer value from localStorage, or default to 0
    const savedTime = localStorage.getItem("timer");
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  const [running, setRunning] = useState(true);
  const timer = useRef();

  useEffect(() => {
    if (running && time < 3600) {
      // Set a limit, e.g., 1 hour (3600 seconds)
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    } else if (time >= 3600) {
      setRunning(false);
    }

    return () => clearInterval(timer.current); // Clean up the interval on component unmount
  }, [running, time]);

  // Save the timer to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("timer", time);
  }, [time]);

  const handleRemoveFromCart = (id) => {
    dispatch(remove(id));
  };

  if (!items || items.length === 0) {
    return (
      <div className="about__title">
        {t("history")}
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
          <button>
            {running ? format(time) : "Успешно"}
            {/* Display "Успешно" when the timer ends */}
          </button>
        </div>
      ))}
    </div>
  );
}

export default About;

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 36);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
