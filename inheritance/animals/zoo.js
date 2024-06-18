const Cat = require("./cat");
const Dog = require("./dog");

let catKuzya = new Cat("Kuzya", 3);
catKuzya.getInfo();
console.log("Voice is %s.", catKuzya.voice);
catKuzya.alarm();

let catPusha = new Cat("Pusha", 4);
catPusha.getInfo();
console.log("Voice is %s.", catPusha.voice);
catPusha.emotion();

console.log("====================================");

let dogRex = new Dog("Rex", 5);
dogRex.getInfo();
dogRex.voice = "r-r-r-r-r";
console.log("Voice is %s.", dogRex.voice);
dogRex.alarm();

let dogSharik = new Dog("Sharik", 1);
dogSharik.getInfo();
dogSharik.emotion();
