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
            });
        }
    }
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = "\n";
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        result += str + "\t";
        if ((i + 1) % 4 === 0) {
            result += "\n";
        }
    });
    console.log(result);
}
exports.printDeck = printDeck;
function findCards(color) { }
exports.findCards = findCards;
