function fun() {
    return new Promise(function f(resolve, reject) {
        setTimeout(function process(){
            console.log("resolved");
            resolve(123);
        }, 5000);
    })
}

let x = fun();
x.then(function exec(value) {
    console.log("Value is", value);
    for(let i = 0; i < 10000000000; i++) {}
    return 100;
});

x.then(function exec2(value) {
    console.log("yo the value is", value);
    return 200;
});