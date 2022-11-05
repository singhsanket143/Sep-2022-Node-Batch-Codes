let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))
    }, 5000)
})
p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})