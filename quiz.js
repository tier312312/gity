// Define the quiz questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 1 // Index of correct answer in options array
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1 // Index of correct answer in options array
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: 0 // Index of correct answer in options array
    }
];

// Function to display the quiz questions and get user responses
function runQuiz() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i].question;
        const options = questions[i].options;
        const correctAnswerIndex = questions[i].correctAnswer;

        // Display the question and options
        console.log(`Question ${i + 1}: ${question}`);
        for (let j = 0; j < options.length; j++) {
            console.log(`${j + 1}. ${options[j]}`);
        }

        // Get user response
        const userResponse = prompt("Enter the number of your answer:");

        // Validate user response and check if it's correct
        if (userResponse !== null && !isNaN(userResponse)) {
            const userAnswerIndex = parseInt(userResponse) - 1;
            if (userAnswerIndex === correctAnswerIndex) {
                console.log("Correct!");
                score++;
            } else {
                console.log("Incorrect! The correct answer is:", options[correctAnswerIndex]);
            }
        } else {
            console.log("Invalid response. Skipping question.");
        }
    }

    // Display quiz results
    console.log(`Quiz completed! Your score is: ${score}/${questions.length}`);
}

// Run the quiz
runQuiz();
