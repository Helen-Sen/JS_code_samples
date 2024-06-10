const xlsxIO = require("./xlsx_io.js");

const data = xlsxIO.getXlsxData();

// Rule_AND
searchAnd("motor", "vehicle");

// Rule_OR
searchOr("motor", "vehicle");

// Rule_NOT
searchNot("compressor");

// Rule_NEAR[n]
searchNear("dental", "material", 3);

// Rule_SEQ[n]
searchSeq("dental", "material", 3);

// Rule_Space
searchSpace("dental material");

// Rule_wildcard(*)
searchWildcard("Singl* compressor");

// Rule_wildcard(?)
searchWildcardSingle("Singl?-screw compressor");

// Rule_wildcard (%)
searchWildcardPercent("blank%");

// Rule_wildcard (_)
searchWildcardUnderscore("Single_screw_compressor");

// Rule_to search using the literal phrase rule (" ")
searchLiteralPhrase("method and device");

// Rule_grouping: dental AND (method OR material)
searchOrRuleGroup("dental", "method", "material");

function searchAnd(pattern1, pattern2) {
  const regex1 = new RegExp(pattern1.concat("\\W?"), "i");
  const regex2 = new RegExp(pattern2.concat("\\W?"), "i");
  const searchResult = data.filter((item) => regex1.test(item.Title) && regex2.test(item.Title));
  xlsxIO.writeXlsxData(searchResult, "Rule_AND");
}

function searchOr(pattern1, pattern2) {
  const regex1 = new RegExp(pattern1.concat("\\W?"), "i");
  const regex2 = new RegExp(pattern2.concat("\\W?"), "i");
  // console.log(regex1, regex2);
  const searchResult = data.filter((item) => regex1.test(item.Title) || regex2.test(item.Title));
  xlsxIO.writeXlsxData(searchResult, "Rule_OR");
}

function searchNot(pattern) {
  const regex = new RegExp(pattern.replace(/[*?%_]/g, ".*"), "i");
  const searchResult = data.filter((item) => !regex.test(item.Title));
  xlsxIO.writeXlsxData(searchResult, "Rule_NOT");
}

function searchNear(pattern1, pattern2, n) {
  const searchResult = data.filter((item) => {
    const words = item.Title.toLowerCase().split(/\s+/);
    const indices1 = words.reduce((acc, word, idx) => {
      if (word === pattern1.toLowerCase()) acc.push(idx);
      return acc;
    }, []);
    const indices2 = words.reduce((acc, word, idx) => {
      if (word === pattern2.toLowerCase()) acc.push(idx);
      return acc;
    }, []);
    for (let i = 0; i < indices1.length; i++) {
      for (let j = 0; j < indices2.length; j++) {
        if (Math.abs(indices1[i] - indices2[j]) <= n) {
          return true;
        }
      }
    }
    return false;
  });
  xlsxIO.writeXlsxData(searchResult, "Rule_NEAR");
}

function searchSeq(pattern1, pattern2, n) {
  const searchResult = data.filter((item) => {
    const words = item.Title.toLowerCase().split(/\s+/);
    const len = words.length;
    for (let i = 0; i < len; i++) {
      if (words[i] === pattern1.toLowerCase()) {
        for (let j = 1; j <= n + 1; j++) {
          if (i + j < len && words[i + j] === pattern2.toLowerCase()) {
            return true;
          }
        }
      }
    }
    return false;
  });
  xlsxIO.writeXlsxData(searchResult, "Rule_SEQ");
}

function searchSpace(phrase) {
  const regex = new RegExp(`\\b${phrase}\\b`, "i");
  const searchResult = data.filter((item) => regex.test(item.Title));

  xlsxIO.writeXlsxData(searchResult, "Rule_Space");
}

function searchWildcard(pattern) {
  const regexPattern = pattern.replace(/\*/g, ".*");
  const regex = new RegExp(regexPattern, "i");
  const searchResult = data.filter((item) => regex.test(item.Title));

  xlsxIO.writeXlsxData(searchResult, "Rule_Wildcard");
}

function searchWildcardSingle(pattern) {
  const regexPattern = pattern.replace(/\?/g, ".");
  const regex = new RegExp(regexPattern, "i");
  const searchResult = data.filter((item) => regex.test(item.Title));

  xlsxIO.writeXlsxData(searchResult, "Rule_Wildcard_Single");
}

function searchWildcardPercent(pattern) {
  const regexPattern = pattern.replace(/%/g, ".{0,1}");
  const regex = new RegExp(regexPattern, "i");
  const searchResult = data.filter((item) => regex.test(item.Title));

  xlsxIO.writeXlsxData(searchResult, "Rule_Wildcard_Percent");
}

function searchWildcardUnderscore(pattern) {
  const regexPattern = pattern.replace(/_/g, "(?:\\s?)");
  const regex = new RegExp(regexPattern, "i");
  const searchResult = data.filter((item) => regex.test(item.Title));

  xlsxIO.writeXlsxData(searchResult, "Rule_Wildcard_Underscore");
}

function searchLiteralPhrase(phrase) {
  const regex = new RegExp(`\\b${phrase}\\b`, "i");
  const searchResult = data.filter((item) => regex.test(item.Title));

  xlsxIO.writeXlsxData(searchResult, "Rule_Literal_Phrase");
}

function searchOrRuleGroup(pattern1, pattern2, pattern3) {
  const regex1 = new RegExp(pattern1.concat("\\W?"), "i");
  const regex2 = new RegExp(pattern2.concat("\\W?"), "i");
  const regex3 = new RegExp(pattern3.concat("\\W?"), "i");
  const searchResult = data.filter((item) => regex1.test(item.Title) && (regex2.test(item.Title) || regex3.test(item.Title)));
  xlsxIO.writeXlsxData(searchResult, "Rule_Grouping");
}
