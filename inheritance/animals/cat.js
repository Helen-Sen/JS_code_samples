const Animal = require("./animal");

module.exports = class Cat extends Animal {
  constructor(name, age) {
    super("cat", name, age, "mur-may");
    this.name = name;
    this.age = age;
  }
};