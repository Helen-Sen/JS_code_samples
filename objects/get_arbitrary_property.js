const prompt = require("prompt-sync")();

let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user? ('name' or 'age'): ");
console.log(user[key]);
console.log(key);

