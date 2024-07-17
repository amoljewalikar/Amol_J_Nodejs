console.log("Pizza(type) constructor function may be converted to a class declaration.ts(80002)");
function Pizza(custName, type){
    this.type = type;
    this.name = custName;
}

Pizza.prototype.available = false;  
// => prototype : we are actually adding method/behaviour and property to function object  i.e. to __proto__

Pizza.prototype.greet = function() {
    return this.name + ", how are you?"
};

const myPizza = new Pizza("Amol", "veg");   // => constructor
console.log(myPizza);
console.log("myPizza.greet():",myPizza.greet());
console.log("myPizza.available:",myPizza.available);



const myPizza2 = new Pizza("Utkarsh","Non-veg");
myPizza2.__proto__.available = true;
console.log("myPizza2.available:",myPizza2.available);
console.log("myPizza2.greet():",myPizza2.greet());


const func = myPizza.greet
console.log("overrides the myPizza with myPizza2, func:",func.call(myPizza2));

// Pizza {type: 'Veg'}
// type: "Veg"
// [[Prototype]]: Object                => Prototype : Object
// constructor: ƒ Pizza(params)
// [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toSt