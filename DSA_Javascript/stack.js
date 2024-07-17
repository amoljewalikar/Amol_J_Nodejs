class Stack {
  constructor() {
    this.arr = [];
  }

  push(num) {
    this.arr.push(num);
    return this.arr;
  }

  pop(num) {
    this.arr.shift(num); // arr.shift(): removes the first element from an array and returns that removed element.
    return this.arr;
  }

  peek() {
    return this.arr[this.arr.length - 1] || -1;
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  stackSize() {
    return this.arr.length;
  }

  showStack() {
    return this.arr;
  }
}

let s = new Stack();

console.log("Stack isEmpty():", s.isEmpty());
console.log("Stack stackSize():", s.stackSize());
console.log("Peek element of Stack:", s.peek());

s.push(1);
s.push(3);
s.push(5);
s.push(7);
s.push(9);
console.log("Stack:", s.showStack());

console.log("Stack isEmpty():", s.isEmpty());
console.log("Stack stackSize():", s.stackSize());
console.log("Peek element of Stack:", s.peek());

s.pop(1);
s.pop(3);
console.log("After popping, Stack:", s.showStack());
