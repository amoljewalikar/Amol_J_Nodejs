console.log("use strict example:\n");

// function myFun() {
//     "use strict";                                       
//     //  output:-  inside myFun(): [String: 'amol'] object
//     // inside myFun(): [Number: 25] object
//     // if 'this' is null or undefined it will be converted to global
//     // if 'this' is primitive datatypes => returns its Object type
//     console.log("inside myFun():", this.length, typeof this);
// }

// myFun.call("amol jewalikar");
// // myFun.call(25);
// // myFun.call(null)  => javascript ignores null here

// interview question

function f1(){
    "use strict";
    return typeof this;
}

function f2(){
    return typeof this;
}

console.log("f1.call(\"1\"): ",f1.call("1")); // returns primitive datatype
console.log("f2.call(\"1\"): ",f2.call("1")); // returns Object type of 1
console.log("f1.call(\"1\") === f2.call(\"1\"):",f1.call("1") === f2.call("1"));


function f3(){
    "use strict";
    return this.myVar = 100;
}

let Obj = new f3()          //=> need to use new keyword
console.log("Obj:", Obj);