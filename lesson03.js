// let obj = {
//     name: "Alice",
//     age: 25
// }

// console.log(typeof obj);
// console.log(obj);
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["age1"]);
// console.log(obj.age13);
// obj.email = "alice@example.com";
// console.log(obj);
// obj["country"] = "Wonderland";
// console.log(obj);


// let employee = {
//     firstName: "Peter",
//     lastName: "Peterson",
//     position: "developer",
//     experience : 4,
//     fullName: function(){
//         return this.firstName + " " + this.lastName; 
//     }
// }

// // console.log(typeof employee);
// // console.log(employee);
// // console.log(employee.firstName);
// // console.log(employee["lastName"]);
// // console.log(employee.fullName());
// // console.log(employee.fullName);
// function f1(){
//     // console.log(this);
//     console.log(`Employee Information:`);
//     console.log(`\tFirst Name: ${this.firstName}`);
//     console.log(`\tLast Name: ${this.lastName}`);
//     console.log(`\tPosition: ${this.position}`);
//     console.log(`\tExperience: ${this.experience} years`);
//     console.log(`\tFull Name: ${this.fullName()}`);
// }
// // f1.call(employee);
// // f1(employee);
// // f1.apply(employee);
// employee.printInfo = f1;
// employee.printInfo();
// // delete employee.position;

// function Employee(firstName, lastName, position, experience){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.position = position;
//     this.experience = experience;
//     this.fullName = function(){
//         return this.firstName + " " + this.lastName; 
//     }
// }
// employee1 = new Employee("Mary", "Manson", "manager", 6);
// employee2 = new Employee("John", "Doe", "developer", 4);
// console.log(employee1);
// console.log(employee2);
// console.log(employee2.hasOwnProperty("firstName"));
// console.log(employee2.hasOwnProperty("firstName2222"));

// class Employee {
//     static count = 0;
//     constructor(firstName, lastName, position, experience) {
//         this._firstName = firstName;
//         this.lastName = lastName;
//         this.position = position;
//         this.experience = experience;
//         Employee.count++;
//     }
//     fullName() {
//         return this._firstName + " " + this.lastName;
//     }
//     static companyInfo() {
//         console.log("Company: Tech Solutions Inc.");
//         console.log("Address: 123 Tech Street, Silicon Valley, CA");
//     }
//     get firstName() {
//         return this._firstName;
//     }
//     set firstName(value) {
//         this._firstName = value;
//     }
//     info() {
//         console.log(`Employee Information:`);
//         console.log(`\tFirst Name: ${this._firstName}`);
//         console.log(`\tLast Name: ${this.lastName}`);
//         console.log(`\tPosition: ${this.position}`);
//         console.log(`\tExperience: ${this.experience} years`);
//         console.log(`\tFull Name: ${this.fullName()}`);
//     }
// }

// e1 = new Employee("Anna", "Smith", "designer", 3);
// e2 = new Employee("Tom", "Hanks", "actor", 10);
// console.log(e1);
// console.log(e2);
// console.log(e1.fullName());
// Employee.prototype.info = function() {
//     console.log(`Employee Information:`);
//     console.log(`\tFirst Name: ${this.firstName}`);

// }
// e1.info();
// e2.info();

// Employee.companyInfo();
// // e1.companyInfo();
// console.log(`Total Employees: ${Employee.count}`);
// console.log(`Total Employees: ${e1.count}`);
// console.log(e1.firstName);
// e1.firstName = "Annabelle";
// console.log(e1.firstName);

// class Manager extends Employee {
//     constructor(firstName, lastName, position, experience, department) {
//         super(firstName, lastName, position, experience);
//         this.department = department;
//     }
//     info() {
//         super.info();
//         console.log(`\tDepartment: ${this.department}`);
//     }
//     info(verbose = true) {
//         if (verbose) {
//             super.info();
//         }
//         // console.log(`\tDepartment: ${this.department}`);
//     }
// }

// m1 = new Manager("Sarah", "Connor", "manager", 8, "Sales");
// console.log(m1);
// m1.info(false);



// 
// let name = "Anna";
// let age = 28;
// let email = "anna.smith@example.com";
// console.log(`Name: ${name}, 
//     Age: ${age}, Email: ${email}`);

// // function printInfo() {
// //     console.log(this);
// // }
// // printInfo();

// name1 = (a, b, c) => {
//     console.log(`Name: ${a}, Age: ${b}, Email: ${c}`);
// }

// name2 = function(a, b, c) {
//     console.log(`Name: ${a}, Age: ${b}, Email: ${c}`);
// }
// name1(name, age, email);
// name2(name, age, email);

// const numbers = [11, 8, 44, 87];
// const maximum1 = Math.max(numbers[0], numbers[1], numbers[2], numbers[3]);
// console.log(maximum1); 
// const minimum = Math.min(...numbers);
// console.log(minimum); // 8

// function sum(x, y, ...z) {
//     console.log(x, y, z);
//     console.log(`Sum: ${x + y + z.reduce((a, b) => a + b, 0)}`);
// }
// sum(1, 2, 3, 4, 5);

// const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// // const [city1, city2, ...otherCities] = cities;
// const [city1, city2] = cities;
// console.log(`City 1: ${city1}`);
// console.log(`City 2: ${city2}`);
// // console.log(`Other Cities: ${otherCities}`);

// const employee = {
//     firstName: "Emily",
//     lastName: "Davis",
//     position: "Analyst",
//     experience: 5
// };
// const { firstName, lastName1 } = employee;
// console.log(`First Name: ${firstName}`);
// console.log(`Last Name: ${lastName1}`);

s = new Set([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
console.log(s);
s.add(6);
s.add(3);
console.log(s);
s.delete(2);
console.log(s);