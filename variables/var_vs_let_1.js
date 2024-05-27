// 'var' - has a global area of visibility, so variable "greeting" will be reasigned inside the block {}
var greeting = "say hi";
var times = 4;

if (times > 3) {
  var greeting = "say Hello instead";
}
console.log(greeting); // "say Hello instead"
console.log("______________________________________");


// 'let' - has a local area of visibility, so variable "greet" inside the block {} is a new variable, which is defined and is visible only inside the block. 
// So console.log(greet) prints "say hi" 
let greet = "say hi";
var times = 4;

if (times > 3) {
  let greet = "say Hello instead";
}

console.log(greet); // "say hi"
console.log("______________________________________");

