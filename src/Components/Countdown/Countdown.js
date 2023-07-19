import React, { useEffect, useRef, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countDownDate = new Date("July 31, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <div className="timer">
        <div>
          <p className="timer-unit">{timerDays}</p>
          <p>
            <small>Days</small>
          </p>
        </div>
        <span>:</span>
        <div>
          <p className="timer-unit">{timerHours}</p>
          <p>
            <small>Hrs</small>
          </p>
        </div>
        <span>:</span>
        <div>
          <p className="timer-unit">{timerMinutes}</p>
          <p>
            <small>Min</small>
          </p>
        </div>
        <span>:</span>
        <div>
          <p className="timer-unit">{timerSeconds}</p>
          <p>
            <small>Sec</small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
