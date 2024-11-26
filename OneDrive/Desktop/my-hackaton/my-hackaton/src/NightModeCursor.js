import React, { useState, useEffect } from "react";

export default function NightModeCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
        transform: "translate(-50%, -50%)",
      }}
      className="fixed w-40 h-40 rounded-full bg-gradient-to-br from-blue-600 via-white to-blue-700 opacity-25 blur-2xl pointer-events-none"
    />
  );
}
