// if all keys are stings can be converted to integers we get them sorted
let phoneCodes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  // ..,
  1: "USA",
};

for (let phoneCode in phoneCodes) {
  console.log(phoneCode); // 1, 41, 44, 49
}

//if all keys are stings can't be converted to integers we get them in creation order
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA",
};

for (let code in codes) {
  // using + with "code" variable we convert strings to integer: "+49" -> 49
  console.log(+code); // 49, 41, 44, 1
}
