import React from "react";

export default function Heading() {
  const hours = new Date().getHours();
  let wish = "";

  if (hours >= 0 && hours < 12) {
    wish = "Morning";
  } else if (hours >= 12 && hours < 17) {
    wish = "Afternoon";
  } else {
    wish = "Night";
  }
  let source = wish + ".png";

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center gap-3">
        <span className="text-4xl whitespace-nowrap">Good {wish}</span>
        <img
          src={source}
          alt={wish}
          className="h-12 w-12 object-contain" // Increased size and added object-contain
        />
      </div>
    </div>
  );
}
