let allDivs = document.querySelectorAll('div');

let handleClick = (event) => {
    console.log(event.target);
}

allDivs.forEach(el => {
    el.addEventListener('click', handleClick)
})

document.body.addEventListener('click', handleClick);
document.addEventListener('click', handleClick)