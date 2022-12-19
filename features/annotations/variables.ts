let apples: number = 5;

let spped: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// buli in objects

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 2, 3]

let truths: boolean[] = [true, false, true]

//Classes
class Car { }
let car2: Car = new Car();

//Object literal

let point: { x: number, y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// When to use annotatio
// 1 - Functions that returna 'any' type

const json = '{"x":10,"y":20}';
const cordinnates: { x: number; y: number } = JSON.parse(json);

console.log(cordinnates)

//2 - declare a variable on one line and inicialize later

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// 3 - variable whose type cannot be inferre correctly

let numbers = [-10, -1, 12]
let numberAbovezero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAbovezero = numbers[i]
    }

}
