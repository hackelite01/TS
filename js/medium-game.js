// Game variables
let words = ['apple', 'banana', 'cherry', 'orange', 'grapes', 'pineapple']; // Example word list (replace with actual word list)
let currentWordIndex = 0;
let score = 0;
let time = 60;

// DOM elements
const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

// Initialize game
function initGame() {
    showWord();
    userInput.addEventListener('input', checkInput);
    setInterval(updateTimer, 1000);
}

// Show current word
function showWord() {
    wordDisplay.textContent = words[currentWordIndex];
}

// Check user input
function checkInput() {
    if (userInput.value.toLowerCase() === words[currentWordIndex]) {
        score++;
        scoreDisplay.textContent = score;
        currentWordIndex = Math.floor(Math.random() * words.length);
        showWord();
        userInput.value = '';
    }
}

// Update timer
function updateTimer() {
    if (time > 0) {
        time--;
        timerDisplay.textContent = time + ' seconds';
    } else {
        gameOver();
    }
}

// Game over
function gameOver() {
    alert('Game over! Your final score is ' + score);
    // Redirect to profile page or another page
    window.location.href = 'profile.html';
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', initGame);