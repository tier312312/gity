// Function to generate an array of random numbers
function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return randomArray;
}

// Function to sort an array of numbers in ascending order
function sortArrayAscending(array) {
    return array.slice().sort((a, b) => a - b);
}

// Generate an array of 10 random numbers between 1 and 100
const randomNumbers = generateRandomArray(10, 1, 100);

// Display the unsorted array
console.log("Unsorted Array:", randomNumbers);

// Sort the array in ascending order
const sortedNumbers = sortArrayAscending(randomNumbers);

// Display the sorted array
console.log("Sorted Array:", sortedNumbers);
