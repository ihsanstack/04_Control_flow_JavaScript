/*
Control Flow:
    Control flow refers to the order in which statements are executed in a program. JavaScript executes code sequentially from top to bottom by default. However, control flow mechanisms allow you to alter this sequence based on certain conditions or events.

Control flow structures include:

    1. Conditionals: if, else if, else, switch
    2. Loops: for, while, do...while
    3. Jumps: break, continue, return
*/


// 1. Conditionals

// Syntax
// if (condition) {
    // Code to execute if condition is true
// }


// if 
let temperature = 30
if(temperature > 25) {
    // console.log("It is hot day")
}


// if and else
let age = 18
if(age >= 18) {
    // console.log("You are eligible for vote");
} else {
    // console.log("You are not eligible for vote")
}


// if, else-if and else

let myAge = 20
if(myAge <= 13) {
    // console.log("You are a child")
} else if(myAge > 13 && myAge <= 20) {
    // console.log("You are a teenager")
} else {
    // console.log("You are a adult")
}




let userLoggedIn = true
let criditCard = true
if(userLoggedIn && criditCard) {
    // console.log("Allow to buy course");
}

let loggedInFromGoogle = true
let loggedInFromEmail = false
if(loggedInFromEmail || loggedInFromGoogle) {
    // console.log("User login");
}




/*
Nested if-else Conditions
    Nested if-else conditions involve placing one if-else statement inside another. This allows you to check multiple conditions in a hierarchical manner.
*/

let isLoggedin = true
let userRole = "admin"

if(isLoggedin) {
    if(userRole === "admin") {
        console.log("Welcome admin, You have full access");
    } else if(userRole === "editor") {
        console.log("Welcome editor, You can edit content");
    } else {
        console.log("Welcome viwer, You can view content");
        
    }
} else {
    console.log("Please log in to continue");
    
}


