"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare mutable variables for shift and pop values
let shiftValue;  // To store the first value removed
let popValue;    // To store the last value removed

// References to DOM elements for output
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const answerSixEl = document.getElementById("answer-six");
const submissionBtn = document.getElementById("submission-btn");

// Function to update the first output (Todos list)
function updateAnswerOne() {
    answerOneEl.textContent = todos.join(", ");
}

// Function to output the third value in the todo array
function updateAnswerTwo() {
    answerTwoEl.textContent = todos[2]; // The third element (index 2)
}

// Function to remove the last value and store it in popValue
function removeLastValue() {
    popValue = todos.pop();
}

// Function to update the array display after removing the last value
function updateAnswerThree() {
    answerThreeEl.textContent = todos.join(", ");
}

// Function to reverse the todo array
function reverseTodoList() {
    todos.reverse();
}

// Function to update the array display after reversing it
function updateAnswerFour() {
    answerFourEl.textContent = todos.join(", ");
}

// Function to remove the first value and store it in shiftValue
function removeFirstValue() {
    shiftValue = todos.shift();
}

// Function to add shiftValue and popValue to the end of the todo array
function addShiftAndPopValues() {
    todos.push(shiftValue, popValue);
}

// Function to update the final todos list after adding shift and pop values
function updateAnswerFive() {
    answerFiveEl.textContent = todos.join(", ");
}

// Function to output the final todos list in answer-six
function updateAnswerSix() {
    answerSixEl.textContent = todos.join(", ");
}

// Function to render the output after all operations are performed
function render() {
    updateAnswerOne();      // Output the initial todos list
    updateAnswerTwo();      // Output the third todo
    removeLastValue();      // Remove the last value and store in popValue
    updateAnswerThree();    // Output the todos list after removal
    reverseTodoList();      // Reverse the array
    updateAnswerFour();     // Output the reversed todos list
    removeFirstValue();     // Remove the first value and store in shiftValue
    addShiftAndPopValues(); // Add shiftValue and popValue to the end
    updateAnswerFive();     // Output the final todos list
    updateAnswerSix();      // Final output for todos after all operations
}

// Event listener for the button to trigger the render function
submissionBtn.addEventListener("click", function () {
    render(); // Call render function when the button is clicked
});

