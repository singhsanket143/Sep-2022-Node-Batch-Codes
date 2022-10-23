function process() {
    console.log("Start");
    setTimeout(function exec() {
        console.log("Executed some task1")
    }, 5000);
    setTimeout(function exec() {
        console.log("Executed some task2")
    }, 5000);
    for(let i = 0; i < 100000; i++) {
        // some task
    }
    console.log("End");
}

process();
console.log("TATA");