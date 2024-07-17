// function* iteratorFunc() {
//     let count = 0;
//     for (let i = 0; i < 2; i++) {
//         count++;
//         yield i;
//     }
//     return count;
//   }
  
//   let iterator = iteratorFunc();
//   console.log(iterator.next()); // {value:0,done:false}
//   console.log(iterator.next()); // {value:1,done:false}
//   console.log(iterator.next()); // {value:2,done:false}


function* foo() {
    yield 3;
    return;
    yield 4;
    return;
}

// console.log(foo(), typeof foo());
console.log(foo().next());
console.log(foo().next());
console.log(foo().next());
console.log(foo().next());