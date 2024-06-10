const xlsx = require("xlsx");

const inputFilePath = "./data/BSA2023_task.xlsx";
const outputFilePath = "./data/BSA2023_search_result.xlsx";
const workbook = xlsx.utils.book_new();

exports.getXlsxData = function () {// Load the Excel file
  const workbook = xlsx.readFile(inputFilePath);
  const sheet = workbook.Sheets["Data"];
  const jsonData = xlsx.utils.sheet_to_json(sheet);

  // Format the JSON data to the desired array of objects
  return jsonData.map((row) => ({
    ID: row.ID,
    Title: row.Title,
  }));
}

exports.writeXlsxData = function (data, sheetName) {
  const worksheet = xlsx.utils.json_to_sheet(data);
  
  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  xlsx.writeFile(workbook, outputFilePath);
}