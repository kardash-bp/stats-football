"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var matches = new CsvFileReader_1.CsvFileReader('football.csv');
matches.read();
var manWins = 0;
for (var _i = 0, _a = matches.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manWins++;
    }
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manWins++;
    }
}
console.log("Man Utd won " + manWins + " games.");
