const name = "Bhoomi";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Bhoomi-Kathiriya");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf("o"));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);

const newString1 = "  Bhoomi  ";

console.log(newString1);
console.log(newString1.trim());

const url = "https://bhoomi.com/bhoomi%20kathiriya";

console.log(url.replace("%20", "-"));

console.log(url.includes("bhoomi"));

console.log(gameName.split("-"));
