import { Color, Mark } from "./enums";
import { createDeck, printDeck } from "./funcs";
import { Deck } from "./types";

const deck = createDeck();

printDeck(deck);

export {};
