import GridCanvas from "./components/GridCanvas";
import Controls from "./store/Controls";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Pathfinding Visualizer</h1>
      <Controls />
      <GridCanvas />
    </div>
  );
}

export default App;
