// Write a function called "isLessThan". Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
// var output = isLessThan(9, 4);
// console.log(output); // --> true

function isLessThan(num1, num2) {
    return num2 < num1;


}
var output = isLessThan(9, 4);
console.log(output)

// Write a function called "isOddLength".
// Given a word, "isOddLength" returns whether the length of the given word is odd.
// var output = isOddLength('special');
// console.log(output); // --> true

function isOddLength(word) {
    return word.length % 2 !== 0
}
var output = isOddLength(word)
console.log(output);

// / Write a function called "isEvenAndGreaterThanTen".
// Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
// var output = isEvenAndGreaterThanTen(Vinod);
// console.log(output); // --> false


function isEvenAndGreaterThanTen(word) {
    return (word.length > 10) && (word.length % 2 == 0);
}

var output = isEvenAndGreaterThanTen("word")
console.log(output)

