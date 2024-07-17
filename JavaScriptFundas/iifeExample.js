(function() {
    console.log("Hello IIFE: Immediately invoked function.")
})();



// In ECMAScript 5 strict mode is introduces.

//  1] SyntaxError:     Unexpected strict mode reserved word
// "use strict";
// let function = 5;
// console.log(function);

// 2] SyntaxError:      Unexpected token 'function'
// let function = 5;
// console.log(function);
