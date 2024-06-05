function sayMyName() {
  console.log("B");
  console.log("H");
  console.log("O");
  console.log("O");
  console.log("M");
  console.log("I");
}

//sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //let result = number1 + number2;
  //return result;
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

//console.log("result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("please enter user name");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("bhoomi"));
console.log(loginUserMessage());
