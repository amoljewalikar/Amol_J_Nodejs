function f1() {
    console.log('In f1()');
}

function f2() {
    console.log('In f2()');
}

function main() {
    console.log('In main');

    setTimeout(f1, 5000);      // browser api, callback OR task queue
    // setTimeout(f1, 0);      // browser api, callback OR task queue
   
    console.log("f1() call with setTimeout(f1(), 5000), executed after f2()");
    
    f2();
}

main();