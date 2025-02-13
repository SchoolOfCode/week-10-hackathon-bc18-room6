"use client";

import { useState, useEffect } from "react";
import Card from "./components/Card";
import { shuffleArray } from "./utils/shuffleArray";

const initialCards = [
  { id: 1, content: "🐶" },
  { id: 2, content: "🐱" },
  { id: 3, content: "🐰" },
  { id: 4, content: "🦊" },
  { id: 5, content: "🐻" },
  { id: 6, content: "🐼" },
  { id: 7, content: "🐨" },
  { id: 8, content: "🐯" },
];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [hintMessage, setHintMessage] = useState("");

  useEffect(() => {
    resetGame();
  }, []);

  const handleCardClick = (clickedIndex) => {
    if (
      flippedIndexes.length === 2 ||
      flippedIndexes.includes(clickedIndex) ||
      matchedPairs.includes(cards[clickedIndex].id)
    ) {
      return;
    }

    if (flippedIndexes.length === 0) {
      setHintMessage("");
    }

    const newFlippedIndexes = [...flippedIndexes, clickedIndex];
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      setMoves(moves + 1);

      const [firstIndex, secondIndex] = newFlippedIndexes;
      if (cards[firstIndex].content === cards[secondIndex].content) {
        setMatchedPairs([
          ...matchedPairs,
          cards[firstIndex].id,
          cards[secondIndex].id,
        ]);
        setScore(score + 10);
        setFlippedIndexes([]);
        setHintMessage("");
      } else {
        setTimeout(() => setFlippedIndexes([]), 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(shuffleArray([...initialCards, ...initialCards]));
    setFlippedIndexes([]);
    setMatchedPairs([]);
    setMoves(0);
    setScore(0);
    setHintMessage("");
  };

  const showHint = () => {
    if (flippedIndexes.length === 1) {
      const flippedCard = cards[flippedIndexes[0]];
      const hintIndex = cards.findIndex(
        (card, index) =>
          card.content === flippedCard.content && index !== flippedIndexes[0]
      );
      const row = Math.floor(hintIndex / 4) + 1;
      setHintMessage(`The matching card is in row ${row}.`);
    } else {
      setHintMessage("Flip a card to get a hint.");
    }
  };

  const isGameOver = matchedPairs.length === cards.length;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Memory Game</h1>
      <div className="mb-4 text-center">
        <p className="text-xl">
          Moves: {moves} | Score: {score}
        </p>
      </div>
      <div className="mb-4 text-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={showHint}
        >
          Get Hint
        </button>
        <div className="h-8 flex items-center justify-center">
          {hintMessage && <p className="text-lg mt-2">{hintMessage}</p>}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            isFlipped={
              flippedIndexes.includes(index) || matchedPairs.includes(card.id)
            }
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      {isGameOver && (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Congratulations! You won with a score of {score} in {moves} moves!
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
