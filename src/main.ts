import { calculateNum } from "./day1/day1";
import * as array from "../data/day1data.js";
import { getData } from "./scripts/JSONparser";


//DAY1
//console.log(calculateNum(array));

//DAY2
let url = "https://adventofcode.com/2020/day/2/input";
// console.log(getJSON(url, function(err, data) {
//     if (err !== null) {
//       console.log('Something went wrong: ' + err);
//     } else {
//       console.log('Your query count: ' + data.query.count);
//     }
//   }));

console.log(getData("./../data/day2data.txt"));