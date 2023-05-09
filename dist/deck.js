Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const enums_1 = require("./enums");
class Deck {
    constructor(cards) {
        this.cards = [];
        if (cards) {
            this.cards = cards;
        }
        else {
            this.init();
        }
    }
    init() {
        const marks = Object.values(enums_1.Mark);
        const colors = Object.values(enums_1.Color);
        for (const m of marks) {
            for (const c of colors) {
                this.cards.push({
                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark;
                    },
                });
            }
        }
        this.cards.push({
            type: "small",
            getString: () => {
                return "jo";
            },
        });
        this.cards.push({
            type: "big",
            getString: () => {
                return "JO";
            },
        });
    }
    print() {
        let result = "\n";
        this.cards.forEach((card, i) => {
            result += card.getString() + " ";
            if ((i + 1) % 4 === 0) {
                result += "\n";
            }
        });
        console.log(result);
    }
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    publish() {
        let player1, player2, player3, left;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this.cards);
        return {
            player1,
            player2,
            player3,
            left,
        };
    }
    takeCards(n) {
        const cards = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift());
        }
        return new Deck(cards);
    }
}
exports.Deck = Deck;
