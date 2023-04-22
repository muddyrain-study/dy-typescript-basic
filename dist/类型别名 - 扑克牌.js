Object.defineProperty(exports, "__esModule", { value: true });
function createDeck() {
    const deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color: "♥",
            mark: i,
        });
        deck.push({
            color: "♠",
            mark: i,
        });
        deck.push({
            color: "♦",
            mark: i,
        });
        deck.push({
            color: "♣",
            mark: i,
        });
    }
    return deck;
}
function printDeck(deck) {
    let result = "\n";
    deck.forEach((card, i) => {
        let str = card.color;
        if (card.mark <= 10) {
            str += card.mark;
        }
        else if (card.mark === 11) {
            str += "J";
        }
        else if (card.mark === 12) {
            str += "Q";
        }
        else if (card.mark === 13) {
            str += "K";
        }
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
