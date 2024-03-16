// Function to check if a year is a leap year
function isLeapYear(year) {
    // Leap years are divisible by 4
    // Except for years divisible by 100, unless they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Test cases
const years = [2020, 2021, 2000, 1900, 1600];

// Check if each year is a leap year and display the result
years.forEach(year => {
    console.log(`${year} is a leap year:`, isLeapYear(year));
});
