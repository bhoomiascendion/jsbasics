const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((val) => {
//   console.log(val);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
