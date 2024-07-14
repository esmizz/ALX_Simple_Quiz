// JavaScript Code for Quiz Application

// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
