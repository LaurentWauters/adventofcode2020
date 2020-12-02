"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pass = void 0;
var Pass = /** @class */ (function () {
    function Pass(lowest, highest, letter, password) {
        this.lowestVal = lowest;
        this.highestVal = highest;
        this.letterToCheck = letter;
        this.password = password;
    }
    return Pass;
}());
exports.Pass = Pass;
// export function calculatePass(array: Pass[]) {
//     var counter = 0;
//     for (var pass in array) {
//         var count = 0;
//         let res = pass.password.split("");
//         for (let c in res) {
//             if (c == pass.letterToCheck) {
//                 count++;
//             }
//         }
//         if (pass.lowestVal < count < pass.highestVal) {
//             counter++;
//         }
//     }
// }
