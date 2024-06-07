// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((item) => {
//   //console.log(item);
//   return item;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 5;
// });

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "Book One",
    genere: "Fiction",
    publish: 2004,
    edition: 2005,
  },
  {
    title: "Book Two",
    genere: "Mystery",
    publish: 2007,
    edition: 2008,
  },
  {
    title: "Book Three",
    genere: "Science Fiction",
    publish: 2011,
    edition: 2012,
  },
  {
    title: "Book Four",
    genere: "Fantasy",
    publish: 2015,
    edition: 2016,
  },
  {
    title: "Book Five",
    genere: "Non-Fiction",
    publish: 2018,
    edition: 2019,
  },
  {
    title: "Book Six",
    genere: "Thriller",
    publish: 2020,
    edition: 2021,
  },
  {
    title: "Book Seven",
    genere: "Romance",
    publish: 2009,
    edition: 2010,
  },
  {
    title: "Book Eight",
    genere: "Horror",
    publish: 2012,
    edition: 2013,
  },
  {
    title: "Book Nine",
    genere: "Biography",
    publish: 2014,
    edition: 2015,
  },
  {
    title: "Book Ten",
    genere: "History",
    publish: 2019,
    edition: 2020,
  },
  {
    title: "Book Eleven",
    genere: "Poetry",
    publish: 2001,
    edition: 2002,
  },
];

//const userBooks = books.filter((bk) => bk.genere === "History");

const userBooks = books.filter((bk) => {
  return bk.publish >= 2015 && bk.genere === "History";
});

console.log(userBooks);
