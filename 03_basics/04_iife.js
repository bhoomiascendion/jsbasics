(function chai() {
  //named iife
  console.log("DB CONNECTED");
})();

//chai();

((name) => {
  console.log(`db connected two ${name}`);
})("bhoomi");
