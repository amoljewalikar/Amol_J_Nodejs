let alien = {
    name: 'amol',
    tech: 'Nodejs',
    work_exp: 2,
    laptop: {
        cpu: 'i7',
        ram: '24GB',
        brand: "DELL"
    }
};
console.log("---------for in loop for OBJECT-----------");
for(let key in alien){
    console.log(key, ": ", alien[key]);
}
console.log("\nAccessing alien['laptop']");
for(let key in alien['laptop']){
    // console.log(key,  ": ", alien.laptop[key]);
    console.log(key,  ": ", alien['laptop'][key]);
}
