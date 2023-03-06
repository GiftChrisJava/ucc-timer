import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [isCountingUp, setIsCountingUp] = useState(false);
  const [timerUp, setTimerUp] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        if (!isCountingUp && hours === 0 && minutes === 0 && seconds === 0) {
          // setTimerOn(false);
          // clearInterval(interval);
          // setTimerUp(true);
          setIsCountingUp(true); // start counting up
        }
        if (isCountingUp) {
          setSeconds((prev) => prev + 1);
          if (seconds === 59) {
            setMinutes((prev) => prev + 1);
            setSeconds(0);
          }
          if (minutes === 60) {
            setHours((prev) => prev + 1);
            setMinutes(0);
          }
        } else {
          if (minutes === 0 && seconds === 0) {
            setHours((prev) => prev - 1);
            setMinutes(59);
            setSeconds(59);
          } else if (seconds === 0) {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          } else {
            setSeconds((prev) => prev - 1);
          }
        }
      }, 990);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn, hours, minutes, seconds, isCountingUp]);

  // start the timer
  const startTimer = () => {
    setTimerOn(true);
  };

  // stop the timer
  const stopTimer = () => {
    setTimerOn(false);
  };

  // reset the countdown
  const resertTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimerOn(false);
    setIsCountingUp(false);
  };
  // when i look into your holyness

  const handleHourChange = (event) => {
    setHours(parseInt(event.target.value));
  };

  const handleMinutesChange = (event) => {
    setMinutes(parseInt(event.target.value));
  };

  const handleSecondsChange = (event) => {
    setSeconds(parseInt(event.target.value));
  };

  const labelStyle = {
    // backgroundColor: "red",
    fontSize: "18rem",
    color: isCountingUp ? "red" : "white",
  };
  return (
    <>
      <Head>
        <title>UCC COUNTDOWN TIMER</title>
      </Head>
      <div className="container">
        <div className="timerDisplay">
          <h2 style={labelStyle}>
            {hours.toString().padStart(2, "0")}:
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </h2>
        </div>

        <div className="inputs_container">
          <label htmlFor="hours">Hours :</label>
          <input
            type="number"
            className="input"
            id="hours"
            name="hours"
            value={hours}
            onChange={handleHourChange}
          />

          <label htmlFor="minutes">Minutes :</label>
          <input
            type="number"
            id="minutes"
            className="input"
            name="minutes"
            value={minutes}
            onChange={handleMinutesChange}
          />

          <label htmlFor="seconds">Seconds :</label>
          <input
            type="number"
            className="input"
            id="seconds"
            name="seconds"
            value={seconds}
            onChange={handleSecondsChange}
          />
        </div>

        <div className="buttons">
          {!timerOn && <button onClick={startTimer}>Start</button>}
          {!timerOn && <button onClick={stopTimer}>Stop</button>}
          <button onClick={resertTimer}>Reset</button>
        </div>
      </div>
    </>
  );
}
