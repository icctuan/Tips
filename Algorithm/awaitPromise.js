console.log(1);
let a = new Promise((resolve, j) => {
  console.log(2);
  resolve();
  console.log(7);
})
  .then((r) => {
    console.log(3);
  })
  .then((g) => {
    console.log(6);
    reject();
    console.log(4);
  })
  .catch((e) => {
    console.log("err");
  })
  .then(() => {
    console.log("0000");
  });
console.log("d");
await a;
console.log("df");

// 1
// 2
// 7
// d
// 3
// 6
// err
// 0000
// df
