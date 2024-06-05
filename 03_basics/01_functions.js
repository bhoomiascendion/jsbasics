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

//console.log(loginUserMessage("bhoomi"));
//console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500, 1000));

const user = {
  username: "Bhoomi",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is${anyObject.price}`
  );
}
handleObject({
  username: "Bhoomi",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue([200, 400, 100, 600]));
