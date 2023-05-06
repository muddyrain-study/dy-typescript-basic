import { Dictionary } from "./dictionary";

const dic = new Dictionary<string, number>();

dic.set("a", 1);
dic.set("b", 2);
dic.set("a", 11);
dic.set("c", 33);
console.log(dic.size);
dic.forEach((k, v) => {
  console.log(k, v);
});

dic.delete("c");
console.log(dic.size);
