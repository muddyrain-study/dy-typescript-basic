Object.defineProperty(exports, "__esModule", { value: true });
exports.findCards = exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
function createDeck() {
    const deck = [];
    const marks = Object.values(enums_1.Mark);
    const colors = Object.values(enums_1.Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                },
            });
        }
    }
    deck.push({
        type: "small",
        getString: () => {
            return "jo";
        },
    });
    deck.push({
        type: "big",
        getString: () => {
            return "JO";
        },
    });
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = "\n";
    deck.forEach((card, i) => {
        result += card.getString();
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}
exports.printDeck = printDeck;
function findCards(color) { }
exports.findCards = findCards;
