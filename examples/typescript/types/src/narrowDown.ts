interface RegularUser {
  type: "user" | "permittedUser" | "originalUser";
  name: string;
}

interface Admin {
  type: "admin";
  name: string;
  role: string;
}

type Person = RegularUser | Admin;
const admin: Person = {
  type: "admin",
  name: "gal",
  role: "admin",
};

const user: Person = {
  type: "user",
  name: "snir",
};
admin.role;

const employees = [admin, user];

function isAdmin(p: Person): p is Admin {
  return p.type == "admin";
}

for (let index = 0; index < employees.length; index++) {
  const element = employees[index];
  if (isAdmin(element)) {
    console.log(element.role);
  } else {
    console.log(element.name);
  }
}

export function testSomething() {}
export function testSomething2() {}
export function testSomething3() {}
export default function parseObject() {}
