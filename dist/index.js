Object.defineProperty(exports, "__esModule", { value: true });
const funcs_1 = require("./funcs");
const deck = (0, funcs_1.createDeck)();
(0, funcs_1.printDeck)(deck);
class User {
    constructor(name, age) {
        this.gender = "男";
        this.name = name;
        this.age = age;
    }
}
const u = new User("John", 30);
