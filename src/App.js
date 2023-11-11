// App.js
import React from "react";
import Board from "./components/board";

function App() {
  const style = {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  };

  return (
    <div className="App" style={style}>
      <Board />
    </div>
  );
}

export default App;
