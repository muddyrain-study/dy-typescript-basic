import { Mark, Color } from "./enums";
import { Card, Deck, Joker, NormalCard } from "./types";

export function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        color: c,
        mark: m,
        getString() {
          return this.color + this.mark;
        },
      } as Card);
    }
  }
  deck.push({
    type: "small",
    getString: () => {
      return "jo";
    },
  } as Joker);
  deck.push({
    type: "big",
    getString: () => {
      return "JO";
    },
  } as Joker);
  return deck;
}

export function printDeck(deck: Deck) {
  let result = "\n";
  deck.forEach((card, i) => {
    result += card.getString();
    if ((i + 1) % 4 === 0) {
      result += "\n";
    }
  });
  console.log(result);
}

export function findCards(color: Color) {}
