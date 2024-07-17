class LinkedList {
    
    constructor() {
        this.arr = [];
    }
    
    insertAtEnd(num) {
        this.arr.push(num);
        return this.arr;
    }

    insertAtStart(num) {
        this.arr.unshift(num);   // unshift: insert an element or multiple elements at start of an array return length of array.
        return this.arr;
    }

    insertAtIndex(index, num) {
        if (index >= 0 && index <= this.arr.length) 
            this.arr.splice(index, 0, num);             // splice(index, 0, num): insert at specific 'index', 0 indicates no deletion
        return this.arr;                                // of element & num is value to be inserted in array
    }

    deleteElement(num) {
        let index = this.arr.indexOf(num);
        const res = index == -1 ? "Element not found" : "true";

        if (res && (index >= 0 && index <= this.arr.length)) 
            this.arr.splice(index, 1);                          // splice(index, 1): index: index of value to be deleted, 1 number of value
        else return res;                                        // to be deleted, here only given element is deleted. 

        return this.arr;
    }

    showArray() {
        return this.arr;
    }
}

const l = new LinkedList();


console.log("\nl.insertAtEnd(5):",l.insertAtEnd(5));
console.log("l.insertAtEnd(7):",l.insertAtEnd(7));

console.log("\nl.insertAtStart(15):",l.insertAtStart(15));
console.log("l.insertAtStart(16):",l.insertAtStart(16));

console.log("\nl.insertAtIndex(0, 51):",l.insertAtIndex(0, 51));
console.log("l.insertAtIndex(0, 75):",l.insertAtIndex(1, 75));
console.log("l.insertAtIndex(2, 45):",l.insertAtIndex(2, 45));

console.log("\nl.deleteElement(75):",l.deleteElement(75));
console.log("\nl.deleteElement(51):",l.deleteElement(51));

// console.log("\nArray::>",l.showArray());
// console.log("l.insertAtIndex(21, 2):",l.insertAtIndex(22, 125));  // =: NO insertion will happen