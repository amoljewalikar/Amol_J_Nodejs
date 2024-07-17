console.log("function with no parameter passing");
function greet(){
    console.log("Hello World!");
}

greet()

console.log("\nfunction with passing parameter(s)");
function greetings(user){
    return `Hello, ${user}!!`;
}

let user = "AMOL"
let str = greetings(user)
console.log(str);

