const { log } = require("wd/lib/commands");

const accountId = 144453;
let accountEmail = "bhoomi@gmail.com";
var accountPassword = "12244";
accountCity = "Jaipur";

// accountId = 2;

accountEmail = "ab@gmail.com";
accountPassword = "2323";
accountCity = "Ahmedabad";

let accountState;

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/* not use var bcoz of issue in block scope and function scope*/
