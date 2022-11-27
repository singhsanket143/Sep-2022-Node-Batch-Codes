class Product {
    discount = 10; // data member
    constructor(n, p) {
        // constructor function to create new real life instances called as object
        // When we create an object this constructor is the first function that gets called
        this.name = n; // data member
        this.price = p; // data member
    }

    // member function
    displayProduct() {
        console.log(this.name, this.price, this.discount); 
    }

    buyProduct() {

    }
}

let iphone = new Product("Iphone 11", 500000);
let macbook = new Product("Macbook air", 100000);
iphone.displayProduct();
// console.log(iphone, macbook);
// console.log(typeof macbook);

// let obj = {
//     name: "Sanket",
//     age: 24
// }