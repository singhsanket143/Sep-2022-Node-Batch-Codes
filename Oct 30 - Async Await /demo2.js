async function fun() {
    console.log("entered");
    let x = await Promise.resolve(20);
    
    console.log("exiting");
    return x;
}

console.log("Start");
let val = fun();
val.then(function f(value) {
    console.log("value is", value);
})

console.log("end");