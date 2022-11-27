function Product(n, p) {
    this.name = n;
    this.price = p;

    this.display = function () {
        console.log(this.name, this.price, this);
    }

    this.buy = () => {
        console.log(this);
    }
    // assume -> return this
    // return {name: "Sanket", age: 24};
    return 10;
}

const p1 = new Product("iphone", 100000);
// console.log(p1);
console.log("1")
p1.display();
console.log("2")
p1.buy();

// const p3 = new Product("macbook", 1300000);
// p3.display();

// const p2 = Product("ksjfnv", 34345);
// console.log(p2); // undefined 