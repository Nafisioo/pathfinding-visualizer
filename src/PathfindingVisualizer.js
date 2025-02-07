import React, { useEffect, useRef } from "react";

const GRID_SIZE = 20;
const CELL_SIZE = 30;

const PathfindingVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Draw the grid
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        ctx.strokeStyle = "#ddd";
        ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={GRID_SIZE * CELL_SIZE}
      height={GRID_SIZE * CELL_SIZE}
      style={{ border: "1px solid black", marginTop: "10px" }}
    ></canvas>
  );
};

export default PathfindingVisualizer;
