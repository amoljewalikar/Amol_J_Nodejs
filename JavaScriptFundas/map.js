let m = new Map();

m.set("Amol", "Nodejs Dev");
m.set("Rahul", "ETL Dev");
m.set("Harshal", "ERP Dev");

console.log(m);
console.log("m.has(\"Rahul\"):",m.has("Rahul"));
console.log("m.get('Harshal'):", m.get('Harshal'),"\n");
console.log("for - of");
for(let [k,v] of m){
    console.log(k,":",v);
}
console.log("\nforEach");
m.set("Amol", "FullStack Dev");   // updates the value here
m.forEach((v, k) => {
    console.log(k,":",v);
});