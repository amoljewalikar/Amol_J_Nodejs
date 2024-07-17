console.log("Type conversion examples:");
let num = 6;
console.log("num = 6:",num , typeof num);
let num_str = String(num);               //Explicit conversion
console.log("num_str = String(num):", num_str , typeof num_str);
let num1 = Number("123")                //Explicit conversion
console.log("num1 = Number(\"123\"):", num1 , typeof num1);

let x;
console.log("x:", x, "typeof x:", typeof x);
x = !x;
console.log("x:", x, "typeof x:", typeof x);
x = 7;
console.log("x:", x, "typeof x:", typeof x);
console.log("Type coersion example i.e. operators should be of SAME TYPE");
x = x + "";
console.log("x:", x, "typeof x:", typeof x);
x = x - 2;
console.log("x:", x, "typeof x:", typeof x);
// x = "Amol";
// console.log("x:", x, "typeof x:", typeof x);
x = !x;
console.log("x:", x, "typeof x:", typeof x);

let a = "123 xyz";
console.log("parseInt(a):", parseInt(a));

// Bool datatypes:
console.log("Boolean(7):", Boolean(7));
console.log("Boolean(0):", Boolean(0));   // generally 0:False, 1:True
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(NaN):", Boolean(NaN));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(String):", Boolean(String));
console.log("Boolean('AMOL'):", Boolean("AMOL"));
console.log("Boolean(Number):", Boolean(Number));
console.log("Boolean(Object):", Boolean(Object));
