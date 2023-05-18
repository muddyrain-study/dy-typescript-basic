import 'reflect-metadata';
import axios from 'axios';
import { Type, plainToClass } from 'class-transformer';

class User {
  id: number;
  firstName: string;
  lastName: string;
  @Type(() => Number)
  age: number;
  getName() {
    return this.firstName + ' ' + this.lastName;
  }
  isAdult() {
    return this.age > 36 && this.age < 60;
  }
}

axios
  .get(
    'https://api.myjson.online/v1/records/a646f3ff-e474-4e19-b641-e56fd3b47394'
  )
  .then(resp => resp.data.data)
  .then(users => {
    const us = plainToClass(User, users) as any as User[];
    for (const u of us) {
      console.log(typeof u.age, u.age);
    }
  });
