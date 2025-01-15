"use client";

import React, { useState, useEffect } from "react";

interface CalendarProps {
  initialTime?: Date;
}

const Calendar: React.FC<CalendarProps> = ({ initialTime = new Date() }) => {
  const [time, setTime] = useState(initialTime);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
  const hourAngle = (((hours % 12) + minutes / 60) / 12) * 360;

  const timeString = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const dateString = time.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-full w-full rounded-lg p-4 flex flex-col items-center justify-between">
      {/* Time Display */}
      <div className="text-md font-medium text-white/90">{timeString}</div>

      {/* Clock */}
      <div className="relative w-24 h-24 my-2">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border border-zinc-800"></div>

        {/* Inner circle */}
        <div className="absolute inset-1 rounded-full bg-zinc-950">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[4px] bg-zinc-700"
              style={{
                transform: `rotate(${i * 30}deg) translateY(5%)`,
                left: "50%",
                transformOrigin: "50% 100%",
              }}
            />
          ))}

          {/* Clock hands */}
          <div
            className="absolute w-[1.5px] h-[25%] bg-white/80 left-1/2 bottom-1/2 rounded-full"
            style={{
              transform: `rotate(${hourAngle}deg)`,
              transformOrigin: "bottom",
            }}
          />
          <div
            className="absolute w-[1px] h-[35%] bg-white/70 left-1/2 bottom-1/2 rounded-full"
            style={{
              transform: `rotate(${minuteAngle}deg)`,
              transformOrigin: "bottom",
            }}
          />
          <div
            className="absolute w-[0.5px] h-[40%] bg-zinc-400 left-1/2 bottom-1/2 rounded-full"
            style={{
              transform: `rotate(${secondAngle}deg)`,
              transformOrigin: "bottom",
            }}
          />
          <div className="absolute w-[3px] h-[3px] bg-white/90 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Date Display */}
      <div className="text-lg text-white0">{dateString}</div>
    </div>
  );
};

export default Calendar;
