function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        // Last i elements are already sorted, so we don't need to check them
        for (let j = 0; j < n - 1 ; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Example usage
const myArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(myArray);

console.log("Sorted array:", myArray);
