function main() {

    let container = document.getElementById('container');

    let h1 = document.createElement('h1');
    let inc = document.createElement('button');
    inc.textContent = 'Inc'
    let desc = document.createElement('button');
    desc.textContent = 'Desc'
    let reset = document.createElement('button');
    reset.textContent = 'Reset'

    let count = 0;

    inc.addEventListener('click', function () {
        count += 1;
        h1.textContent = count;
    })

    desc.addEventListener('click', function () {
        count -= 1;
        h1.textContent = count;
    })

    reset.addEventListener('click', function () {
        h1.textContent = 0;
    })

    h1.innerText = count;

    container.append(h1, inc, desc, reset);
}

main();
