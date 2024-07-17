// customer
orderPizza('Veg', 'CheeseBurst', function(msg) {
    console.log(msg);
});


// Pizza station
function orderPizza(type, name, callback) {
    console.log(`Order: ${type} ${name} Pizza is ordered.`);

    setTimeout(function() {
        const msg = `Order Confirmed: ${type} ${name} Pizza order received.`
        callback(msg);
    }, 2000);

    setTimeout(function() {
        const msg = `Preparation: ${type} ${name} Pizza preparation started.`
        callback(msg);
    }, 5000);

    
    setTimeout(function() {
        const msg = `Order Ready: ${type} ${name} Pizza is packed and ready for delivery.`
        callback(msg);
    }, 15000);

    
    setTimeout(function() {
        const msg = `Delivery: ${type} ${name} Pizza is delivered.`
        callback(msg);
    }, 25000);
}