// Function to find the maximum element in an array
function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let max = arr[0]; // Initialize max with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }
    return max;
}

// Test cases
const array1 = [3, 7, 2, 8, 1];
const array2 = [-1, -5, -3, -2];
const array3 = [];

// Display the maximum element for each test array
console.log("Maximum element in array1:", findMax(array1));
console.log("Maximum element in array2:", findMax(array2));
console.log("Maximum element in array3:", findMax(array3));
