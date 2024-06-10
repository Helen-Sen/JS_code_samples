const xlsx = require("xlsx");

const xlsxFilePath = "./data/Task_Deep_dive.xlsx";

exports.getXlsxData = function () {// Load the Excel file
  const workbook = xlsx.readFile(xlsxFilePath);
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
  const workbook = xlsx.readFile(xlsxFilePath);

  if (workbook.SheetNames.includes(sheetName)) {
    delete workbook.Sheets[sheetName];
    workbook.SheetNames = workbook.SheetNames.filter((name) => name !== sheetName);
  }

  xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
  xlsx.writeFile(workbook, xlsxFilePath);
}