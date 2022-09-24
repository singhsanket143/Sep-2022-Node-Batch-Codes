console.log(12 - 4); // both of them are already a number, so we just subtract
console.log(undefined - 3); 
/**
 * undefined is not a valid number, to we make it undergo ToNumber abstract operation
 * ToNumber(undefined) -> NaN
 * NaN - 3 -> and for any number when you do any operation with NaN it results NaN
 * NaN - 3 -> NaN
 */
console.log(null - 5);
/**
 * null is not a valid number, so we make it undergo ToNumber abstract operation
 * ToNumber(null) -> +0
 * +0 - 5 -> -5
 */

console.log("132" - 10);
/**
 * "132" is a string, so we make it undergo ToNumber abstract operation
 * ToNumber("132") -> 132
 * 132 - 10 = 122
 */

console.log("12fd" - 20);
/**\
 * "12fd" is a string, so we make it undergo ToNumber abstract operation
 * ToNumber("12fd") -> NaN because this string cannot be parsed a number
 * NaN - 20 -> NaN
 */
// console.log(Symbol("123") - 30); // gives typeerror
console.log(4 - true);
/**
 * true is a boolean, so we make it undergo ToNumber abstract operation
 * ToNumber(true) -> 1
 * 4 - 1 = 3
 */
console.log("0xf" - 1);
/**
 * "0xf", is a string, but in the starting we have 0x which denotes start of hexadecimal value
 * so if we can convert this string to a valid hexadecimal , we will do it
 * ToNumber("0xf") -> 15
 * 15 - 1 = 14
 */
console.log("0xz" - 1);
/**
 * "0xz" is having 0x in the start to denote hexadecimal, but z is not a valid hexadecimal, so we get NaN
 * ToNumber("0xz") -> NaN
 * NaN - 1 = NaN
 */
console.log("abcd" - 2);
console.log("0xabcd" - 2);
console.log("0o11" - 1);
/**
 * "0o11" is a string, and can become a valid octal number
 * ToNumber("0o11") -> 9
 * 9 - 1 = 8
 */