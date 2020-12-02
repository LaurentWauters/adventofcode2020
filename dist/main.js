"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JSONparser_1 = require("./scripts/JSONparser");
//DAY1
//console.log(calculateNum(array));
//DAY2
var url = "https://adventofcode.com/2020/day/2/input";
// console.log(getJSON(url, function(err, data) {
//     if (err !== null) {
//       console.log('Something went wrong: ' + err);
//     } else {
//       console.log('Your query count: ' + data.query.count);
//     }
//   }));
console.log(JSONparser_1.getData("./../data/day2data.txt"));
