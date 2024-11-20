"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2024-12-31T23:59:59");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white uppercase tracking-wider">
      <div>
        <p className="font-semibold">Days</p>
        <p className="text-2xl font-bold">
          {String(timeLeft.days).padStart(2, "0")}
        </p>
      </div>
      <div>
        <p className="font-semibold">Hours</p>
        <p className="text-2xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </p>
      </div>
      <div>
        <p className="font-semibold">Minutes</p>
        <p className="text-2xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </p>
      </div>
      <div>
        <p className="font-semibold">Seconds</p>
        <p className="text-2xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
