function setarg(ary) {
  ary[0] = ary[2];
}

function test(a, b, c) {
  c = 10;
  setarg(arguments);
  return a + b + c;
}

const res = test(1, 1, 1);

console.log(res);

function test1(a, b, c = 3) {
  c = 10;
  setarg(arguments);
  return a + b + c;
}
console.log(test1(1, 1, 1));
