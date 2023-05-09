Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = exports.Monkey = exports.Tiger = exports.Lion = exports.Animal = void 0;
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`各位观众，大家好，我是${this.type},我叫${this.name},今年${this.age}岁`);
    }
}
exports.Animal = Animal;
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狮子";
    }
    singleFire() {
        console.log(`${this.name}穿越了单火圈`);
    }
    doubleFire() {
        console.log(`${this.name}穿越了双火圈`);
    }
}
exports.Lion = Lion;
class Tiger extends Animal {
    constructor() {
        super(...arguments);
        this.type = "老虎";
    }
    singleFire() {
        console.log(`${this.name}穿越了单火圈`);
    }
    doubleFire() {
        console.log(`${this.name}穿越了双火圈`);
    }
}
exports.Tiger = Tiger;
class Monkey extends Animal {
    constructor() {
        super(...arguments);
        this.type = "猴子";
    }
    dumuqiao() {
        console.log(`${this.name}表演走独木桥`);
    }
    zougangsi() {
        console.log(`${this.name}表演走钢丝`);
    }
}
exports.Monkey = Monkey;
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.type = "狗";
    }
    suanshuti() {
        console.log(`${this.name}表演做算术题`);
    }
    dance() {
        console.log(`${this.name}表演跳舞`);
    }
}
exports.Dog = Dog;
const animals = [
    new Lion("王富贵", 12),
    new Tiger("坤坤", 21),
    new Monkey("小六", 1),
    new Dog("旺财", 3),
    new Dog("狗剩", 5),
];
function hasFireShow(animal) {
    if (animal.singleFire &&
        animal.doubleFire) {
        return true;
    }
    else {
        return false;
    }
}
animals.forEach((item) => {
    if (hasFireShow(item)) {
        item.singleFire();
        item.doubleFire();
    }
});
