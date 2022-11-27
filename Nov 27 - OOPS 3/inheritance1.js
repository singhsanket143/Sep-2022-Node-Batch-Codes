class Category {
    constructor(c) {
        this.categoryname = c;
    }

    getCategoryName() {
        console.log("category is", this.categoryname);
    }
}

class Product extends Category {
    constructor(n, p, c) {
        super(c);
        this.name = n;
        this.price = p;
    }

    display() {
        console.log("Details of the product are");
        console.log("Name", this.name);
        console.log("price", this.price);
        this.getCategoryName();
    }
}

let p = new Product("iphone", 100000, "electronics");