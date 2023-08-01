/* Requirements
  @name isString
  @parameter (any value) val
  @return Boolean
*/

// your code goes here

function isString(input) {
    if (typeof input === 'string') {
        return true
    }

    return false;
}

// Test
console.log(isString('tony stark')); // true;
console.log(isString([1, 2, 4, 0])); // false;


/* Requirements
  @name isBlank
  @parameter (any value) val
  @return Boolean
*/

// your code goes here

function isBlank(input) {
    if (input.length === 0) {
        return true;
    }
    return false;
}

// Test
console.log(isBlank('')); // true;
console.log(isBlank('abc')); // false;


/* Requirements
  @name truncate
  @parameter (string, number) text, len
  @return String
*/
// your code goes here

function truncate(str, length) {
    let res = ''
    for (let i = 0; i < length; i++) {
        res += str[i];
    }

    return res;
}

// Test
console.log(truncate('John Snow', 4)); // "John";


/* Requirements
  @name abbrevName
  @parameter (string) fullName
  @return String
*/

// your code goes here

function abbrevName(str) {
    let res = '';
    str = str.split(' ');
    res += str[0] + ' ' + str[1][0] + '.';

    return res;
}

// Test
console.log(abbrevName('Robin Singh')); //"Robin S."
console.log(abbrevName('John Snow')); //"John S."


/* Requirements
  @name protect
  @parameter (string) email
  @return String
*/

// your code goes here

function protect(str) {
    let res = '';
    str = str.split('@');
    res += str[0].slice(0, 4) + '...' + '@' + str[1];
    return res;
}

// Test
console.log(protect('johnS@example.com')); // "john...@example.com"
console.log(protect('arya_stark@example.com')); // "arya...@example.com"


/* Requirements
  @name protectAgain
  @parameter (string) email
  @return String
*/

// your code goes here


// Test
console.log(protect('johnS@example.com')); // "john.@example.com"
console.log(protect('arya_stark@example.com')); // "arya......@example.com"


//-----------------------------------------------------------------------------------


const fruitBasket = [
    "banana",
    "cherry",
    "orange",
    "apple",
    "cherry",
    "orange",
    "apple",
    "banana",
    "cherry",
    "orange",
    "fig",
];

/* 
 
Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj
 
Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

let mappedObj = fruitBasket.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
}, {})

console.log(mappedObj)

/* 
 
Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()
 
Output: 
 
[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

let mat = [];

for (let key in mappedObj) {
    let arr = [];

    arr.push(key, mappedObj[key]);
    mat.push(arr);
}

console.log(mat)

const data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

// Using reduce flat data array

let flattenArr = data.reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
}, [])

console.log(flattenArr)


const dataTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11], 12],
];

// Using reduce flat dataTwo array

let flattenArr2 = dataTwo.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArrCurr(curr) : curr);
}, [])

console.log(flattenArr2)

function flattenArrCurr(arr) {
    return arr.reduce((acc, curr) => {
        return acc.concat(Array.isArray(curr) ? flattenArrCurr(curr) : curr);
    }, [])
}

/*
 
Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(num){
    return num + 1;
}

function double(num){
    return num * 2;
}

function decrement(num){
    return num - 1;
}

function triple(num){
    return num * 3;
}

function half(num){
    return Math.round(num/2);
}

let pipeline = [
    'increment',
    'double',
    'decrement',
    'decrement',
    'double',
    'triple',
    'half',
    'increment',
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.
 
NOTE: Initial value will be passed to first function the output of that function will be the input to next function.
 
EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7
 
  ...
*/


// console.log(pipeline.reduce((acc, cv) => cv(acc), 3));


let pipeline2 = [
    'increment',
    'half',
    'double',
    'decrement',
    'decrement',
    'triple',
    'double',
    'triple',
    'half',
    'increment',
    'triple',
];

  // Find the output using pipeline2 the initial value if 8
