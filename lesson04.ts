// let a = 10;
// let b = 20;

// class Calculator {
//     add(x: number, y: number): number {
//         return x + y;
//     }
//     subtract(x: number, y: number): number {
//         return x - y;
//     }
// }

// const calc = new Calculator();
// console.log(`Addition: ${calc.add(a, b)}`);
// console.log(`Subtraction: ${calc.subtract(b, a)}`);
// let a: number = 10;
// let b: number = 20;
// function add(x: number, y: number): string {
//     return (x + y).toString();
// }
// add(a, b.toString());
// let text;
// text= "Hello, TypeScript!";
// console.log(text);
// text = 15;
// let cities: string[] = ["New York", "Los Angeles", "Chicago"];

// for (let city of cities) {
//     console.log(city);
// }

// enum Color {
//     Red,
//     Green=5,
//     Blue=20 // 20
// }

// let favoriteColor: Color = Color.Green;
// console.log(`My favorite color is: ${Color[favoriteColor]}`);
// console.log(`My favorite color is: ${favoriteColor}`);

// let colorArray: Color[] = [Color.Red, Color.Blue];
// console.log(colorArray);

// function greet(name: string = "Guest"): void {
//     console.log(`Hello, ${name}!`);
// }
// let a = greet("Alice", "Bob");
// a = greet(30);

// function multiply(x: number, y: number): number {
//     // return x * y;
//     return (x * y).toString();
// }
// console.log(multiply(5, 4));



// function add(x: number, y: number): number {
//     return x + y;
// }
// function add(x: string, y: string): string {
//     return `x + y = ${x + y}`;
// }
// console.log(add(5, 10));
// console.log(add("Hello, ", "World!"));

// function add(x: number, y: number): number;
// function add(x: string, y: string): string;

// function add(x: any, y: any): any {
//     return x + y;
// }
// console.log(add(5, 10));
// console.log(add("Hello, ", "World!"));
// console.log(add(5, " apples"));

class Person {
    name: string;
    protected age: number;
    private email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. You can reach me at ${this.email}.`);
    }
    private getEmail(): string {
        return this.email;
    }
}

const person: Person = new Person("John", 30, "john@example.com");
person.greet();
// person.getEmail(); // Error: Property 'getEmail' is private and only accessible within class 'Person'.
// person.age; // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(person.name); // Accessible
class Employee extends Person {
    employeeId: number;
    constructor(name: string, age: number, email: string, employeeId: number) {
        super(name, age, email);
        this.employeeId = employeeId;
    }
    displayEmployeeInfo(): void {
        console.log(`Employee ID: ${this.employeeId}, Name: ${this.name}, Age: ${this.age}`);
    }
}
function LogMethod(
    value: ( ...args: any[] ) => any,
    context: ClassMethodDecoratorContext
) {
    return function (...args: any[]) {
        console.log(`Calling ${String(context.name)} with args: ${JSON.stringify(args)}`);
        return value.apply(this, args);
    };
}

export default class Manager {
    department: string;

    constructor(department: string) {
        this.department = department;
    }

    @LogMethod
    manage(): void {
        console.log(`Managing the ${this.department} department.`);
    }
}

interface Config {
    HOST: string;
    PORT?: number;
}

export const config1: Config = {
    HOST: "localhost",
    PORT: 3000
};
export const config2: Config = {
    HOST: "localhost"
};
// export const config3: Config = {
//     PORT: 8080
// };





export const HOST: string= "localhost";
export { Person };