import { useEffect, useRef, useState } from "react";

const GRID_SIZE = 20;
const CELL_SIZE = 30;

export default function PathfindingVisualizer() {
  const canvasRef = useRef(null);
  const [grid, setGrid] = useState(
    Array(GRID_SIZE)
      .fill()
      .map(() => Array(GRID_SIZE).fill(0))
  );
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    drawGrid();
  }, [grid]);

  const drawGrid = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col < GRID_SIZE; col++) {
        ctx.fillStyle = grid[row][col] === 1 ? "black" : "white";
        if (start && start.row === row && start.col === col) ctx.fillStyle = "green";
        if (end && end.row === row && end.col === col) ctx.fillStyle = "red";
        
        ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  };

  const handleCanvasClick = (event) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const col = Math.floor((event.clientX - rect.left) / CELL_SIZE);
    const row = Math.floor((event.clientY - rect.top) / CELL_SIZE);
    
    if (!start) {
      setStart({ row, col });
    } else if (!end) {
      setEnd({ row, col });
    } else {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((rowArr) => [...rowArr]);
        newGrid[row][col] = newGrid[row][col] === 0 ? 1 : 0;
        return newGrid;
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-xl font-bold">Pathfinding Visualizer</h1>
      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        className="border border-gray-700 mt-4"
        onClick={handleCanvasClick}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setGrid(Array(GRID_SIZE).fill().map(() => Array(GRID_SIZE).fill(0)))}
      >
        Clear Grid
      </button>
    </div>
  );
}
