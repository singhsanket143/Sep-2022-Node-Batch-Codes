// how can we write a function to download some data from a url, and not use callbacks
// instead use promises ? 
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from ", url);
        setTimeout(function process() {
            let data = "Dummy data";
            console.log("Completed fetching the data");
            // somehow we need to return the data ? - TODO 
            resolve(data); // return some data on success 
        }, 4000);
    });
}


function fetch1(url) {
    return new Promise(function (resolve, reject) {
        // any logic
        for(let i = 0; i < 10000000000; i++) {
            // some task
        }
        console.log("Completed");
        resolve("sanket");
    });
}

