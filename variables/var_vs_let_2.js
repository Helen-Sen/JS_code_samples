
// Expression 1 is executed (one time) before the execution of the code block.
// Expression 2 defines the condition for executing the code block.
// Expression 3 is executed (every time) after the code block has been executed.
// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }


// present timeout 1sec; loop will be executed, variable 'i' will be reasigned up to 5, and then (after 1sec) console.log prints '5' (i=5) five times   
console.log("var with timeout");
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);     
}
console.log("______________________________________");

// present timeout 1sec; the loop will be executed and on each iteration "let" creates a new variable "i" with a new value (1,2,3,4) and only in the area visibility of the loop
// and then(after 1sec) console.log prints all values 'i'(0, 1, 2, 3, 4) 
console.log("let with timeout")
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
console.log("______________________________________");

// absent timeout, so result will print after every iteration loop (0,1,2,3,4) and then when the loop will executed, i=5 
// and '5' will be print by console.log outside the loop
console.log("var without timeout")
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
// 0, 1, 2, 3, 4, 5
console.log("______________________________________");

