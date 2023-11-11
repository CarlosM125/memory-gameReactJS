// Board.js
import React, { useState, useEffect } from "react";
import Card from "./card";

function Board() {
  function shuffleCards() {
    const colors = [
      "red",
      "green",
      "blue",
      "yellow",
      "red",
      "green",
      "blue",
      "yellow",
    ];
    return colors
      .sort(() => Math.random() - 0.5)
      .map((color, i) => ({ id: i, color, isFlipped: false }));
  }

  const [cards, setCards] = useState(shuffleCards());
  const [isGameOver, setIsGameOver] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isChecking, setIsChecking] = useState(false);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "50px",
  };

  function handleClick(id) {
    if (isChecking) return;
    const card = cards.find((card) => card.id === id);
    setFlippedCards([...flippedCards, card]);
    setCards(
      cards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );
  }
  function resetGame() {
    setCards(shuffleCards());
    setIsGameOver(false);
    setFlippedCards([]);
    setIsChecking(false);
  }
  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsChecking(true);
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.color !== secondCard.color) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.id === firstCard.id || card.id === secondCard.id) {
                return { ...card, isFlipped: false };
              }
              return card;
            })
          );
          setIsChecking(false);
        }, 1000);
      } else {
        setIsChecking(false);
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);
  useEffect(() => {
    setIsGameOver(cards.every((card) => card.isFlipped));
  }, [cards]);
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.color !== secondCard.color) {
        setTimeout(() => {
          setCards(
            cards.map((card) => {
              if (card.id === firstCard.id || card.id === secondCard.id) {
                return { ...card, isFlipped: false };
              }
              return card;
            })
          );
        }, 1000);
      }
      setFlippedCards([]);
    }
  }, [flippedCards]);
  return (
    <div style={style}>
      {cards.map((card) => (
        <Card key={card.id} {...card} handleClick={handleClick} />
      ))}
      {isGameOver && (
        <div style={{ fontSize: "2em", marginTop: "20px" }}>
          Congratulations, you won!
        </div>
      )}
      <button
        onClick={resetGame}
        style={{ fontSize: "1em", marginTop: "50px", alignSelf: "center" }}
      >
        Reset Game
      </button>
    </div>
  );
}

export default Board;
