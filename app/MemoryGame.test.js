import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MemoryGame from "./page.jsx";
import React from "react";
import "@testing-library/jest-dom";

describe("MemoryGame Component", () => {
  it("should render the MemoryGame component", () => {
    render(<MemoryGame />);
    expect(screen.getByText("Memory Game")).toBeInTheDocument(); // Adjust this based on your component's content
  });
});

//TEST 1 = PASS
// describe("MemoryGame Component", () => {
//   it("should render the MemoryGame component", () => {
//     render(<MemoryGame />);
//     expect(screen.getByText("Memory Game")).toBeInTheDocument(); // Adjust this based on your component's content
//   });

//   //TEST 2 = PASS
//   it("initializes with correct number of cards", () => {
//     render(<MemoryGame />);
//     const cards = screen.getAllByRole("button");
//     expect(cards.length).toBe(17);
//   });

//   //TEST 3 = PASS
//   it("flips a card when clicked", () => {
//     render(<MemoryGame />);
//     const cards = screen.getAllByRole("button");
//     fireEvent.click(cards[0]);
//     expect(cards[0]).toHaveClass(
//       "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//     );
//   });

//   //TEST 4
//   it("matches two cards with the same content", () => {
//     render(<MemoryGame />);
//     const cards = screen.getAllByRole("button");
//     fireEvent.click(cards[0]);
//     fireEvent.click(cards[1]);
//     // Assuming the first two cards are a match in the shuffled array
//     expect(cards[0]).toHaveClass("matched"); // Assuming 'matched' class is added when a card is matched
//     expect(cards[1]).toHaveClass("matched");
//   });
// });

// // test("matches two cards with the same content", () => {
// //   render(<MemoryGame />)
// //   const cards = screen.getAllByRole("button")
// //   fireEvent.click(cards[0])
// //   fireEvent.click(cards[1])
// //   // Assuming the first two cards are a match in the shuffled array
// //   expect(cards[0]).toHaveClass("matched") // Assuming 'matched' class is added when a card is matched
// //   expect(cards[1]).toHaveClass("matched")
// // })
