"use client";
import React from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const endingDate = new Date("2025-07-21");
  return (
    <div className="text-5xl font-bold text-yellow-300">
      <Countdown date={endingDate} />
    </div>
  );
};

export default CountDown;
