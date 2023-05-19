interface User {
  age: number;
  name: string;
}

let u: Partial<User>;

let u2: Required<User> = {
  age: 1,
  name: '11',
};

let u3: Readonly<User> = {
  age: 1,
  name: '11',
};

let u4: Exclude<'a' | 'b' | 'c', 'c'> = 'a';
let u44: Extract<'a' | 'b' | 'c', 'c'> = 'c';
let u5: Omit<{ a: string; b: string; c: string }, 'c'> = { a: 'a', b: 'b' };
let u55: Pick<{ a: string; b: string; c: string }, 'c'> = { c: 'c' };

type str = string | null | undefined;

type strNotEmpty = NonNullable<str>;

type Func = () => string;

type num = ReturnType<Func>;

function sum(a: number, b: number) {
  return a + b;
}
let a: ReturnType<typeof sum>;

class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user: InstanceType<typeof User> = {
  age: 1,
  name: '',
};
