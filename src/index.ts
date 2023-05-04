import { Deck } from "./deck";

const deck = new Deck();
deck.shuffle();
console.log("=========洗牌后=======");
deck.print();
const result = deck.publish();
console.log("=========发牌后=======");

console.log("=======玩家1=======");
result.player1.print();
console.log("=======玩家2=======");
result.player2.print();
console.log("=======玩家3=======");
result.player3.print();
result.player3.shuffle();
console.log("=======玩家3洗牌后=======");
result.player3.print();
console.log("=======桌面上=======");
result.left.print();
export {};
