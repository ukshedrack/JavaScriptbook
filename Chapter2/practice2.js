// Arithmetic operators - Order of Execution

var total;
total = 2 + 4 + 10;
console.log(total); // 16
total = 2 + 4 * 10;
console.log(total); // 42
total = (2 + 4) * 10;
console.log(total); // 60

// String operators - Mixing Numbers and Strings together
var cost1 = '7';
var cost2 = '9';
var total = cost1 + cost2;
console.log(total); // '79'

// Adding numeric data to a string.
// Automatic type conversion
var number = 12;
var street= 'Ivy Road';
var add = number + street;
console.log(add); // '12Ivy Road'

// Using other arithmetic operators on strings
var score= ' seven';
var score2 = 'nine';
var total = score * score2;
console.log(total); // NaN