// Promises are the special objects in Javascript.
// We use constructor to define a promise:-  new Promise(function(resolve, reject){ //code ... })
// Promise will be given Priority over callback queue

function f1() {
    console.log('In f1()');
}

function f2() {
    console.log('In f2()');
}

function main() {
    console.log('In main');
    
    setTimeout(f1, 2000);       // browser api, callback OR task queue
    // setTimeout(f1, 0);       // browser api, callback OR task queue

    new Promise(function(resolve, reject){
        resolve("I am resolved");
    }).then(resolve => { console.log(resolve);})        // Job queue/ Micro Task

    f2();
}

main();