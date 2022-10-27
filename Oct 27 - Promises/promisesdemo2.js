function demo1() {
    return new Promise(function (resolve, reject) {
        console.log("hi");
        setTimeout(function process() {
            console.log("wohoo, task done");
            resolve("Students are the best");
        }, 10000);
        console.log("by");
    })
}

function demo2(val) {
    return new Promise(function (resolve, reject) {
        console.log("Start");
        setTimeout(function process() {
            console.log("Completed timer");
            if(val%2 == 0) {
                // even number
                resolve("Even");
            } else {
                // odd number
                reject("Odd");
            }
        }, 10000);
        console.log("Somewhere");
    });
}