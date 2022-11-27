let arr = [1,2,3,4];

console.log(typeof arr);

let obj = {
    x: 10,
    y: 20
};
Object.freeze(obj); //neither we can add a new property not update old one
obj.z = 20; 

console.log(obj);

let obj1 = {
    x: 10,
    y: 20
}
Object.seal(obj1); // we cannot add new property but we can update old ones
obj1.x = 30;
obj1.z = 99;

console.log(obj1);

const obj2 = {
    x: 1, y: 2
}

obj2.x = 10;
obj2.z = 99;
obj2 = 99;
console.log(obj2);