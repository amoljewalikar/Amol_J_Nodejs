// Promise states(Internal)
// 1) pending: When execution starts
// 2) fulfilled: When resolves successfully
// 3) rejected: When promise rejected

// fulfilled / rejected -> setteled

// Results:
// undefined - Initial phase when state is pending
// value: When promise resolved successfully
// error: When promise rejected

// handler methods used with promise: .then(), .catch(), .finally()

let promise = new Promise(function(resolve, reject){
    let val = 5;
    
    setTimeout(function(){
    // reject(new Error('Not a number'));
    resolve(val);
    }, 2000)
})


// let promiseError = new Promise(function(resolve, reject){
//     reject(new Error("Not a number"));
// })

const mainResult = () => {
    promise.then(function(result) {
        console.log(`Got the number: ${result}`);
    }).catch(function(error) {
        console.log(`Error: ${error.message}`);
    })
}

mainResult();