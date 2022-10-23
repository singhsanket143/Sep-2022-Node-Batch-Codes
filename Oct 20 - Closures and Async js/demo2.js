function todo(task)
{
    console.log("Starting todo");
    setTimeout(function fun(){
        console.log("completed",task);

    },5000);
    task = "dayananda";
    console.log("end of todo");
}
console.log("Starting");
todo("assignments");
console.log("Ending");