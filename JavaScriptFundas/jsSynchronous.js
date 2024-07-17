function f1() {
    console.log('In f1()');
}

function f2() {
    f1();
    console.log('In f2()');
}

function f3() {
    f2();
    console.log('In f3()');
}

f3();