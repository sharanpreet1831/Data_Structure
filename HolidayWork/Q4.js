function printMatrix(arr, n, k) {
    let max;
    for (let i = 0; i <= n - k; i++) { // Adjusted loop condition for valid range
        max = arr[i];
        for (let j = 0; j < k; j++) {
            if (arr[i + j] > max) {
                max = arr[i + j];
            }
        }
        console.log(max + " "); // Print the maximum value
    }
}

// Example usage
const arr = [1, 3, -1, -3 , 5, 3, 6, 7];
const n = arr.length;
const k = 3;
printMatrix(arr, n, k);