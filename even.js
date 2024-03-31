// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
const num1 = 10;
const num2 = 7;

// Check if the numbers are even or odd
const result1 = checkEvenOrOdd(num1);
const result2 = checkEvenOrOdd(num2);

// Display the results
console.log(`${num1} is ${result1}`);
console.log(`${num2} is ${result2}`);
