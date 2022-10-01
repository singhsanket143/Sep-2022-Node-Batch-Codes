function fun() {
    console.log(x); // why we get undefined ? -> lexical scoping
    var x = 10;
    console.log(x);
}

{
    var y = 8; // becomes global due to var
}

console.log(y);

if(true) {
    var z = 30;
}
if(false) {
    var a = 20;
}

console.log(z);
console.log(a);
fun();