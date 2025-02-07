import { useEffect, useRef } from "react";
import { useStore } from "../store/useStore";

const CELL_SIZE = 30;
const ROWS = 20;
const COLS = 20;

const GridCanvas = () => {
  const canvasRef = useRef(null);
  const { grid, start, end, setStart, setEnd, setWall } = useStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          ctx.fillStyle = grid[row][col] || "white";
          ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }

      
      if (start) {
        ctx.fillStyle = "green";
        ctx.fillRect(start.col * CELL_SIZE, start.row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      if (end) {
        ctx.fillStyle = "red";
        ctx.fillRect(end.col * CELL_SIZE, end.row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    };

    drawGrid();
  }, [grid, start, end]);

  const handleClick = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const col = Math.floor((event.clientX - rect.left) / CELL_SIZE);
    const row = Math.floor((event.clientY - rect.top) / CELL_SIZE);

    console.log(`Clicked on: row ${row}, col ${col}`);

    if (!start) {
      setStart(row, col);
    } else if (!end) {
      setEnd(row, col);
    } else {
      setWall(row, col);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={COLS * CELL_SIZE}
      height={ROWS * CELL_SIZE}
      onClick={handleClick}
      style={{ border: "2px solid black", marginTop: "20px", cursor: "pointer" }}
    />
  );
};

export default GridCanvas;
