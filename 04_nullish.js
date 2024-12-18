/*
Nullish Coalescing Operator (??):
    The nullish coalescing operator (??) is used to provide a default value when the left-hand operand is either null or undefined. Unlike the logical OR operator (||), it doesn't treat falsy values like 0, "", or false as needing a fallback.


Syntax:
    let result = value1 ?? value2;

    If value1 is null or undefined, the operator returns value2.
    Otherwise, it returns value1.
*/

let username = null
let defaultName = "Guest"

let finalName = username ?? defaultName
// console.log(finalName)



// 2. Comparison with Logical OR (||)
// The || operator also provides a default value but treats falsy values (like 0, "", or false) as needing a fallback.

let score = 0;

let defaultScoreOR = score || 10;  // Fallback since 0 is falsy
// console.log(defaultScoreOR);      // Output: 10

let defaultScoreNullish = score ?? 10; // No fallback, 0 is not nullish
// console.log(defaultScoreNullish);      // Output: 0


// 3. Nested usage

let userAge = null;
let userDefaultAge = null;
let fallbackAge = 18;

let age = userAge ?? userDefaultAge ?? fallbackAge;
// console.log(age); // Output: 18





// Nullish in function
function getUserRole(role) {
    return role ?? "Viewer";
}

// console.log(getUserRole("Admin")); // Output: "Admin"
// console.log(getUserRole(undefined)); // Output: "Viewer"



function greet(name) {
    console.log(`Hello, ${name ?? "Guest"}!`);
}
// greet(null);          // Output: "Hello, Guest!"
// greet("Ihsan");       // Output: "Hello, Ihsan!"



const config = {
    languge: "Java Script",
    anotherLanguage: null
}

let languge = config.anotherLanguage ?? "React.js"
console.log(languge)