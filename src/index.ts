import 'reflect-metadata';

class User {
  @Reflect.metadata('a', 'b')
  login: string;

  @Reflect.metadata('a', 'b')
  age: number;

  save() {
    console.log('save');
  }
}
