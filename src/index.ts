interface U {
  name: string;
  sayHello(this: U): void;
}
const user: U = {
  name: "zhangsan",
  sayHello() {
    console.log(this.name);
  },
};

const say = user.sayHello;
