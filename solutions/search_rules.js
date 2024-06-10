const xlsxUtil = require("./xlsx_util.js");

const data = xlsxUtil.getXlsxData();

function search(pattern) {
  const regex = new RegExp(pattern.replace(/\*/g, ".*"), "i");
  return data.filter((item) => regex.test(item.Title));
}

// Test 1: motor*
// console.log("Test 2:", search("motor*"));

// Test 2: Rule_OR
function searchOr(pattern1, pattern2) {
  const regex1 = new RegExp(pattern1.replace(/\*/g, ".*"), "i");
  const regex2 = new RegExp(pattern2.replace(/\*/g, ".*"), "i");
  const searchResult = data.filter((item) => regex1.test(item.Title) || regex2.test(item.Title));
  xlsxUtil.writeXlsxData(searchResult, "Rule_OR");
}
searchOr("motor", "vehicle");


// Test 3: Rule_AND
function searchAnd(pattern1, pattern2) {
  const regex1 = new RegExp(pattern1.replace(/\*/g, ".*"), "i");
  const regex2 = new RegExp(pattern2.replace(/\*/g, ".*"), "i");
  const searchResult = data.filter((item) => regex1.test(item.Title) && regex2.test(item.Title));
  xlsxUtil.writeXlsxData(searchResult, "Rule_AND");
}
searchAnd("motor", "vehicle");

// // Test 4: Rule_NOT 
// function searchNot(pattern) {
//   const regex = new RegExp(pattern.replace(/[*?%_]/g, ".*"), "i");
//   const searchResult = data.filter((item) => !regex.test(item.Title));
//    xlsxUtil.writeXlsxData(searchResult, "Rule_NOT");
// }
// searchNot("compressor");

// // Test 5: Rule_NEAR[n]
// function searchNear(pattern1, pattern2, n) {
//   const regex1 = new RegExp(pattern1.replace(/[*?%_]/g, ".*"), "i");
//   const regex2 = new RegExp(pattern2.replace(/[*?%_]/g, ".*"), "i");
//   const searchResult = data.filter((item) => {
//     const words = item.Title.toLowerCase().split(/\s+/);
//     const index1 = words.indexOf(pattern1.toLowerCase());
//     const index2 = words.indexOf(pattern2.toLowerCase());
//     return Math.abs(index1 - index2) <= n;
//   });
//    xlsxUtil.writeXlsxData(searchResult, "Rule_NEAR[n]");
// }
// searchNear();