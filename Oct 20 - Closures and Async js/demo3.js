function a(name){
    return function b(){
      console.log(name);
    }
}

let x = a("Sanket");
for(let i = 0; i < 10000000000; i++) {
    // something
}
console.log(x);
x();