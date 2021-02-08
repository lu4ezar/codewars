// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
*/

const fn = input => {
	// if there's unpaired brace - return false
	if (input.length % 2) return false;
	let t = input;
	const reg = /\(\)|\{\}|\[\]/g;
	while (t.match(reg)) {
		t = t.replace(reg, "");
	}
	return !t;
}

console.log(fn("(){}[]")); // True
console.log(fn("([{}])"));  // True
console.log(fn("(}")); //  False
console.log(fn("[(])")); //  False
console.log(fn("[({})](]")); // False
