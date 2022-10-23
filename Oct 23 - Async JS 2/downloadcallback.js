// function fetchCustom(url) { // we are mimicing the function
//     // download content of the url
//     // this downloading can take sometime, 
//     // we will download the content from url, and then whatver is the result, we will pass to the callback
//     console.log("Starting downlaoding from", url);
//     setTimeout(function process() {
//         console.log("Download completed");
//         let response = "Dummy data";
//         return response;
//     }, 3000);
// }

// const response = fetchCustom("www.google.com");
// console.log(response);
// console.log("End of file");

function fetchCustom(url, fn) { // we are mimicing the function
    // download content of the url
    // this downloading can take sometime, 
    // we will download the content from url, and then whatver is the result, we will pass to the callback
    console.log("Starting downlaoding from", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn(response);
    }, 3000);
}

const response = fetchCustom("www.google.com", function callback(response) {
    console.log("download content is", response);
    console.log("End of file");
});
