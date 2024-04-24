
// Get references to the buttons and the header
var guessIncrease = document.getElementById("guessIncrease") 
var guessDecrease = document.getElementById("guessDecrease")
var counterHeader = document.getElementById("counter")
var correctAnswerHeader = document.getElementById("correctAnswerHeader")
var guess = document.getElementById("guess")

// The correct number that you will have to guess. Random and between 0-20
var correctNumber = Math.round(Math.random()*20)

// Initialize counter value
var counterValue = 0;

// Function to update the counter value and display it in the header
function updateCounter() {
    counterHeader.textContent = counterValue;
  }

  // Event listener for the increase button
guessIncrease.addEventListener("click", function() {
    if (counterValue < 20) {
    counterValue++; // Increment the counter value by 1
    updateCounter() // Update the displayed value
    }
})
  
  // Event listener for the decrease button
  guessDecrease.addEventListener("click", function() {
    if (counterValue > 0) {
    counterValue--; // Decrement the counter value by 1
    updateCounter() // Update the displayed value
    }
})

// Submit guess
guess.addEventListener("click", function() {
    var submittedGuess = counterValue; // Storing the value of counterValue in a separate variable
    if (submittedGuess === correctNumber) {
        correctAnswerHeader.textContent = "Congratulations! You guessed the correct number: " + correctNumber;
    } else {
        correctAnswerHeader.textContent = "Wrong guess. Try again.";
    }
})




