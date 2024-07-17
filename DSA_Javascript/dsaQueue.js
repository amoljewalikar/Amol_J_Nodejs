class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(num) {
    this.arr.unshift(num);      // unshift: insert an element or multiple elements at start of an array return length of array.
    return this.arr;
  }

  dequeue(num) {
    if (this.isEmpty()) {
        return "Underflow";     // Queue is empty
    }
    this.arr.pop(num);
    return this.arr;
  }

  // Peek the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
        return "Queue is Empty";     // Queue is empty
    }
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  size() {
    return this.arr.length;
  }

  showQueue() {
    return this.arr;
  }
}

let q = new Queue();

console.log("Queue isEmpty():", q.isEmpty());
console.log("Queue:", q.showQueue());
console.log("Queue size:", q.size());
console.log("Queue front element:", q.front());

q.enqueue(1);
q.enqueue(3);
q.enqueue(5);
q.enqueue(7);
q.enqueue(9);
console.log("Queue isEmpty():", q.isEmpty());
console.log("Queue:", q.showQueue());
console.log("Queue size:", q.size());
console.log("Queue fornt element:", q.front());

q.dequeue(1);
q.dequeue(3);
console.log("After deque, Queue:", q.showQueue());
