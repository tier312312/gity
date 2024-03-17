// Function to count the frequency of each character in a string
function countCharacterFrequency(str) {
    const frequencyMap = {};

    // Iterate through each character in the string
    for (let char of str) {
        // Increment the count of the character in the frequency map
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    return frequencyMap;
}

// Test case
const testString = "hello world";
const frequency = countCharacterFrequency(testString);
console.log("Character frequency in the string:", frequency);
