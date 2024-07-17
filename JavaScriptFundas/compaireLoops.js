console.log("Best case to use for:")
for(let i = 0; i < 10; i++){
    if(i%3 === 0)
        console.log(i)
}

console.log("Best case to use while is when you don't know the end point of num/string/list")
let num = 13256
while(num > 0){
    console.log(num % 10);
    num = parseInt(num / 10);
}