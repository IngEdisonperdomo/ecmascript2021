const string =
  "javascript es maravilloso, con javascript puede crear el futuro de la web";

const replaced = string.replace("javascript", "python");
console.log(replaced);

const replaced2 = string.replaceAll("javascript", "python");
console.log(replaced2);

let isTrue = true;
let isFalse = false;

console.log((isTrue &&= isFalse));

console.log((isTrue ||= isFalse));

let isTrue1 = undefined;
console.log((isTrue1 ??= isFalse));
