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


export function calculatePasss(pass: Pass): boolean {
    var chars = pass.password.split("");
    var counter = 0;
    for(var i in chars) {
        if(chars[i] == pass.letterToCheck) {
            counter++;
        }
    }
    if (pass.lowestVal <= counter && counter <= pass.highestVal) {
        return true;
    } else {
        return false;
    }
}