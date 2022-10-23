function process(){
    console.log("start");
    for(var i=1;i<3;i++){
        setTimeout(function exec(){
            console.log("executed after some time");
        },3000);
        console.log("inside for loop");
    }

    for(var j=0;j<1000000;j++){

    }

    console.log("end");
}
process();