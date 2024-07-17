let laptop = {
    cpu: 'i9',
    ram: '24GB',
    brand: 'DELL',
    greet: function(a) {
        console.log("square of",a,"is:",a ** 2)
    }                                               // this is called as METHID bcz it's a part of an Object laptop
}

laptop.greet(5);