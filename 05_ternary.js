/*
Ternary Operator:
    The ternary operator is a concise way to write conditional statements. It allows you to evaluate a condition and execute one of two expressions based on whether the condition is true or false.

Syntax:
    condition ? expressionIfTrue : expressionIfFalse;
    
    1. condition: The expression to evaluate (a boolean).
    2. expressionIfTrue: The value returned if the condition is true.
    3. expressionIfFalse: The value returned if the condition is false.
*/


// 1. Basic ternary

let age = 12

let result = age >= 18 ? "You are an adult" : "You are a minor"
// console.log(result)




// 2. Ternary Operator with Variables

let isLoggedIn = false
let message = isLoggedIn ? "Welcome back" : "Please log in"
console.log(message)




// 3. Using Ternary Inside a Function

function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(4)); // Output: "Even"
console.log(checkEvenOdd(7)); // Output: "Odd"




// 4. Default Assignments:
// The ternary operator is useful for setting default values.

let userName = "";
let displayName = userName ? userName : "Guest";

console.log(displayName); // Output: "Guest"
