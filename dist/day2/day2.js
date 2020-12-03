"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePasss = exports.Pass = void 0;
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
function calculatePasss(pass) {
    var chars = pass.password.split("");
    var counter = 0;
    for (var i in chars) {
        if (chars[i] == pass.letterToCheck) {
            counter++;
        }
    }
    if (pass.lowestVal <= counter && counter <= pass.highestVal) {
        return true;
    }
    else {
        return false;
    }
}
exports.calculatePasss = calculatePasss;
