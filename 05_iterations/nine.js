const myNums = [1, 2, 3];

// const mytotal = myNums.reduce(function (acc, curVal) {
//   console.log(`acc ${acc} curVal ${curVal}`);
//   return acc + curVal;
// }, 3);

const mytotal = myNums.reduce((acc, curVal) => {
  return acc + curVal;
}, 0);

console.log(mytotal);

const shoppingCart = [
  {
    itemname: "JS course",
    price: 2999,
  },
  {
    itemname: "python course",
    price: 999,
  },
  {
    itemname: "mobile course",
    price: 5999,
  },
  {
    itemname: "mobile course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
