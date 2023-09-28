// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${import.meta.env.REACT_APP_JSON_SERVER_PORT
  }`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const userLoginURL = `${baseServerURL}/login`;
const urlTodos = `${baseServerURL}/todos/`;

// const baseServerURLMain = 'https://mock2-js.onrender.com';

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let loginForm = document.getElementById('login-form');
let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-password");
let loginUserButton = document.getElementById("login-user");

let getTodoButton = document.getElementById("fetch-todos");

let sortLowToHigh = document.getElementById("sort-low-to-high");
let sortHighToLow = document.getElementById("sort-high-to-low");
let filterCompleted = document.getElementById("filter-completed");
let filterPending = document.getElementById("filter-pending");
let userAuthToken = JSON.parse((localStorage.getItem('accessToken'))) || '';
let userAuthName = JSON.parse(localStorage.getItem('user')) || '';

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    let loginData = {
      username: loginUserUsername.value,
      password: loginUserPassword.value
    }

    let res = await fetch(`${userLoginURL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData)
    })

    if (res.ok) {
      let data = await res.json();
      if (data.accessToken) {
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
        localStorage.setItem('user', JSON.stringify(data.user));
      }
    }

  } catch (error) {
    console.log(error);
  }

})


userAuthToken && (notificationWrapper.innerHTML = `<h5 class="notification info">
hey ${userAuthName.firstname} ${userAuthName.lastname}, welcome back!
</h5>`)


function getTodos(getTodoButton){
  getTodoButton.addEventListener("click",async()=>{
    try {
    const headers = {
      "Authorization": `Bearer ${userAuthToken}`, 
    };
  
    const response = await fetch(urlTodos, { headers });
  
    if (response.ok) {
      const data = await response.json();
      renderCardData(data);
    } else {
      console.error("Failed to fetch todos:", response.status);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
  })
}

getTodos(getTodoButton);


function renderCardData(data) {
  mainSection.innerHTML = `${data.map((el) => {
    return( `
      <div id='todo-list-wrapper' class='todo-list-wrapper'>
         <label class='todo-item-label'>
           <input ${el.completed ? 'checked' : ''} class='todo-item-checkbox' type='checkbox' data-id=${el.id}/>
           ${el.title}
         </label>
      </div>
    `)
  }).join('')}`
}

function ascSort(data) {
  data.sort((a, b) => {
    let titleA = a.title.toLowerCase();
    let titleB = b.title.toLowerCase();

    

  })
}