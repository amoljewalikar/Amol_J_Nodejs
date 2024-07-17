// let i = 0;
// function show(){
//     console.log("Hello", i);
//     i++;
//     if(i < 5)
//         show();
// }
// show();

let f = 1;
function fact(n){
    if(n == 0)
        return 1;
    else
        return n * fact(n - 1);
}

console.log("RECURSION -> Factorial is:",fact(5));