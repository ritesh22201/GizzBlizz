/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

function createInputElm(label, type = 'text') {
    let ele = document.createElement('label');
    ele.textContent = label;

    let input = document.createElement('input');
    input.type = type;

    ele.append(input);

    return ele;
}

// TEST
createInputElm("Your Name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here

function createInputElm(label, type = 'text') {
    let ele = `<label>${label} : <input type=${type}></label>`;
    return ele;
}

// TEST
createInputElm("Your name"); //<label>Your name: <input type="text"></label>
createInputElm("Your age", "number"); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here

// TEST

function createList(arr) {
    return `<ul>
      ${arr.map(el => {
        return `
            <li>${el}</li>
            `
    }).join('')
        }
    </ul>`
}

console.log(createList(['Mango', 'Apple', 'Banana']));

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here

function createTodoList(arr) {
    return `<ul>
    ${arr.map(el => {
        return `
          <li>
            <p>${el.name}</p>
            <input type="checkbox" checked=${el.isDone ? true : false} name="" id=""/>
            <span>X</span>
          </li>
          `
    }).join('')
        }
  </ul>`
}


// TEST
console.log(createTodoList([
    { name: "Learn DOM", isDone: false },
    { name: "Learn JS", isDone: true },
]));
createTodoList([
    { name: "Learn DOM", isDone: false },
    { name: "Learn React", isDone: true },
    { name: "Learn JS", isDone: true },
]);