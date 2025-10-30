// console.log("Lesson 02: String Conversion and Template Literals");
// console.log(1 == "1"); // Output: true
// console.log(1 === "1"); // Output: false

// console.log(10 && 20 && 30); // Output: 30
// console.log(10 && 0 && 30); // Output: 0
// console.log(10 && true && [1]); // Output: [1]

// if (true){
//   console.log("This is true");
//   a = 10;
//   console.log(a);
// } else {
//     let b = 20;
//     console.log(b);
// }
// console.log("Outside if block");
// console.log(a); // Output: 10
// console.log(b); // ReferenceError: b is not defined


// function f(num) {
//     console.log(`Input number: ${num}`);
//     switch(num) {
//         case 1:
//             console.log("One");
//             break;
//         case 2:
//             console.log("Two");
//         case 3:
//             console.log("Three");
//             break;
//         case 4:
//             console.log("Four");
//         default:
//             console.log("Other number");
//     }
// }
// f(1);
// f(2);
// f(3);
// f(4);
// f(55);

// let i = 3;
// while (i > 0) {
//     console.log(`Current value of i: ${i}`);
//     i--;
// }
// i = 3;
// do {
//     console.log(`Current value of i in do..while: ${i}`);
//     i--;
// } while (i > 0);

// for (let i = 0, j = 100; i < j ; i++, j-=5) {
//     console.log(`i: ${i}, j: ${j}`);
// }

// cities = ["New York", "London", "Paris", "Tokyo"];
// for (let index in cities) {
//     cities[index] = cities[index].toUpperCase();
//     console.log(`City at index ${index}: ${cities[index]}`);
// }
// console.log(`Final cities array: ${cities}`);
// for (let city of cities) {
//     city = city.toLowerCase();
//     console.log(`City: ${city}`);
// }
// console.log(`Final cities array: ${cities}`);


// const arr = {};
// arr = [1, 2, 3, 4, 5];
// arr = {};
// arr.name = "My Array";
// arr.length = 5;
// console.log(typeof arr);
// console.log(arr);
// for (var i = 0; i < 3; i++) {
//     console.log(`Inside loop: ${i}`);
//     setTimeout(() => console.log(i), 1000);
// }
// console.log("After loop");

// for (var i = 0; i < 3; i++) {
//     console.log(`Inside loop: ${i}`);
//     var j = i;
//     setTimeout(() => console.log(j), 1000);
// }
// console.log("After loop");

// for (let i = 0; i < 3; i++) {
//     console.log(`Inside loop: ${i}`);
//     setTimeout(() => console.log(i), 1000);
// }
// console.log("After loop");

// function createCounter() {
//     console.log("Creating counter");
// }
// console.log(typeof createCounter);
// const counter1 = createCounter();
// console.log(counter1);

// function printCounterInfo(name, email, age) {
//     console.log(`Counter Information:`);
//     console.log(arguments);
//     console.log(`\tName: ${name}`);
//     console.log(`\tEmail: ${email}`);
//     console.log(`\tAge: ${age}`);
// }
// printCounterInfo();
// printCounterInfo("Alice");
// printCounterInfo("Bob", "bob@example.com", 30);
// printCounterInfo("Charlie", "charlie@example.com", 25, 1001);

// function printCounterInfo(name="Unknown", email="Unknown", age=0) {
//     console.log(`Counter Information:`);
//     console.log(arguments);
//     console.log(`\tName: ${name}`);
//     console.log(`\tEmail: ${email}`);
//     console.log(`\tAge: ${age}`);
// }
// printCounterInfo();
// printCounterInfo("Alice");
// printCounterInfo("Bob", "bob@example.com", 30);
// printCounterInfo("Charlie", "charlie@example.com", 25, 1001);

// function printCounterInfo({name="Unknown", email="Unknown", age=0} = {}) {
//     console.log(`Counter Information:`);
//     console.log(`\tName: ${name}`);
//     console.log(`\tEmail: ${email}`);
//     console.log(`\tAge: ${age}`);
//     return `${name} - ${email} - ${age}`;
//     // console.log(arguments);
// }

// line = printCounterInfo();
// console.log(line);
// line = printCounterInfo({name: "Alice"});
// console.log(line);
// line = printCounterInfo({name: "Bob", email: "bob@example.com", age: 30});
// console.log(line);
// f = printCounterInfo;
// line = f({name: "Bob Marley", email: "bob_marley@example.com", age: 30});
// console.log(line);

// function f() {
//     let a = 10;
//     const b = 20;
//     var c = 30;
//     d = 40;
//     console.log(a, b, c, d);
// }
// f();
// // console.log(a);
// // console.log(b);
// // console.log(c);
// console.log(d);

// let i = 0;
// function up() {
//     i++;
//     console.log(i);
// }
// up();
// up();
// up();
// console.log(`Final value of i: ${i}`);

// let i = 0;
// function up() {
//     console.log(i);
//     let i = 0;
//     i++;
//     console.log(i);
// }
// up();
// up();
// up();
// console.log(`Final value of i: ${i}`);


// function sayHello() {
//     console.log("Hi!");
// }
// let hello = sayHello;
// sayHello();
// hello();	// "Hi!"
// sayHello = null;
// hello();	// "Hi!"
// up();
// function up() {
//      console.log("  Inside up function");
// }
// // console.log(down);
// let down = function() {
//     console.log("Inside down function");
// }
// console.log(down);
// function add(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function operate(a, b, operation) {
//     return operation(a, b);
// }
// let result;
// result = operate(10, 5, add);
// console.log(`Addition Result: ${result}`);
// result = operate(10, 5, subtract);
// console.log(`Subtraction Result: ${result}`);
// function recurse(n) {
//     console.log(`n: ${n}`);
//     return n * recurse(n + 1);
// }
// recurse(1);

// (
//     function () {
//         console.log("I like JavaScript");
//     }()
// );

function city(cityName) {
   function printCity(name) {
       console.log(`City Name: ${cityName} name is ${name}`);
   }
   return printCity
}
let London = city("London");
let Lviv = city("Lviv");
London("LDN");
Lviv("LVV");
London("London City");
Lviv("Lviv City");