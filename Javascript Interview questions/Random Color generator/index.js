let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2'); 

function generateColor () {
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    
    let rgbColor = `rgb(${a}, ${b}, ${c})`
    return rgbColor;
}

btn1.addEventListener('click', () => {
    box1.style.backgroundColor = generateColor();
})

box2.addEventListener('mousemove', () => {
    box2.style.backgroundColor = generateColor();
})