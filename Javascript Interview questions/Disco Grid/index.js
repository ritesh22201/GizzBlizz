
let container = document.getElementById('container');

function randomNumber(num){
    return Math.floor(Math.random()*num);
}

function generateColor() {
    let colorArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += colorArr[randomNumber(16)];
    }

    return color;
}

function createBoxes() {
    for (let i = 0; i < 500; i++) {
        let box = `<div class='smallbox' style='width: 50px; height: 50px; border: 1px solid black; display: grid; place-items: center;'></div>`
        container.innerHTML += box;
    }
    return container.children;
}

let smallbox = createBoxes();

container.addEventListener('mousemove', () => {
    for (let i = 0; i < smallbox.length; i++) {
        smallbox[i].style.backgroundColor = generateColor();
        smallbox[i].textContent = randomNumber(500);
    }
})


