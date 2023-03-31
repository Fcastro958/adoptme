import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt me</h1>
    <Pet name="Luna" animal="dog" breed="Havense" />
    <Pet name="pepper" animal="cat" breed="mixed" />
    <Pet name="doink" animal="bird" breed="cockatiel" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
