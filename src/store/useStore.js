import { create } from "zustand";

const ROWS = 20;
const COLS = 20;

export const useStore = create((set) => ({
  grid: Array.from({ length: ROWS }, () => Array(COLS).fill("#fff")),
  start: null,
  end: null,

  setStart: (row, col) => set((state) => {
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return state; 
    console.log("Start set at:", row, col);
    
    const newGrid = state.grid.map(rowArr => [...rowArr]); 
    newGrid[row][col] = "green";
    
    return { start: { row, col }, grid: newGrid };
  }),

  setEnd: (row, col) => set((state) => {
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return state;
    console.log("End set at:", row, col);
    
    const newGrid = state.grid.map(rowArr => [...rowArr]);
    newGrid[row][col] = "red";
    
    return { end: { row, col }, grid: newGrid };
  }),

  setWall: (row, col) => set((state) => {
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return state;
    console.log("Wall set at:", row, col);

    const newGrid = state.grid.map(rowArr => [...rowArr]);
    newGrid[row][col] = "black";
    
    return { grid: newGrid };
  }),

  clearGrid: () => {
    console.log("Grid cleared");
    set({
      grid: Array.from({ length: ROWS }, () => Array(COLS).fill("#fff")),
      start: null,
      end: null
    });
  },
}));


