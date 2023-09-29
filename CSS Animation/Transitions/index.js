
let buttons = ['btn1', 'btn2', 'btn3', 'btn4'];

function createElement() {
    resetButtons();
    const cont = document.getElementById('container2');
    buttons.forEach((el, i) => {
        const btn = document.createElement('button');
        btn.textContent = el;
        btn.classList.add(`btn${i+1}`);
        cont.append(btn);
    })
}

function resetButtons (){
    const btns = document.querySelectorAll('container2');
    btns.forEach((el, i) => {
        el.style.backgroundColor = '',
        el.textContent = `btn${i+1}`
    })
}

// getButtons.forEach((el, i) => {
//     el.addEventListener('click', (e) => {
//         e.preventDefault();
//         el.textContent = 'clicked';
//         el.style.backgroundColor = 'red';
//         console.log(el)
//     })

// })