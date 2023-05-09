const methodName = "sayHello";
class User {
  constructor(public name: string, public age: number) {}
  [methodName]() {}
}

const u = new User("zhangsan", 18);

u[methodName]();

console.log(u["pid"]);

u.name;
