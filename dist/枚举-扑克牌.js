Object.defineProperty(exports, "__esModule", { value: true });
var Color;
(function (Color) {
    Color["heart"] = "\u2665";
    Color["spade"] = "\u2660";
    Color["club"] = "\u2663";
    Color["diamond"] = "\u2666";
})(Color || (Color = {}));
var Mark;
(function (Mark) {
    Mark["A"] = "A";
    Mark["two"] = "2";
    Mark["three"] = "3";
    Mark["four"] = "4";
    Mark["five"] = "5";
    Mark["six"] = "6";
    Mark["seven"] = "7";
    Mark["eight"] = "8";
    Mark["nine"] = "9";
    Mark["ten"] = "10";
    Mark["eleven"] = "J";
    Mark["twelve"] = "Q";
    Mark["king"] = "K";
})(Mark || (Mark = {}));
function createDeck() {
    const deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
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
function findCards(color) { }
const deck = createDeck();
printDeck(deck);
