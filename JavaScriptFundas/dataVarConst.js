// The const keyword was introduced in ES6 (2015)

// Variables defined with const cannot be Redeclared

// Variables defined with const cannot be Reassigned, JavaScript const variables must be assigned a value when they are declared
const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
console.log("value of const PI 1st declaration:", PI);
// PI = PI + 10;   // This will also give an error
// console.log("value of const PI trying to manipulate:", PI);        => TypeError: Assignment to constant variable.

// Variables defined with const have Block Scope

// Constant Objects and Arrays
// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

// You can create a constant array:
console.log("--------------ARRAY--------------------");
const cars = ["Saab", "Volvo", "BMW"];
console.log("cars array:", cars);
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
console.log("Audi pushed in cars array:", cars);

// You can create a const object:
console.log("--------------OBJECT--------------------");
const car = {type:"Fiat", model:"500", color:"white"};
console.log("object car:", car);
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
console.log("owner, colour added in object car:", car);
