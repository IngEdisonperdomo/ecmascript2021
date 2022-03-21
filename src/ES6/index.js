function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "vz";

  console.log(name, age, country);
}

//ES6
function newFunction2(name = "oscar", age = "32", country = "vz") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("edison", 33, "AR");

let hello = "hello";
let world = "world";

let epicPhrase = hello + " " + world;

//ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase);

let lorem =
  "Lorem  sit amet consectetur adipisicing elit. Fugiat distincti \n" +
  "Vitae, aspernatur!";

//ES6
let lorem2 = `otra frase epica
ahora es otra linea`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "edison",
  age: 32,
  country: "VZ",
};

console.log(person.name, person.age, person.country);

//ES6 destruct element
let { name, age, country } = person;
console.log(name, age, country);

let team1 = ["edison", "leo", "alfonso"];
let team2 = ["lebron", "aiverson", "jordan"];

//ES6
let education = ["david", ...team1, ...team2];
console.log(education);

{
  var globalVar = "Global var";
}

//ES6
{
  let globalLet = "Global let";
  console.log(globalLet);
}

console.log(globalVar);

//ES6
const a = "b";
//a = 'a'
console.log(a);

let nameT = "edison";
let ageT = 32;

obj = { name: nameT, age: ageT };

//ES6 OBJ
obj2 = { nameT, ageT };
console.log(obj2);

const names = [
  { name: "edison", age: 32 },
  { name: "Yesica", age: 27 },
];

let listOfName = names.map(function (item) {
  console.log(item.name);
});

//ES6
let listOfNames2 = names.map((item) => console.log(item.name));

//ES6
const listOfName3 = (name, age, country) => {};

//ES6
const listOfName4 = (name) => {};

//ES6
const square = (num) => num * num;

//ES6 Promise
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!");
    } else {
      reject("ups!");
    }
  });
};

//ES6 Promise
helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("hola"))
  .catch((error) => console.log(error));
