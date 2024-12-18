// switch Statement:
// The switch statement is used when multiple conditions depend on the same variable or expression.

/*
Syntax:
switch (expression) {
    case value1:
        Code if expression === value1
        break;
    case value2:
        Code if expression === value2
        break;
    default:
        Code if none of the cases match
}
*/


let day = "Sunday"

switch(day) {
    case "Monday":
    case "Tuesday":
    case "Wenesday":
    case "Thursday":
    case "Friday":
        console.log("It's working days")
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's weekend days")
        break;
    default:
        console.log("Error! Invalid day")
        break;
}