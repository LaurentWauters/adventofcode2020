"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var day2_1 = require("./day2/day2");
//import { readFile } from "./scripts/TextParser";
var fs = require("fs");
//DAY1
//console.log(calculateNum(array));
//DAY2
// let url = "https://adventofcode.com/2020/day/2/input";
// console.log(getJSON(url, function(err, data) {
//     if (err !== null) {
//       console.log('Something went wrong: ' + err);
//     } else {
//       console.log('Your query count: ' + data.query.count);
//     }
//   }));
var arrayList;
function readFile(location) {
    var contents = fs.readFileSync(location, 'utf8');
    return contents.split('\r\n').length === 1 ? contents.split('\n') : contents.split('\r\n');
}
var array = readFile("data/day2data.txt");
function calculatePass(array) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        var arraylel = array[i].split(" ");
        console.log("arraylel: " + arraylel);
        var arraynums = arraylel[0].split("-");
        var arraylet = arraylel[1].split("");
        var lowVal = arraynums[0];
        console.log(lowVal);
        var highVal = arraynums[1];
        console.log(highVal);
        var letter = arraylet[0];
        console.log(letter);
        var pass = arraylel[2];
        console.log(pass);
        var result = new day2_1.Pass(lowVal, highVal, letter, pass);
        if (day2_1.calculatePasss(result)) {
            counter++;
        }
        ;
    }
    console.log(counter);
}
calculatePass(array);
