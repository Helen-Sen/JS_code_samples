let user = {
  name: "John",
  age: 30,
};

// output all properties of user
for (let field in user) {
  console.log(user[field]); // John, 30
}

// sum all salaries and store in the variable sum
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  asd: "wer",
};

let sum = 0;
for (let key in salaries) {
  if (typeof salaries[key] == "number") {
    sum += salaries[key];
  }
}
console.log(sum); // 390
