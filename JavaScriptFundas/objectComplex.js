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

console.log(alien.laptop);
console.log(alien.laptop.brand);
console.log(alien.laptop.brand.length);


console.log(alien?.laptop?.brand);      // => ? will check the key exists or not OW: error will be thrown by system

console.log("-------------delete key from object-------------");
delete alien.work_exp
console.log(alien);


