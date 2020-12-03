import { calculateNum } from "./day1/day1";
import * as array from "../data/day1data.js";
import { getJSON } from "./scripts/JSONparser";
import { Pass, calculatePasss } from "./day2/day2";
//import { readFile } from "./scripts/TextParser";
import * as fs from "fs";


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

var arrayList: Array<Pass>;

function readFile(location: string): string[] {
    const contents = fs.readFileSync(location, 'utf8');
    return contents.split('\r\n').length === 1 ? contents.split('\n') : contents.split('\r\n');
}

var array = readFile("data/day2data.txt");

function calculatePass(array: Array<any>) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        let arraylel = array[i].split(" ");
        let arraynums = arraylel[0].split("-");
        let arraylet = arraylel[1].split("");
        let lowVal = arraynums[0];
        let highVal = arraynums[1];
        let letter = arraylet[0];
        let pass = arraylel[2];
        let result = new Pass(lowVal, highVal, letter, pass);
        if (calculatePasss(result)) {
            counter++;
        };
    }
    console.log(counter);
}

calculatePass(array);

