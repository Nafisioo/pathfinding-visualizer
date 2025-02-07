import { useStore } from "./useStore";

const Controls = () => {
  const { clearGrid } = useStore();

  return (
    <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
      <button onClick={clearGrid} style={buttonStyle}>Clear Grid</button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 15px",
  background: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Controls;
