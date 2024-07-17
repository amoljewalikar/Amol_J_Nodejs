let laptop = {
    cpu: 'i9',
    ram: '24GB',
    brand: 'DELL',
    greet: function() {
        console.log("cpu:",this.cpu)
        console.log("ram:",this.ram)
        console.log("brand:",this.brand)
    }                                              
}

laptop.greet()
// this represents current object

