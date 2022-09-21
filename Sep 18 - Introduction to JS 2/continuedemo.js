for(let i = 0; i < 10; i++) {
    if(i%3 === 0) {
        continue; // this takes you back to the nearest loop
    }
    console.log(i);
}