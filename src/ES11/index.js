const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
});

const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(bigNumber, anotherBigNumber);

const promise1 = new Promise((resolve, reject) => reject("reject1"));
const promise2 = new Promise((resolve, reject) => resolve("reject2"));
const promise3 = new Promise((resolve, reject) => resolve("reject3"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

console.log(window);
console.log(globalThis);

const foo = null ?? "default string";

const user = {};
console.log(user?.profile?.email);
if (user?.profile?.email) {
  console.log("existe");
} else {
  console.log("no existe");
}
