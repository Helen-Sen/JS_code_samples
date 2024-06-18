const Animal = require("./animal");

module.exports = class Dog extends Animal {
  constructor(name, age) {
    super("dog", name, age, "gav-gav");
    this.name = name;
    this.age = age;
  }
};