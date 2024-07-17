// closure example
// Outer function
const createCounter = function(init) {
    let tmp = init;
    return {
        // inner functions
        increment: () => tmp += 1,
        decrement: () => tmp -= 1,
        reset: () => tmp = init
    }
};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4