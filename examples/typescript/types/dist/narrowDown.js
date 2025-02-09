"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSomething = testSomething;
exports.testSomething2 = testSomething2;
exports.testSomething3 = testSomething3;
exports.default = parseObject;
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
function testSomething() { }
function testSomething2() { }
function testSomething3() { }
function parseObject() { }
