function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Assume the current index is the minimum
        let minIndex = i;
        // Find the index of the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        // console.log(arr[i], arr[minIndex]);
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        // console.log("swapped::>",arr[i], arr[minIndex]);

    }
}

// Example usage
const myArray = [64, 34, 25, 12, 22, 11, 90];
selectionSort(myArray);

console.log("Sorted array:", myArray);
