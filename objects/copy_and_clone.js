// to copy an object and modify it content (user1 and admin1 objects depend on each other)
let user1 = { name: "John" };
let admin1 = user1;
admin1.name = "Pete"; // changed by the "admin" reference
console.log(user1.name); // 'Pete', changes are seen from the "user" reference
console.log("---------------------------------------");

// cloninig object (the user2 and admin2 objects are independent of each other)
let user2 = {
  name: "John",
  age: 30,
};

let admin2 = {}; // the new empty object

// let's copy all user properties into it
for (let key in user2) {
  admin2[key] = user2[key];
}

// now clone is a fully independent object with the same content
admin2.name = "Pete"; // changed the data in it

console.log(user2.name); // still John in the original object
console.log("---------------------------------------");

// copy the properties of all source objects into the existing objcet, and then returns it as the result.
let user3 = { name: "John" };
console.log(user3);

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user3 = { name: "John", canView: true, canEdit: true }
console.log(user3);
console.log("---------------------------------------");


//copied property name already exists, it gets overwritten
let user4 = { name: "John" };
Object.assign(user4, { name: "Pete" });
console.log(user4.name); // now user = { name: "Pete" }
console.log("---------------------------------------");

// copy all properties of user5 into the empty object and returns it
let user5 = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user5);
console.log(clone.name, clone.age); // John, 30
console.log("---------------------------------------");

// structuredClone(object) clones the object with all nested properties
 let user = {};
user.me = user; // create a circular reference: user.me references the user itself
user.name = "Ann";
console.log("user:", user);
console.log("userMe:", user.me);
let cloneCircularObject = structuredClone(user);
console.log(cloneCircularObject.me === cloneCircularObject);
console.log(cloneCircularObject.me.me.me === cloneCircularObject); // cloneCircularObject.me is the same cloneCircularObject.me.me.me
console.log("---------------------------------------");


// clone the object with all nested properties, objects are independent
let user6 = {
  name: "John",
  sizes: {
    height: 182,
    width: 70
  }
};
let cloneNestedObject = structuredClone(user6);
console.log(user6.sizes === cloneNestedObject.sizes); // false, different objects
// user6 and clone are totally independent now
user6.sizes.width = 60;    // change a property from one place
console.log(cloneNestedObject.sizes.width); // 70