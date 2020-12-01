"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNum = void 0;
function calculateNum(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length; j++) {
            if (i + j == 2020) {
                return i * j;
            }
        }
    }
}
exports.calculateNum = calculateNum;
