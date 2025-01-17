"use strict";

const todos = [
    "Wash the dishes",
    "Clean the gutters",
    "Mow the yard",
    "Do some coding",
    "Rake the leaves",
];

// Declare mutable variables without assigning values
let shiftValue;  // Mutable variable for the first value to be removed
let popValue;    // Mutable variable for the last value to be removed

// References to DOM elements for output
const answerOneEl = document.getElementById("answer-one");
const answerTwoEl = document.getElementById("answer-two");
const answerThreeEl = document.getElementById("answer-three");
const answerFourEl = document.getElementById("answer-four");
const answerFiveEl = document.getElementById("answer-five");
const submissionBtn = document.getElementById("submission-btn");

function updateAnswerOne() {
    // Output the todo array
    answerOneEl.textContent = `Todos: ${todos.join(", ")}`;
}

function updateAnswerTwo() {
    // Output the third value in the todo array
    answerTwoEl.textContent = `Third Todo: ${todos[2]}`;
}

function removeLastValue() {
    // Remove the last value of the array and store it in popValue
    popValue = todos.pop();
}

function updateAnswerThree() {
    // Output the todo array after removing the last value
    answerThreeEl.textContent = `Updated Todos: ${todos.join(", ")}`;
}

function reverseTodoList() {
    // Reverse the todo array
    todos.reverse();
}

function updateAnswerFour() {
    // Output the reversed todo array
    answerFourEl.textContent = `Reversed Todos: ${todos.join(", ")}`;
}

function removeFirstValue() {
    // Remove the first value of the array and store it in shiftValue
    shiftValue = todos.shift();
}

function addShiftAndPopValues() {
    // Add shiftValue and popValue to the end of the todo array in that order
    todos.push(shiftValue, popValue);
}

function updateAnswerFive() {
    // Output the todo array after modifying it
    answerFiveEl.textContent = `Final Todos: ${todos.join(", ")}`;
}

function render() {
    // Perform the required steps and update the outputs
    updateAnswerOne(); // Step 1: Output the initial todos
    updateAnswerTwo(); // Step 2: Output the third value
    removeLastValue(); // Step 3: Remove the last value and store it
    updateAnswerThree(); // Step 4: Output the array after removal
    reverseTodoList(); // Step 5: Reverse the array
    updateAnswerFour(); // Step 6: Output the reversed array
    removeFirstValue(); // Step 7: Remove the first value and store it
    addShiftAndPopValues(); // Step 8: Add shiftValue and popValue back
    updateAnswerFive(); // Step 9: Output the final array
}

// Event listener for the submission button
submissionBtn.addEventListener("click", function () {
    render();
});
