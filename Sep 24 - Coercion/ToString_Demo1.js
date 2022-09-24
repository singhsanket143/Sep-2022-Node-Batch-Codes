console.log("Sanket" + "Singh");
/**
 * Both of them are already a string, 
 * so toprimitive conversion will also be a string
 * and we concatenate them
 */
console.log(undefined + "node");
/**
 * undefined -> "undefined"
 * "undefined"+"node" -> "undefinednode"
 */
console.log("5" + null);
/**
 * One of them is already a string, so both of them becomes a string
 * "5" + "null" -> "5null"
 */
console.log("sanket" + true);

console.log("sanket" + [null]);