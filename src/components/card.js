// Card.js
import React from "react";

function Card({ id, color, isFlipped, handleClick }) {
  const style = {
    backgroundColor: isFlipped ? color : "gray",
    height: "100px",
    width: "100px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em",
    color: "white",
    borderRadius: "12px",
  };

  return (
    <div onClick={() => handleClick(id)} style={style}>
      {isFlipped ? color : ""}
    </div>
  );
}

export default Card;
