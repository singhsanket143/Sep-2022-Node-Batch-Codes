let name = "Sanket";
function greet() {
    console.log("greetings !", name);
    var x = 10;
    function test() {
        console.log("test", x);
    }
    test();
    console.log(x);
}

function fun() {
    console.log("have fun! ", name);
}

greet();
fun();