interface User {
  loginId: string;
  loginWd: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
}

function printUserProperty(user: User, prop: keyof User) {
  console.log(user[prop]);
}

type Obj<O> = {
  readonly [key in keyof O]: O[key];
};

const u: Obj<User> = {
  loginId: 'aa',
  loginWd: 'b',
  age: 11,
};
const a: Obj<Article> = {
  title: '',
  content: '',
};
