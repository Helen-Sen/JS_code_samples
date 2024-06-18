const Cat = require("./cat");
const Dog = require("./dog");

let catKuzya = new Cat("Kuzya", 3);
catKuzya.getInfo();
console.log("Voice is %s.", catKuzya.voice);
catKuzya.alarm();

console.log("====================================");

let dogRex = new Dog("Rex", 5);
dogRex.getInfo();
dogRex.voice = "r-r-r-r-r";
console.log("Voice is %s.", dogRex.voice);
dogRex.alarm();
