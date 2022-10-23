function fun(){
    console.log("Fun called");
    setTimeout(function exec1(){
        console.log("Inside the 5s timeout")
    },7000);
    setTimeout(function process2(){
        console.log("Inside the 3s timeout")
    },3000);
}
fun();
// for(let i = 0; i < 10000000000; i++) {
//     // some task
// }
setTimeout(function last(){
    console.log("Last timeout of 7s")
},0);