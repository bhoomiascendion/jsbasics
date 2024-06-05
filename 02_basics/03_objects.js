// singleton
//Object.create

// object literals

const mySym = Symbol("key1");

const JSUser = {
  name: "Bhoomi",
  "full name": "Bhoomi K",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "bhoomi@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//console.log(JSUser.email);

//console.log(JSUser["email"]);

//console.log(JSUser["full name"]);

console.log(JSUser[mySym]);

JSUser.email = "bhoomi@chatgpt.com";

//Object.freeze(JSUser);

JSUser.email = "bhoomi@microsoft.com";

//console.log(JSUser);

JSUser.greetings = function () {
  console.log("Hello JS user");
};

JSUser.greetingsTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JSUser.greetings);
console.log(JSUser.greetingsTwo);

const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
