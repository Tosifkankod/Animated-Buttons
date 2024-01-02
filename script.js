const button = document.getElementById('button');
const orange = document.getElementsByClassName('orange')[0];
const magenta = document.getElementsByClassName('magenta')[0];
const purple = document.getElementsByClassName('purple')[0];


// black
button.addEventListener('mouseover', () => {
    button.innerHTML = "Wow! 🤩"
})

button.addEventListener('mouseout', () => {
    button.innerText = "Black Color"
})


// orange
orange.addEventListener('mouseover', () => {
    orange.innerHTML = "Wowwow! 🥰"
})

orange.addEventListener('mouseout', () => {
    orange.innerText = "Orange Color"
})


// megenta
magenta.addEventListener('mouseover', () => {
    magenta.innerHTML = "Omg wow🥰!"
})

magenta.addEventListener('mouseout', () => {
    magenta.innerText = "magenta  "
})


// PURPLE
purple.addEventListener('mouseover', () => {
    purple.innerHTML = "purple! 😘"
})

purple.addEventListener('mouseout', () => {
    purple.innerText = "And My Btfl "
})