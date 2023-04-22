Object.defineProperty(exports, "__esModule", { value: true });
var Permission;
(function (Permission) {
    Permission[Permission["Read"] = 1] = "Read";
    Permission[Permission["Write"] = 2] = "Write";
    Permission[Permission["Create"] = 4] = "Create";
    Permission[Permission["Delete"] = 8] = "Delete";
})(Permission || (Permission = {}));
let p = Permission.Read | Permission.Write;
function hasPermission(target, per) {
    return (target & per) === per;
}
console.log(hasPermission(p, Permission.Write));
p = p ^ Permission.Write;
console.log(hasPermission(p, Permission.Write));
