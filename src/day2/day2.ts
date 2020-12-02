export class Pass {
    lowestVal: number;
    highestVal: number;
    letterToCheck: string;
    password: string;

    constructor(lowest: number, highest: number, letter: string, password: string) {
        this.lowestVal = lowest;
        this.highestVal = highest;
        this.letterToCheck = letter;
        this.password = password;
    }
}

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