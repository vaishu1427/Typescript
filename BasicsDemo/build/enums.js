var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_Only"] = 1] = "Read_Only";
    Role["Edit"] = "edit";
})(Role || (Role = {}));
var roles = {
    role: Role.Edit
};
if (roles.role === 0) {
    console.log(roles.role);
}
if (roles.role === "edit") {
    console.log(roles.role);
}
console.log(Role.Admin + " " + Role.Edit);
