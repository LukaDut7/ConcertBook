"use client";

import React, { useEffect, useRef } from "react";

const SeatingChart = ({ seatPrices }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the stage
    ctx.fillStyle = "gray";
    ctx.fillRect(200, 20, 200, 40);
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText("STAGE", 280, 45);

    // Draw seating sections dynamically
    seatPrices.forEach((seat, index) => {
      const { x, y, price } = seat;

      // Draw circle for seats
      ctx.fillStyle = "#d3c9f1"; // Light purple for seats
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2); // x, y, radius
      ctx.fill();

      // Draw price text
      ctx.fillStyle = "black";
      ctx.font = "14px Arial";
      ctx.fillText(price, x - 20, y + 5);
    });
  }, [seatPrices]);

  return (
    <canvas
      ref={canvasRef}
      width="600"
      height="400"
      style={{ border: "1px solid #ddd" }}
    ></canvas>
  );
};

export default SeatingChart;
