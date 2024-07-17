// // 1] Ternary
const isNum = 5;
let number = (Number(isNum)) ? 'true' : false;
console.log(`Got the number? : ${number}`);

// 2] Shortcuts &&
const val = true;
val && console.log("val got the true.");

// 3] Shortcut
function foo(){
    const price = 5.99;
    return (price || "Get it for free !");
}


// // 4] return
const weather = "Sunny";
if(weather !== "Sunny") return;
console.log("let's walk.");


console.log("foo(), price:", foo());