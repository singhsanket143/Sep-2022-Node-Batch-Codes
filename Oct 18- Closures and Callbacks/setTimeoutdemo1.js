let id1 = setTimeout(function execute1() {
    // some task
    console.log("task completed 1");
}, 10000);

let id2 = setTimeout(function execute2() {
    // some task
    console.log("task completed 2");
    clearTimeout(id1);
}, 5000);
