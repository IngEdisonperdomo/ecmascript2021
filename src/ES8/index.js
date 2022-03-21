const data = {
  frontend: "edison",
  backend: "isabel",
  design: "Ana",
};

//ES8 MATRICES
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
  frontend: "edison",
  backend: "isabel",
  design: "Ana",
};

//ES8 GET VALUE OBJECT
const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = "hello";
//ES8
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "-----"));
