import React, { useState, useEffect } from "react";
import { TimeWrapper } from "./Body.styles";
import { BiRefresh } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <TimeWrapper>
      <section className="refresh-box">
        <BiRefresh id="icon" />
      </section>
      <h1 id="time">{currentTime.toLocaleTimeString([], options)}</h1>
      <section className="menu-box">
        <BsThreeDots id="icon" />
      </section>
    </TimeWrapper>
  );
};

export default Time;
