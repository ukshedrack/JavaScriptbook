// Strict Equality
console.log('3' == 3);
console.log('3' === 3);

// Logical Operators - To compare the results of
// more than one comparison operator.
console.log((5 < 2) && (3 >= 2));
console.log((5 < 2) || (3 >= 2));
console.log(!((5 < 2) && (3 >= 2)));

// Short-Circuiting
var artist = 'Rembrandt'; // A non-empty string is truthy
var artistA = (artist || 'Unknown');
console.log(artistA);
var artist = ''; // An empty string is falsy
// var artistA = (artist || 'Unknown') ; 
var artistA = (artist || {});
console.log(artistA);

var valueA = 0; // Falsy
var valueB = 1; // A truthy statement
var valueC = 2; // Falsy
var result = valueA || valueB || valueC;
if (result) {
	console.log(result);
}