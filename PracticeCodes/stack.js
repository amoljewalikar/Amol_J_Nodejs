const readline = require('readline');
let prompt = require('prompt-sync')();

// Create interface for reading and writing to the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arr_stack = [];

function stackOperations(input) {
    switch(input){
    case "1":
        let n = Number(prompt("Enter number of elements to push in stack:"));
        for (let i = 0; i < n; i++) {
            ele = Number(prompt("Enter an element:"));
            arr_stack.push(ele);
        }
        break;
    case "2":
        console.log("Popped element:", arr_stack.pop());
        break;
    case "3":
        if(arr_stack == '')
            console.log("\nStack is Empty !!");
        else
            console.log("Peek/Top element:", arr_stack[arr_stack.length - 1]);
        break;
    case "4":
        if(arr_stack == '')
            console.log("\nStack is Empty !!");
        else
            console.log("\nStack is NOT Empty !!");
        break;
    case "5":
        if(arr_stack == '')
            console.log("\nStack is Empty !!");
        else
            for (let i = arr_stack.length - 1; i >= 0 ; i--) {
                console.log(arr_stack[i]);
            }
        break;
    case "6":
        console.log("Exit");
        rl.close();
        process.exit(0);
    default:
        console.log("Invalid input");
    }
}

function promptUser() {
    rl.prompt("Hello:")
    rl.question(`\n1.Push\n2.Pop\n3.Peek/Top\n4.IsEmpty\n5.Get Stack\n6.Exit\nEnter your input: `, (answer) => {
        stackOperations(answer);
        promptUser(); // Continue prompting for input
    });
}

promptUser();