let exp = "%";
let a = 10;
let b = 3;
switch(exp) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    default:
        console.log("invalid input");
        break;
}