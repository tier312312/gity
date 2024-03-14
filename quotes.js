// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to invent it. - Alan Kay"
];

// Function to generate a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Generate and display a random quote
const randomQuote = getRandomQuote();
console.log("Random Quote:", randomQuote);
