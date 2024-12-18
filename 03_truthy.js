/*
Truthy and Falsy Values
    In JavaScript, a value is considered either truthy or falsy when evaluated in a boolean context (like an if condition).

    Truthy values are treated as true.
    Falsy values are treated as false.

1. Falsy Values
    There are only 6 falsy values in JavaScript:

    1. false
    2. 0 (the number zero)
    3. "" (empty string)
    4. null
    5. undefined
    6. NaN (Not-a-Number)


2. Truthy Values
    Everything else in JavaScript is considered truthy, even if it might seem like it shouldn't.

    Examples of Truthy Values:
    Non-zero numbers: 42, -1, 3.14
    Non-empty strings: "hello", "false"
    Arrays: []
    Objects: {}
    Functions
    The boolean value true
*/


// Example of false value
if (false) console.log("Falsy");       // Will not execute
if (0) console.log("Falsy");          // Will not execute
if ("") console.log("Falsy");         // Will not execute
if (null) console.log("Falsy");       // Will not execute
if (undefined) console.log("Falsy");  // Will not execute
if (NaN) console.log("Falsy");        // Will not execute
if(-0) console.log("Falsy")           // Will not execute
if(0n) console.log("Falsy")           // Will not execute


// Truthy value
if (42) console.log("Truthy");           // Executes
if ("hello") console.log("Truthy");      // Executes
if ([]) console.log("Truthy");           // Executes
if ({}) console.log("Truthy");           // Executes
if (true) console.log("Truthy");         // Executes
if (function() {}) console.log("Truthy");         // Executes




let isLoggedIn = false

if(!isLoggedIn) {
    console.log("User log in")
} else {
    console.log("User not log in")
}



// Check array empty
let arr = []
if(arr.length === 0) {
    // console.log("Array is empty")
}



// Check object is empty
let emptyObj = {}
if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}



// Comparision
console.log(false == 0)
console.log(0 == "")
console.log(false == "")
console.log(" " == 0)


