// This constructor function may be converted to a class declaration.ts(80002)
function Alien(name, tech){
    this.name = name;
    this.tech = tech;
    //method in constructor function
    this.work = function greet(){
        console.log("Hello World!! from greet() through 'this.work' ");
    }
    return "Hello";  // it will not it skips directly i.e. no impact of return
}      

let a1 = new Alien('Amol', 'Nodejs');
console.log(a1);
a1.work();
// a1.tech = 'Go lang';
// console.log(a1);

// let a2 = new Alien('Utkarsh', 'Python');
// console.log(a2, typeof a2);
// console.log(typeof Alien);