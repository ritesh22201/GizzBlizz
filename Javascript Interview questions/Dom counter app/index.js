
let container = document.getElementById('container');

let h1 = document.createElement('h1');
h1.textContent = 0;
let inc = document.createElement('button');
inc.textContent = 'Inc'
let desc = document.createElement('button');
desc.textContent  = 'Desc'
let reset = document.createElement('button');
reset.textContent  = 'Reset'

inc.addEventListener('click', function(){
    h1.textContent = +h1.textContent + 1;
})

desc.addEventListener('click', function(){
    h1.textContent = +h1.textContent - 1;
})

reset.addEventListener('click', function(){
    h1.textContent = 0;
})

container.append(h1, inc, desc, reset);