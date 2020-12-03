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

//EX1
// export function calculatePasss(pass: Pass): boolean {
//     var chars = pass.password.split("");
//     var counter = 0;
//     for(var i in chars) {
//         if(chars[i] == pass.letterToCheck) {
//             counter++;
//         }
//     }
//     if (pass.lowestVal <= counter && counter <= pass.highestVal) {
//         return true;
//     } else {
//         return false;
//     }
// }

//EX2
export function calculatePasss(pass: Pass): boolean {
    var chars = pass.password.split("");
    if (chars[pass.lowestVal-1] == pass.letterToCheck && chars[pass.highestVal-1] != pass.letterToCheck){
        return true;
    } else if (chars[pass.lowestVal-1] != pass.letterToCheck && chars[pass.highestVal-1] == pass.letterToCheck) {
        return true;
    }
    else {
        return false;
    }
}