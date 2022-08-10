// Are You Old Enough (if ... else)
/*
var age = 10;

if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age is not numerical");
}
*/

// Days of The Week (switch statements)
var dayOfWeek = "It is a";
var day = "Tuesday";

switch (day) {
    case "Monday":
        console.log(`${dayOfWeek} ${day}`)
        break;
    case "Tuesday":
        console.log(`${dayOfWeek} ${day}`)
        break;
    case "Wednesday":
        console.log(`${dayOfWeek} ${day}`)
        break;
    case "Thursday":
        console.log(`${dayOfWeek} ${day}`)
        break;
    case "Friday":
        console.log(`${dayOfWeek} ${day}`)
        break;
    case "Saturday":
        console.log(`${dayOfWeek} ${day}`)
        break;
    case "Sunday":
        console.log(`${dayOfWeek} ${day}`)
        break;

    default:
        console.log("There is no such day")
        break;
}