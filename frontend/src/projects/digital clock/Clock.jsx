import { useEffect, useState } from "react";
import "./index.css";

const Clock = () => {
  document.title = "Digital Clock";
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const datearr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const d = new Date();
    const dt = `${d.getDate()} - ${month[d.getMonth()]} - ${d.getFullYear()}`;
    setDate(dt);
    setDay(datearr[d.getDay()]);
    var t = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    setTime(t);
  }, []);
  setInterval(() => {
    const d = new Date();
    var dt = `${d.getDate()} - ${month[d.getMonth()]} - ${d.getFullYear()}`;
    setDate(dt);
    setDay(datearr[d.getDay()]);
    var t = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    setTime(t);
  }, 1000);
  return (
    <>
      <div className="clock-title">⏰ Digital Clock ⏰</div>
      <div className="clock-container">
        <div className="clock-body">
          <div className="clock-alarm"></div>
          <div className="clock-div">
            <div className="clock-head">
              <div className="clock-day-div">{day}</div>
              <div className="clock-date-div">{date}</div>
            </div>
            <div className="clock-time-div">{time}</div>
          </div>
          <div className="clock-stand-box">
            <div className="clock-stand"></div>
            <div className="clock-stand"></div>
          </div>
          <div className="clock-stand-shadow"></div>
        </div>
      </div>
    </>
  );
};

export default Clock;
