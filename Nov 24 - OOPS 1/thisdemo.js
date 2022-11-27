const obj = {
    name: "Sanket",
    display: function () {
        console.log(this, "is the calling site");
    }
}

const obj1 = {
    name: "Sarthak",
    display: () => {
        console.log(this, "is the calling site");
    }
}

obj.display();

obj1.display()