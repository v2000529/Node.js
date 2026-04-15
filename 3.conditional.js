var age = 25
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

var score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
}   else {
    console.log("Grade: F");
}

var day = 3
var dayName;
switch (day) {
    case 1: 
        dayName = "Monday"; 
        break;
    case 2: 
        dayName = "Tuesday";
        break;
    case 3: 
        dayName = "Wednesday"; 
        break;
    case 4: 
        dayName = "Thursday";
        break;
}
console.log("The day is: " + dayName);// The day is: Wednesday
