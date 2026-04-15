var name = 'Vishwa';
name = 'Vishwas';
let age = 25;
age=30;
const country = 'India';
//country = 'USA'; 

console.log("Name: " + name);
console.log("Age: " + age);
console.log("Country: " + country);

const person = {
    name: 'Saantveri',
    age: 25,
    country: 'India'
}

console.log(person.name);
console.log(person.age);
console.log(person.country);

var globalVar = "I am a global variable";
function myFunction() {
    var localVar = "I am a local variable";
    console.log(globalVar);
    console.log(localVar);
}
myFunction();

console.log(globalVar);
//console.log(localVar); // This will cause an error because localVar is not defined outside the function

//datatypes
//1. Primitive types: string, number, boolean, null, undefined, symbol
let str = "Hello, World!";
let num = 42;
let bool = true;    
const missing = null;
let notDefined;
console.log(notDefined); // undefined
const sym = Symbol('unique');

console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof bool);   // boolean
console.log(typeof missing); // object (null is considered an object in JavaScript)
console.log(typeof notDefined); // undefined
console.log(typeof sym); // symbol  

//2. Non-primitive types: objects, arrays, functions
const obj = { name: "Alice", age: 30 };
const arr = [1, 2, 3, 4, 5];
if (Array.isArray(arr)) {
    console.log("arr is an array");
}

//operators
//1 arithemtic
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + (a * b));  // 50       
console.log("Division: " + (a / b)); // 2
console.log("Modulus: " + (a % b)); // 0
console.log("Exponentiation: " + (a ** b)); // 100000       

//comparison
console.log("Equal: " + (a == b));
console.log("Not Equal: " + (a != b));
console.log("Strict Equal: " + (a === b));
console.log("Strict Not Equal: " + (a !== b));
console.log("Greater Than: " + (a > b));
console.log("Less Than: " + (a < b));
console.log("Greater Than or Equal: " + (a >= b));
console.log("Less Than or Equal: " + (a <= b));

//logical
let x = true;
let y = false;
console.log("Logical AND: " + (x && y));
console.log("Logical OR: " + (x || y));
console.log("Logical NOT: " + (!x));    

