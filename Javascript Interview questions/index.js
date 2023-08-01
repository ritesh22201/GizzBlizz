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
// console.log(newUser)

// In primitive data types when we pass the value of one variable to another only value of that variable copies but not the reference.

// COPY BY VALUE AND COPY BY REFERENCE

// Non - Primitive

let data = {
    name: 'Arya',
    age: 17
}

let newData = data;

data.name = 'Sam';

// console.log(newData)

// In Non-Primitive data types if we copy the value of a variable to another variable the reference of that variable copies but not the exact value itself.

// PASSED BY VALUE AND PASSED BY REFERENCE

let a = 10, b = 20;

function abc(num1, num2) {
    num1 = num1 + num2;
    return num1;
}

// console.log(abc(a, b));


function xyz(data) {
    data.name = 'Bruce Wayne';
    return data;
}

// console.log(xyz(data));
// console.log(data)


// After knowing about string methods, practice those by solving problems given below.

let from = "Syrio Forel";
let quote = "There is only one thing we say to death: Not today";
let to = "Arya Stark";

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/

const indexOfIs = quote.indexOf('is');
console.log(indexOfIs)

/*
2. Find the character at the index indexOfIs (Problem 1) in quote.

*/

console.log(quote.charAt(indexOfIs));

/*
3. Log the message saying `The index of first is in quote is 7`
*/

console.log(`The index of first is in quote is ${indexOfIs}`);

/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/

console.log(`The character at index 0 is ${quote.charAt(0)}`);
console.log(`The character at index 1 is ${quote.charAt(1)}`);
console.log(`The character at index 2 is ${quote.charAt(2)}`);
console.log(`The character at index 3 is ${quote.charAt(3)}`);
console.log(`The character at index 4 is ${quote.charAt(4)}`);
console.log(`The character at index 5 is ${quote.charAt(5)}`);

/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/

console.log(from.concat(' ' + 'said' + ' ' + quote + ' ' + 'to' + ' ' + to));

/*
6. Does from, to and quote ends with "rk". Check all three.
*/

console.log(from.endsWith('rk'));
console.log(to.endsWith('rk'));
console.log(quote.endsWith('rk'));

/*
7. Does quote includes the word "Only"

*/

console.log(quote.includes('only'));

/*
8. Does quote includes the word " we"
*/

console.log(quote.includes('we'));

/*
9. Find the index of the the word `we` in quote
*/

console.log(quote.indexOf('we'));

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/

const quoteSplitted = quote.split(' ');

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/

const joinedQuote = quoteSplitted.join(' ').replace('today', 'tomorrow');
console.log(joinedQuote);

/*
12. Find the index of second "o" in quote. Use indexOf
*/

console.log(quote.indexOf('o'));

/*
13. Find the last index of letter "a" in quote.
*/

console.log(quote.indexOf('a'));

/*
14. Find the second last index of letter "a" in quote.
*/

console.log(quote.lastIndexOf('o'));

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
*/

console.log(quote.padEnd(70, '.'));

/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/

const extendedQuote = quote.padStart(70, '.');
console.log(extendedQuote)

/*
17. Log the repeat of "Hello World!" 10 times.
*/

for (let i = 0; i < 10; i++) {
    console.log('Hello World!');
}

/*
18. Replace today to tomorrow in quote.
*/

console.log(quote.replace('today', 'tomorrow'));

/*
19. Replace Stark to Lannister in quoteTo
*/

const quoteTo = to.replace('Stark', 'Lannister');
console.log(quoteTo)

/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/

console.log(`${quote.slice(0, 30)}...`);

/*
21. Find out does quote, from, to starts with "A"
*/

console.log(quote.startsWith('A'));

// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

let newNumArr = [...numbers];
let newStrArr = [...strings];

// - Find the index of `101` in numbers

console.log(newNumArr.indexOf(101));

// - Find the last index of `9` in numbers

console.log(newNumArr.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"

console.log(newStrArr.join(' '));

// - Add two new words in the strings array "called" and "sentance"

newStrArr.push('called', 'sentence');

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

console.log(newStrArr.join(' '));

// - Remove the first word in the array (strings)

newStrArr.shift();

// - Find all the words that contain 'is' use string method 'includes'

const filterIs = strings.filter(el => el.includes('is'));
console.log(filterIs)

// - Find all the words that contain 'is' use string method 'indexOf'

const filterIs2 = strings.filter(el => el.indexOf('is') >= 0);
console.log(filterIs2)

// - Check if all the numbers in numbers array are divisible by three use array method (every)

const divBy3 = numbers.every(el => el % 3 === 0);
console.log(divBy3);

// -  Sort Array from smallest to largest

newNumArr.sort((a, b) => a - b);
console.log(newNumArr);

// - Remove the last word in strings

console.log(newStrArr.pop());

// - Find largest number in numbers

const largestNum = numbers.reduce((acc, curr) => {
    acc = Math.max(acc, curr);
    return acc;
}, 0)

// console.log(Math.max(...numbers));

console.log(largestNum);

// - Find longest string in strings

const longestStr = strings.reduce((acc, curr) => {
    if (curr.length > acc.length) {
        acc = curr;
    }
    return acc;
}, '')

console.log(longestStr);

// - Find all the even numbers

const evenNums = numbers.reduce((acc, curr) => {
    curr % 2 === 0 && acc.push(curr);
    return acc;
}, [])
console.log(evenNums)

// - Find all the odd numbers

const oddNums = numbers.reduce((acc, curr) => {
    curr % 2 === 1 && acc.push(curr);
    return acc;
}, [])
console.log(oddNums);

// - Place a new word at the start of the array use (unshift)

strings.unshift('Hello');

// - Make a subset of numbers array [18,9,7,11]

let firstInd = numbers.indexOf(18);
let secondInd = numbers.indexOf(11);
console.log(numbers.slice(firstInd, secondInd + 1));

// - Make a subset of strings array ['a','collection']

let firstStrInd = strings.indexOf('a');
let secondStrInd = strings.indexOf('collection');
console.log(strings.slice(firstStrInd, secondStrInd + 1));

// - Replace 12 & 18 with 1221 and 1881

// let numbersArr = numbers.join(' ').replace(12, 1221).split(' ').map(Number);
// console.log(numbersArr);
// let numbersArr2 = numbersArr.join(' ').replace(18, 1881).split(' ').map(Number);
// console.log(numbersArr2);

let replacedArr = numbers.map(el => {
    if (el == 12) {
        return 1221
    }
    if (el == 18) {
        return 1881
    }
    return el;
})

console.log(replacedArr)

// - Replace words in strings array with the length of the word

let replacedStr = strings.map(el => el.length);
console.log(replacedStr);

// - Find the sum of the length of words using above question

let lengthSum = replacedStr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
}, 0)

console.log(lengthSum);

// - Customers Array
var customers = [
    { firstname: "Joe", lastname: "Blogs" },
    { firstname: "John", lastname: "Smith" },
    { firstname: "Dave", lastname: "Jones" },
    { firstname: "Jack", lastname: "White" }
];
// - Find all customers whose firstname starts with 'J'

console.log(customers.filter(el => el.firstname.startsWith('J')));

// - Create new array with only first name

console.log(customers.reduce((acc, curr) => {
    acc.push(curr.firstname);
    return acc;
}, []))

// - Create new array with all the full names (ex: "Joe Blogs")

console.log(customers.reduce((acc, curr) => {
    acc.push(curr.firstname + ' ' + curr.lastname);
    return acc;
}, []))

// - Sort the array created above alphabetically

console.log(customers.sort((a, b) => {
    if (a.firstname > b.firstname) {
        return 1;
    }
    else if (a.firstname < b.firstname) {
        return -1;
    }
    else {
        return 0;
    }
}));

// - Create a new array that contains only user who has at least one vowel in the firstname.

const filteredArr = customers.filter(el => {
    if (el.firstname.includes('a') || el.firstname.includes('e') || el.firstname.includes('i') || el.firstname.includes('o') || el.firstname.includes('u')) {
        return el;
    }
})

console.log(filteredArr);


let arr = [1, 2, 3, 4, 6, 7, 8, 9];

function double(num) {
    return num * 2;
}

let doubledData = arr.forEach(double); // Garbage collection of doubled data because eventually it will be deleted and returned undefined;
console.log(doubledData)


function doubleMap(num) {
    return num * 2;
}

let doubledMappedData = arr.map(doubleMap);
console.log(doubledMappedData)


function add(acc, curr) {
    return acc + curr;
}

let sum = arr.reduce(add, 0);
console.log(sum);



let words = [
    "mystery",
    "brother",
    "aviator",
    "crocodile",
    "pearl",
    "orchard",
    "crackpot",
    "rhythm"
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(words) {
    let longestword = words.reduce((acc, curr) => {
        if (curr.length > acc.length) {
            acc = curr;
        }
        return acc;
    }, '')

    return longestword;
}

console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.

let lengthArr = words.reduce((acc, curr) => {
    acc.push(curr.length);
    return acc;
}, [])

console.log(lengthArr);

// - Create a new array that only contains word with atleast one vowel.

const vowelArr = words.filter(el => el.includes('a') || el.includes('e') || el.includes('i') || el.includes('o') || el.includes('u'));
console.log(vowelArr);

// - Find the index of the word "rhythm"

console.log(words.indexOf('rhythm'));

// - Create a new array that contians words not starting with vowel.

const notVowelArr = words.filter(el => el[0] !== 'a' && el[0] !== 'e' && el[0] !== 'i' && el[0] !== 'o' && el[0] !== 'u');
console.log(notVowelArr);

// - Create a new array that contianse words not ending with vowel

const notEndVowelArr = words.filter(el => el[el.length-1] !== 'a' && el[el.length-1] !== 'e' && el[el.length-1] !== 'i' && el[el.length-1] !== 'o' && el[el.length-1] !== 'u');
console.log(notEndVowelArr);

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
let arr3 = [1,2,3,4,5,6];

const sumArray = (arr) => {
   let sumarr = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
   }, 0)

   return sumarr;
}

console.log(sumArray(arr3));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

const multArr = arr3.map(el => el*3);
console.log(multArr);

// - Create a new array that contains only even numbers

const evenArr = arr3.filter(el => el % 2 == 0);
console.log(evenArr);

// - Create  a new array that contains only odd numbers.

const oddArr = arr3.filter(el => el % 2 == 1);
console.log(oddArr);

// - Create a new array that should have true for even number and false for odd numbers.

const booleanArr = arr3.map(el => {
    if(el % 2 === 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(booleanArr);

// - Sort the above number in assending order.

console.log(arr3.sort((a, b) => a - b));

// - Does sort mutate the original array?

'yes sort does mutate the array'

//yes it mutate the original array


// - Find the sum of the numbers in the array.

const sumEleArr = arr3.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0)

console.log(sumEleArr);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(arr3){
    const avgSum = arr3.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0)

    return avgSum/arr3.length;
}

console.log(averageNumbers(arr3));

let strings2 = [
    "seat",
    "correspond",
    "linen",
    "motif",
    "hole",
    "smell",
    "smart",
    "chaos",
    "fuel",
    "palace",
];

  // - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

  function averageWordLength(strings2){
    let avgWordLength = strings2.reduce((acc, curr) => {
        acc += curr.length;
        return acc;
    }, 0)

    return avgWordLength/strings2.length;
  }

  console.log(averageWordLength(strings2));


  //------------------------------------------------------

  let persons = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johnny", grade: 2, sex: "M" },
    { name: "Ethan", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Donald", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
    { name: "John", grade: 17, sex: "M" },
    { name: "Arya", grade: 14, sex: "F" },
  ];
  
  // Create an array peopleName and store value of name key from persons array
  
  const peopleName = persons.reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, [])

  console.log(peopleName);
  
  // Create an array peopleGrade and store the value of grade key from persons array

  const peopleGrade = persons.reduce((acc, curr) => {
    acc.push(curr.grade);
    return acc;
  }, [])

  console.log(peopleGrade);
  
  // Create an array peopleSex and store the value of sex key from persons array

  const peopleSex = persons.reduce((acc, curr) => {
    acc.push(curr.sex);
    return acc;
  }, [])

  console.log(peopleGrade);
  
  // Log the filtered named of people in peopleName that starts with 'J' or 'P'
  
  console.log(peopleName.filter(el => el.startsWith('J') || el.startsWith('P')));
  
  // Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
 
  console.log(peopleName.filter(el => el.startsWith('A') || el.startsWith('C')).length);
 
  // Log all the filtered male ('M') in persons array

  console.log(persons.filter(el => el.sex === 'M'));
  
  // Log all the filtered female ('F') in persons array
  
  console.log(persons.filter(el => el.sex === 'F'));
  
  // Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
  
  console.log(persons.filter(el => {
    if(el.sex === 'F'){
        if(el.name.startsWith('C') || el.name.startsWith('J')){
            return el;
        }
    }
  }));
  
  // Log all the even numbers from peopleGrade array
  
//    console.log(peopleGrade.reduce((acc, curr) => {
//      if(curr % 2 === 0){
//         acc.push(curr);
//      }
//      return acc;
//    }, []))

   console.log(peopleGrade.filter(el => {
      if(el % 2 === 0){
        return el;
      }
   }))
  
  // Find the first name that starts with 'J' in persons array and log the object
  
  console.log(persons.find(el => el.name.startsWith('J')));
  
  // Find the first name that starts with 'P' in persons array and log the object

  console.log(persons.find(el => el.name.startsWith('P')));
  
  // Find the first name that starts with 'J', grade is greater than 10 and is a female

  console.log(persons.find(el => {
    if(el.name.startsWith('J')){
        if(el.grade > 10 && el.sex === 'F'){
            return el;
        }
    }
  }));
  
  // Filter all the female from persons array and store in femalePersons array
  
  let femalePersons = persons.filter(el => el.sex === 'F');
  
  // Filter all the male from persons array and store in malePersons array
 
  let malePersons = persons.filter(el => el.sex === 'M');

  // Find the sum of all grades and store in gradeTotal
  
  let gradeTotal = persons.reduce((acc, curr) => {
    acc += curr.grade;
    return acc;
  }, 0)

  console.log(gradeTotal);
  
  // Find the average grade
  
  console.log(gradeTotal/persons.length);
  
  // Find the average grade of male
  let count = 0;
  const avgGrdMale = persons.reduce((acc, curr) => {
    if(curr.sex === 'M'){
        count++;
        acc += curr.grade;
    }
    return acc;
  }, 0)

  console.log(avgGrdMale/count);
  
  // Find the average grade of female

  let count2 = 0;
  const avgGrdFemale = persons.reduce((acc, curr) => {
    if(curr.sex === 'F'){
        count2++;
        acc += curr.grade;
    }
    return acc;
  }, 0)

  console.log(avgGrdFemale/count2);

  // Find the highest grade
   
  let highestGrd = persons.reduce((acc, curr) => {
    if(curr.grade > acc){
        acc = curr.grade;
    }
    return acc;
  }, -Infinity)

  console.log(highestGrd)
 
  // Find the highest grade in male

  let highestGrdMale = persons.reduce((acc, curr) => {
    if(curr.sex === 'M' && curr.grade > acc){
        acc = curr.grade;
    }
    return acc;
  }, -Infinity)

  console.log(highestGrdMale)
 
  // Find the highest grade in female

  let highestGrdFemale = persons.reduce((acc, curr) => {
    if(curr.sex === 'F' && curr.grade > acc){
        acc = curr.grade;
    }
    return acc;
  }, -Infinity)

  console.log(highestGrdFemale)
  
  // Find the highest grade for people whose name starts with 'J' or 'P'
  
  let highestGrdJP = persons.reduce((acc, curr) => {
    if(curr.name.startsWith('J') || curr.name.startsWith('P') && curr.grade > acc){
        acc = curr.grade;
    }
    return acc;
  }, -Infinity)

  console.log(highestGrdJP)

  // Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

  console.log(peopleGrade.sort((a, b) => a - b));

  // Sort the peopleGrade in descending order

  console.log(peopleGrade.sort((a, b) => b - a));
  
  // Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
  
  let descSort = [...peopleGrade].sort((a, b) => b - a);
  console.log(descSort);

  // Sort the array peopelName in ascending `ABCD..Za....z`
  
  peopleName.sort((a, b) => {
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0;
    }
  });
  
  // Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
  
  console.log([...peopleName].sort((a, b) => {
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0;
    }
  }));