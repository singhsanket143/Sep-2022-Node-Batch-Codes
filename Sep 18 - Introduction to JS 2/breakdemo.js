for(let i = 1; i < 20; i++) {
    if(i%7 === 0) {
        console.log("breaking now");
        break;
    }
    console.log(i);
}

for(let i = 0; i < 5; i++) {
    let str = "";
    for(let j = 0; true; j++ ) {
        str += "*";
        if(j == i) {
            break;
        }
    }
    console.log(str);
}