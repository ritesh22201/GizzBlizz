// 1 

// let a = []
// let b = []

// console.log(a == b)  false
// console.log(a === b) false

//2

// let a = [];
// let b = a;

// console.log(a == b); true
// console.log(a === b) true

//3

// let a = [20]
// let b = [20]

// console.log(a[0] == b[0]); true
// console.log(a[0] === b[0]); true

//4

// let z = [1,2,3,4]
// let a = {name : 'anil'}
// console.log(...z)

//5

// console.log(typeof NaN)

//6

// let a = 10 - -10;
// console.log(a)

//7

// const set = new Set([1,1,2,3,4]);
// console.log(set.has(3)); true

//8

// const data = {name : 'anil'};
// console.log(delete data.name); true

//9

// const data = {name : 'anil'}
// console.log(delete data); false

//10

// const data = ['peter', 'bruce', 'clark'];
// const [y] = data;
// console.log(y);  peter

//11

// const data = ['peter', 'bruce', 'clark'];
// const [,y] = data;
// console.log(y); bruce

//12

// const data = {name : 'anil', age : 23, city : 'New Delhi'};
// const {name} = data;
// console.log(name); anil

//13

// let data = {name : 'anil', age : 23, city : 'New Delhi'};
// let info = {email : 'anil@gmail.com', mobile : 5894758454};
// data = {...data, ...info};
// console.log(data); two merged obj

// Primitive

let user = 'Arya';
let newUser = user;

user = 'Sam';
console.log(newUser)

// In primitive data types when we pass the value of one variable to another only value of that variable copies but not the reference.

// Non - Primitive

let data = {
    name : 'Arya',
    age : 17
}

let newData = data;

data.name = 'Sam';

console.log(newData)

// In Non-Primitive data types if we copy the value of a variable to another variable the reference of that variable copies but not the exact value itself.