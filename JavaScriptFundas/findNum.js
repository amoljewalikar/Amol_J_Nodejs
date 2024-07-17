let a = "123 xyz";
// console.log("parseInt(a):", parseInt(a))
let num = "";
for(i = 0; i < a.length; i++){
    if(Number(a[i])) {
        // console.log(a[i]);
        num += a[i];
    }else{
        console.log("a.charCodeAt(a[",i,"])", a.charCodeAt(i));
    }
}
console.log(num, typeof(num));
console.log("Result:", Number(num));

