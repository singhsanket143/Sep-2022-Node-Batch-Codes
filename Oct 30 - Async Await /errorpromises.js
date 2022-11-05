function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);
        setTimeout(function processDownloading() {
            let data = "Dummy data";
            console.log("Download completed");
            reject(data);
            // console.log("hello");
            // resolve("sanket");// these lines will not be executed as promise is fulfilled only once
            // resolve(12345);
        }, 7000);
    });
}


let x = fetchData("fksbkvf");
x.then(function sucess(value) {
    console.log("value is", value);
}, function err(err) {
    console.log("error is", err);
})
.then(function success1(v) {
    console.log("value again is", v);
})
