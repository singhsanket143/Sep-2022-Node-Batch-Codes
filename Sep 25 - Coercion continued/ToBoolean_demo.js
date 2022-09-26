console.log(!0); 
/**
 * 0 -> false
 * ToBoolean(0) -> false
 * !0 -> true
 */
console.log(!(-4));
/**
 * -4 -> truthy
 * ToBoolean(-4) = true
 * !(-4) -> !true -> false
 */
console.log(!{});
/**
 * {} -> truthy
 * ToBoolean({}) -> true
 * !true -> false
 */
console.log(!console.log(0));