// Function to remove duplicate elements from an array while preserving order
function removeDuplicates(arr) {
    const uniqueArray = [];
    const seen = new Set();

    for (let item of arr) {
        if (!seen.has(item)) {
            uniqueArray.push(item);
            seen.add(item);
        }
    }

    return uniqueArray;
}

// Test case
const array = [1, 2, 3, 2, 4, 1, 5, 6, 5];
console.log("Array with duplicates:", array);
console.log("Array with duplicates removed:", removeDuplicates(array));
