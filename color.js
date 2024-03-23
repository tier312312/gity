// Function to generate a random color in hexadecimal format
function generateRandomColor() {
    // Generate random values for red, green, and blue components
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert the RGB values to hexadecimal format
    const redHex = red.toString(16).padStart(2, '0'); // Ensure two digits for red
    const greenHex = green.toString(16).padStart(2, '0'); // Ensure two digits for green
    const blueHex = blue.toString(16).padStart(2, '0'); // Ensure two digits for blue

    // Concatenate the hexadecimal values to form the color code
    const color = `#${redHex}${greenHex}${blueHex}`;

    return color;
}

// Generate and display a random color
console.log("Random Color:", generateRandomColor());
