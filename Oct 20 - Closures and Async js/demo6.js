function test() {
    for(var i = 0; i < 3; i++) {
        let j = i;
        setTimeout(function exec() {
            console.log(`j : ${j}`); // 'i: ' + i
        }, j*1000);
    }
}

test();