// Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     destination: "https://github.com/apvarun/toastify-js",
//     newWindow: true,
//     close: true,
//     gravity: "top", 
//     position: "right", 
//     stopOnFocus: true, 
//     style: {
//       background: "linear-gradient(to right, #00b09b, #96c93d)",
//     },
//     onClick: function(){} 
//   }).showToast();

const container = document.getElementById('container');
const form = document.getElementById('form');

let getTodos = () => {
    fetch('https://todobackend-m0su.onrender.com/todos')
        .then(res => res.json())
        .then(data => {
            showTodos(data);
        })
        .catch(err => {
            console.log(err);
        })
}

getTodos();

let showTodos = (todos) => {

    todos.forEach((el, i) => {
        let bool = false;
        let box = `<div class='todo' style='display: flex; justify-content: space-between; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; align-items: center; padding:10px;'>
           <input type='checkbox' />
           ${
            !bool ?
           `<h3>${el.title}</h3>`
           :
           `<input type='text' value=${el.title}/>`
           }
           <button onclick='${bool = !bool}' style='background-color:teal; color:white;'>Edit</button>
           <button style='background-color:red; color:white;'>Delete</button>
        </div>`;

        container.innerHTML += box;
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    
})


let addTodo = (todo) => {
    
}