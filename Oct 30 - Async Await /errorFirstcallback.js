// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function fetchCustom(url, fn) { // we are mimicing the function
    // download content of the url
    // this downloading can take sometime, 
    // we will download the content from url, and then whatver is the result, we will pass to the callback
    console.log("Starting downlaoding from", url);
    setTimeout(function process() {
        console.log("Download completed");
        let response = "Dummy data";
        fn({error: "some error"},response);
    }, 3000);
}

fetchCustom("www.google.com", function (err, response) {
    if(err) {
        console.log("error is", err);
        return;
    }
    console.log("response is", response);
})
