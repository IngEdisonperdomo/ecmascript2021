const obj = {
  name: "edison",
  age: 33,
  country: "VZ",
};
//ES9
let { name, ...all } = obj;
console.log(name, all);

const obj2 = {
  name: "edison",
  age: 33,
};

//ES9
const obj3 = {
  ...obj2,
  country: "VZ",
};

console.log(obj3);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello world") : reject(new Error("test error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
