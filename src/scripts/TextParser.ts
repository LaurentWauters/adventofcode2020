import * as fs from 'fs';
// Read the file at location `location` and return an array of string representing each line of the file
export function readFile(location: string): string[] {
    const contents = fs.readFileSync(location, 'utf8');
    return contents.split('\r\n').length === 1 ? contents.split('\n') : contents.split('\r\n');
}
// Read the file at location `location` and return an array of numbers representing each line of the file
export function readFileAsNumbers(location: string): number[] {
    const contents = readFile(location);
    return contents.map(Number);
}
// Read a file at location `location` and return an array of numbers from the given comma separated list
// Expects that the file contains only one line. If there are more lines, they'll be ignored.
export function readCommaSeperatedFileAsNumbers(location: string): number[] {
    const contents = readFile(location);
    return contents[0].split(',').map(Number);
}