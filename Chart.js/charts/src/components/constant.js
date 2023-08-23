
export function randomNumber(num){
    return Math.floor(Math.random()*num);
}

export function randomColorGenerator (num) {
    return `rgba(${randomNumber(num)}, ${randomNumber(num)}, ${randomNumber(num)}, 0.5)`
}