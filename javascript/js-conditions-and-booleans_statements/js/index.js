console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2) {
  console.log("Ungrade zahl");
} else {
  console.log("Gerade Zahl");
}

// Part 3: Hotdogs
const numberOfHotdogs = 10000000;
let price = 2;

if (numberOfHotdogs < 5) {
  price = numberOfHotdogs * 2.0;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  price = numberOfHotdogs * 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  price = numberOfHotdogs * 1.0;
} else if (numberOfHotdogs >= 1000000) {
  price = numberOfHotdogs * 0.1;
}

console.log("Der Gesamtpreis beträgt: ", price, "€");

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Coach";

const greeting = "Hello " + (userName != "Coach" ? userName : "Coach") + "!";

console.log(greeting);
