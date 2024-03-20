// Function to find the GCD (Greatest Common Divisor) of two numbers using the Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

// Test cases
const pairs = [
    [24, 36],
    [17, 23],
    [48, 60],
    [100, 75]
];

// Calculate and display the GCD for each pair of numbers
pairs.forEach(pair => {
    console.log(`GCD of ${pair[0]} and ${pair[1]} is:`, gcd(pair[0], pair[1]));
});
