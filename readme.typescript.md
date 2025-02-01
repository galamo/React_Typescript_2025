### Javascript for React And TypeScript (Day_1)

- Async Operations

1. callbacks
2. promise
3. async await

### **Exercise_1: Async await**

#### Option_1

Write a function that gets all the countries from the following api: `http://localhost:2200/countries-elbit`

- store all the countries names in array.
- create an function that return each region and the number of countries inside.
- create an function that filter all the countries that has more than "population":7275556

Print the number of countries for each region

1. create a new folder - getCountries
2. create `index.js` file inside.
3. run `npm init -y`
4. run `npm i axios`
5. write your code.

#### Option_2

Write a function that gets all the users from the following api: `https://randomuser.me/api/?results=10`

- store all the user names in array.
- create an function that return each gender and the number of users.
- create an function that filter and gets all the user with `country: Canada`

Print the number of countries for each region

1. create a new folder - getUsersApp
2. create `index.js` file inside.
3. run `npm init -y`
4. run `npm i axios`
5. write your code.

# Typescript

- `npm init -y` - create new module based on the folder name
- install global - `npm install -g typescript`
- install local - `npm install typescript --save-dev`
- run `tsc --init`
- compile the code `tsc`
- configure useful scripts `watch mode`

# Types

- Example primitive types

# Json Based Type

### **Exercise_1: Create a type based JSON**

1. crate new type based on JSON - Users
2. Create the following types: `SingleUser`, `ArrayOfUsers`.

```json
{
  "gender": "female",
  "name": { "title": "Madame", "first": "Anja", "last": "Clement" },
  "location": {
    "street": { "number": 4446, "name": "Place du 8 Novembre 1942" },
    "city": "Finhaut",
    "state": "Fribourg",
    "country": "Switzerland",
    "postcode": 1085,
    "coordinates": { "latitude": "-55.9946", "longitude": "128.8545" },
    "timezone": {
      "offset": "-7:00",
      "description": "Mountain Time (US & Canada)"
    }
  },
  "email": "anja.clement@example.com",
  "login": {
    "uuid": "12627444-beb5-476a-8a01-23e03d0d20b6",
    "username": "bigdog278",
    "password": "1717",
    "salt": "3QvCBOUN",
    "md5": "5500614dbca048fd18b5e495e49513e4",
    "sha1": "2243e09b485fcd46225e3c3fffefcb8f94ed2960",
    "sha256": "ba3932e0430a2ed3046818433846c227a2e5d43b6fed8e53247cb5587954efc0"
  },
  "dob": { "date": "1996-04-04T22:39:20.516Z", "age": 28 },
  "registered": { "date": "2002-12-17T22:50:47.806Z", "age": 21 },
  "phone": "079 107 43 71",
  "cell": "077 691 98 67",
  "id": { "name": "AVS", "value": "756.6321.6815.85" },
  "picture": {
    "large": "https://randomuser.me/api/portraits/women/23.jpg",
    "medium": "https://randomuser.me/api/portraits/med/women/23.jpg",
    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/23.jpg"
  },
  "nat": "CH"
}
```

# Enum

- Numeric/String/Heterogeneous

# Partial & Required

# Interface

1. Declaration merging
2. extend

# Narrow down types [x]

| **Type**       | **Description**                                               | **Example**                                         |
| -------------- | ------------------------------------------------------------- | --------------------------------------------------- | -------- |
| `string`       | Represents text data.                                         | `let name: string = "John";`                        |
| `number`       | Represents numeric values (integer or float).                 | `let age: number = 25;`                             |
| `boolean`      | Represents `true` or `false`.                                 | `let isActive: boolean = true;`                     |
| `null`         | Represents explicitly no value.                               | `let empty: null = null;`                           |
| `undefined`    | Represents uninitialized variables.                           | `let notAssigned: undefined;`                       |
| `bigint`       | Represents large integers.                                    | `let bigValue: bigint = 123456789n;`                |
| `symbol`       | Represents unique values, often used as object keys.          | `let uniqueKey: symbol = Symbol("key");`            |
| `object`       | Represents non-primitive values.                              | `let person: object = { name: "John" };`            |
| `array`        | Represents a list of values.                                  | `let nums: number[] = [1, 2, 3];`                   |
| `tuple`        | Represents a fixed-length array with specific types.          | `let tuple: [string, number] = ["Alice", 30];`      |
| `enum`         | Represents named constants.                                   | `enum Color { Red, Green }`                         |
| `any`          | Allows any type (type-checking disabled).                     | `let value: any = 42;`                              |
| `unknown`      | Similar to `any`, but requires type-checking before usage.    | `let val: unknown = "test";`                        |
| `void`         | Represents no return value.                                   | `function log(): void {}`                           |
| `never`        | Represents a value that never occurs (e.g., throwing errors). | `function fail(): never { throw new Error(); }`     |
| `union`        | Allows multiple types.                                        | `let value: string                                  | number;` |
| `intersection` | Combines multiple types into one.                             | `type A = { name: string } & { age: number };`      |
| `literal`      | Represents specific values.                                   | `let dir: "up"                                      | "down";` |
| `type alias`   | Defines custom types.                                         | `type ID = string                                   | number;` |
| `interface`    | Describes object shapes.                                      | `interface User { name: string; }`                  |
| `class`        | Defines objects with constructors and methods.                | `class Animal { name: string; }`                    |
| `function`     | Represents a function's type.                                 | `let fn: (x: number) => string;`                    |
| `readonly`     | Makes properties or arrays immutable.                         | `let arr: readonly number[] = [1, 2];`              |
| `Record`       | Creates an object type with key-value pairs.                  | `let user: Record<string, number> = { a: 1 };`      |
| `Partial`      | Makes all properties optional.                                | `let user: Partial<{ name: string }>;`              |
| `Pick`         | Selects specific properties from a type.                      | `let user: Pick<User, "name"> = { name: "Alice" };` |
| `Omit`         | Excludes specific properties from a type.                     | `let user: Omit<User, "age"> = { name: "Alice" };`  |

### **Exercise_1: Calculate Tax for a Given Price**

#### **Objective:**

Write a function that calculates the tax amount for a given price, handling both numeric and string price inputs.

#### **Instructions:**

1. Define a function named `calculateTax` that:
   - Accepts an object as its argument.
   - The object contains:
     - `price`: A `number` or a `string` representing the price. If the price is a string, it will include a dollar sign (e.g., `"$100"`).
     - `tax`: A `number` representing the tax rate (e.g., `0.2` for 20% tax).

#### **Example Usage:**

```typescript
const tax1 = calculateTax({ price: 100, tax: 0.2 });
console.log(tax1); // Output: 20

const tax2 = calculateTax({ price: "$200", tax: 0.15 });
console.log(tax2); // Output: 30
```

# Overloading

### **Exercise_1: Implement Contextual Function Overloading in TypeScript**

- Use TypeScript's function overloading feature.

Create a function that establishes a "connection" based on different input types. The function should demonstrate **function overloading** by handling two distinct input scenarios: one with `string` parameters and another with `number` parameters.

#### **Instructions:**

1. Define a type `Connection` as an empty object (`{}`).
2. Implement a function `createConnection` with the following overloaded signatures:
   - A version that accepts two parameters: a `url` of type `string` and a `user` of type `string`. This signature should return a `Connection` object.
   - A version that accepts two parameters: a `url` of type `string` and a `userIdPassword` of type `number`. This signature should also return a `Connection` object.
3. Provide a single implementation for the function that handles both overloads, ensuring type safety.

#### **Example Usage:**

```typescript
const connection1 = createConnection("https://example.com", "admin");
const connection2 = createConnection("https://example.com", 456);
```

### .d.ts file, type declaration

1. Support JS existing code with Types.
2. import the lib.d.ts file to use the Types

# String literal

### **Exercise_1: Create a TypeScript Function for Day of the Week**

Create a TypeScript type and a function to determine the day of the week for a given `Date`.

#### **Instructions**:

1. Define a type named `DayOfWeeks` that includes the days `"Sunday"`, `"Monday"`, etc..
2. Write a function named `getDayFromDate` that:
   - Accepts a `Date` object as its argument.
   - Returns a value of type `DayOfWeeks`.

#### **Example Usage**:

```typescript
const date1 = new Date("2024-12-15"); // Sunday
console.log(getDayFromDate(date1)); // Output: "Sunday"

const date2 = new Date("2024-12-16"); // Monday
console.log(getDayFromDate(date2)); // Output: "Monday"
```

# Generics [x]

```javascript
A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

 In TypeScript, constraints are expressed using the extends keyword. T extends K means that it’s safe to assume that a value of type T is also of type K
 , e.g., 0 extends number because var zero: number = 0 is type-safe.

 Thus, we can have a generic that checks whether a constraint is met, and return different types.

```

```typescript
type StringFromType<T> = T extends string ? string : number;

type lorem = StringFromType<"lorem ipsum">; // 'string'
type ten = StringFromType<10>;
```

```typescript
function getSingleUser(users: Array<string>): string {
  return users[0];
}

function getSingleProduct(products: Array<Product>): Product {
  return products[0];
}
function getSingleObject<T>(arr: Array<T>): T {
  return arr[0];
}
```

### **Exercise_1: What should be instead the unknown,AdminsApiResponse,UsersApiResponse type? & **

- Replace unknown with the relevant type
- change the callback response type

```typescript

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = unknown;

type AdminsApiResponse = (
    {
        status: 'success';
        data: Admin[];
    } |
    {
        status: 'error';
        error: string;
    }
);

export function requestAdmins(callback: (response: AdminsApiResponse) : void) {
    callback({
        status: 'success',
        data: admins
    });
}

type UsersApiResponse = (
    {
        status: 'success';
        data: User[];
    } |
    {
        status: 'error';
        error: string;
    }
);

export function requestUsers(callback: (response: UsersApiResponse) : void) {
    callback({
        status: 'success',
        data: users
    });
}

```

### Generics full example [x]

```typescript
// Generics full example
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

interface Song {
  artist: string;
  length: number;
  name: string;
  writer: string;
}

class PlayList<T> {
  private list: T[] = [];
  add(someElement: T) {
    this.list.push(someElement);
  }
  play(item: T) {
    this.list.splice(0, 1);
  }
}

const songs = new PlayList<Song>();
songs.add({
  artist: "veronica",
  length: 12,
  name: "silence and flame",
  writer: "Adle",
});
```

```typescript
// A generic function where T must have a 'name' property
function greet<T extends { name: string }>(person: T): string {
  return `Hello, ${person.name}!`;
}
const user = { name: "Alice", age: 25 };
console.log(greet(user));

const company = { name: "Elbit", employees: 100 };
console.log(greet(company));

const invalidUser = { age: 30 };
```

### Zod - input validation library [x]

- `npm install zod`

```javascript
import { z } from "zod";

// creating a schema for strings
const mySchema = z.string();

// parsing
mySchema.parse("tuna"); // => "tuna"
mySchema.parse(12); // => throws ZodError

// "safe" parsing (doesn't throw error if validation fails)
mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
mySchema.safeParse(12); // => { success: false; error: ZodError }

const User = z.object({
  url: z.string().min(8),
  name: z.string(),
  age: z.number().min(2).max(3).optional(),
});

type ZodBasedUser = z.infer<typeof User>;
```

# keyof

```typescript
type ScanResult = {
  numberOfVulnerabilities: number;
  packages: Array<{ name: string; version: string; cve: string }>;
  priorities: Array<string>;
  id: string;
  userScannerId: string;
};
const scanErrors: Array<ScanResult> = [
  {
    numberOfVulnerabilities: 1,
    packages: [{ name: "fetch", version: "1.2.3", cve: "2024-1554-223" }],
    priorities: ["high", "low"],
    id: "id_1",
    userScannerId: "2024_12_12",
  },
  {
    numberOfVulnerabilities: 1,
    packages: [{ name: "axios", version: "1.2.3", cve: "2024-1124-223" }],
    priorities: ["high", "low"],
    id: "id_2",
    userScannerId: "2024_12_12",
  },
];
```

### **Exercise_1: keyof Type and Functionality**

use `type ScanResult` that represents the results of a vulnerability scan & implement a function named `getScanResultStats` that can retrieve any property of the ScanResult object dynamically using a keyof constraint.

Implement the function getScanResultStats that:

Accepts a ScanResult object & key of the ScanResult type.
Returns the value of the specified key.

Implement a function named `filterScans` that filters an array of ScanResult objects based on a specified key-value pair.

Accepts a ScanResult Array, key of the ScanResult type & value.
Returns the requested filtered array..
