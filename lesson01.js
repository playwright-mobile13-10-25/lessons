// let x;
// console.log(x); // Output: undefined

// x = 10;
// console.log(x); // Output: 10
// console.log(typeof x); // Output: number

// x = "Hello, World!";
// console.log(x);
// x = String(x);
// console.log(x); // Output: string
// console.log(typeof x); // Output: string
// let y = [1,2,3] + "";
// console.log(y);
// console.log(typeof y); // Output: string
// y = 1 + 2 + 3 + 4 + "" + 5 + 6;
// console.log(y);
// console.log(typeof y); // Output: string

// let a = "5";
// console.log(a);
// console.log(typeof a); // Output: string
// a = Number(a);
// console.log(a);
// console.log(typeof a); // Output: number
// a = +"10";
// console.log(a);
// console.log(typeof a); // Output: number
// a = +"Hello";
// console.log(a); // Output: NaN
// console.log(typeof a); // Output: number
// console.log(isNaN(a)); // Output: true
// console.log(NaN === NaN); // Output: true

// a = 2**63 - 1;
// console.log(a);
// console.log(typeof a); // Output: number
// a = a + 1;
// console.log(a);
// a = a + 1;
// console.log(a);
// console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991
// console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // Output: 5e-324
// console.log(Infinity); // Output: Infinity
// console.log(-Infinity); // Output: -Infinity
// console.log(typeof -Infinity); // Output: number
// let b = "15.75";
// console.log(parseInt(b));
// b = "15.01";
// console.log(parseInt(b));
// b = "15";
// console.log(parseFloat(b));
// b = "15.75abc";
// console.log(parseFloat(b));
// b = "abc15.75";
// console.log(parseFloat(b));

// let c = "true";
// c = Boolean(c);
// console.log(c);
// console.log(typeof c); // Output: boolean

// c = "";
// c = Boolean(c);
// console.log(c);
// console.log(typeof c); // Output: boolean

// c = 0;
// c = Boolean(c);
// console.log(c);
// console.log(typeof c); // Output: boolean
// c = 42;
// c = Boolean(c);
// console.log(c);
// console.log(typeof c); // Output: boolean

// let d = "text";
// console.log(d, !d, !!d); // Output: text false

// a = 7;
// b = 3;
// console.log(a / b); // Output: 2.3333333333333335
// console.log(a%b); // Output: 1
// console.log(Math.floor(a / b)); // Output: 2
// console.log(Math.ceil(a / b));

// console.log((-1)**0.5); // Output: NaN
// console.log((9)**0.5); // Output: 3
// console.log((9.5)**0.5); // Output: 3.082207001484488
// console.log(16/0); // Output: Infinity

let arr = [1, 2, 3, "four", "five"];
// console.log(arr); 
// console.log(typeof arr);
// console.log(Array.isArray(arr));
// console.log(arr.length);
// console.log(arr[3]);
// console.log(arr[40]);
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr[100] = 101;
// console.log(arr);
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     let oldValue = arr[i];
//     arr[i] = oldValue + 10;
//     console.log(`Element at index ${i}: ${oldValue} => ${arr[i]}`);
// }
// console.log(`Using for..of loop: ${arr}`);

// for (let element of arr) {
//     let oldValue = element;
//     element = oldValue + 10;
//     console.log(`Element at index: ${oldValue} => ${element}`);
// }
// console.log(`Using for..of loop: ${arr}`);

// arr.push(6);
// arr.push(7, 8, [1,2,3]);
// console.log(arr);
// element = arr.pop();
// console.log(element);
// console.log(arr);
arr = [1, 2, 3, 4, 5];
console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(0);
// console.log(arr);
// let removedElements = arr.slice(1, 4);
// console.log(removedElements);
// console.log(arr);
// removedElements = arr.slice(2, 4);
// console.log(removedElements);
// console.log(arr);
// removedElements = arr.splice(1, 3);
// console.log(removedElements);
// console.log(arr);
// arr.splice(1, 0, 10, 20, 30);
// console.log(arr);
// arr.concat([100, 200]);
// console.log(arr);
// arr = arr.concat([100, 200]);
// console.log(arr);

// let result = arr.forEach((element, index, array) => {
//     console.log(`Element at index ${index}: ${element}`);
//     array[index] = element + 10;
//     return element + 10; // This return value is ignored by forEach
// });
// console.log(result);
// console.log(arr);

// result = arr.map((element, index) => {
//     console.log(`Element at index ${index}: ${element}`);
//     return element + 10;
// });
// console.log(result);
// result = arr.filter(element => {
//     return element % 2 === 0;
// });
// console.log(result);

let num = 1+ +                                       "2" + 3;
console.log(num);
console.log(typeof num);
console.log(++num);
console.log(num++);
console.log(num);
