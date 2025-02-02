"use strict";
const admin = {
    type: "admin",
    name: "gal",
    role: "admin",
};
const user = {
    type: "user",
    name: "snir",
};
admin.role;
const employees = [admin, user];
function isAdmin(p) {
    return p.type == "admin";
}
for (let index = 0; index < employees.length; index++) {
    const element = employees[index];
    if (isAdmin(element)) {
        console.log(element.role);
    }
    else {
        console.log(element.name);
    }
}
