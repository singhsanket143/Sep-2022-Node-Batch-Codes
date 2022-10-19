function mapper(arr, fn) {
    /**
     * arr -> is going to be an array of elementsd
     * fn -> callback function which expects two arguments value and index
     */
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        // i-> index, arr[i] -> value
        let res = fn(arr[i], i);
        result.push(res);
    }
    return result;
}

let arr = [1,2,3,4,5];
let x = mapper(arr, function cuber(v, i) {
    console.log(v, v*v*v, i);
    return v*v*v;
});

console.log(x, arr)