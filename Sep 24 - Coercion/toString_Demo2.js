console.log("Sanket" + {"a" : 10});
/**
 * "Sanket" -> is already a primitive
 * {"a": 10} -> is not a primitive, so, we call toPrimitive without a hint, 
 * means hint -> number
 * we first call valueOf on {"a" : 10} -> and it returns same object
 * we call toString -> toStrign will return '[object Object]' which is a string i.e. primitive
 * 
 * "Sanket" + "[object Object]" -> "Sanket[object Object]"
 */

console.log(10 - {"a": 45});
/**
 * 10 is already a number
 * {"a": 45} is going to get converted ToNumber, and this is an object,
 * for object we call ToPrimitive with hint Number
 * first we call valueOf -> it returns the same object -> {"a": 45}
 * then we call toString -> it return '[object Object]' which is primitive
 * So call ToNumber on '[object Object]' again which gives NaN
 * 10 - NaN = Nan
 * 
 */

let x = {"b": 90, valueOf() {return 2;}, toString() {return "custom";}}
console.log(x - 10);
/**
 * x is an object, we need to pass it to ToPrimitive with hint Number
 * we call valueOf -> it return 2; which is a primtitive
 * x becomes 2, 10 is already a number
 * 2 - 10 = -8
 */

console.log(x + "sanket"); // 2 + "Sanket"


console.log("sanket" + {"a": 90, valueOf() {return {}}, toString() {return {}}});
