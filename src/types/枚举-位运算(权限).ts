enum Permission {
  Read = 1, // 2^0    0001
  Write = 2, // 2^1   0010
  Create = 4, // 2^2  0100
  Delete = 8, // 2^3  1000
}

// 1.如何组合权限
// | 使用 位运算 (或运算)
// 0001
// 0010
// ----
// 0011
let p: Permission = Permission.Read | Permission.Write;

// 2.如何判断是否拥有某个权限
// & 使用 位运算 (且运算)
// 0011
// 0010
// ----
// 0010

function hasPermission(target: Permission, per: Permission) {
  return (target & per) === per;
}

// 判断变量p是否有可读权限
console.log(hasPermission(p, Permission.Write));

// 3. 如何删除某个权限
// ^ 使用 位运算 (异或运算)
// 0011
// 0010
// ----
// 0001
p = p ^ Permission.Write;
console.log(hasPermission(p, Permission.Write));

export {};
