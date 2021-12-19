const body = document.querySelector('body');
const clickMe = document.querySelector('#clickMe');
const hex = document.querySelector('#hex');
const copy = document.querySelector('#copy');
const showHex = document.querySelector('#showHex');
const listHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
body.style.backgroundColor = 'black';

hex.innerHTML = '#000000'
clickMe.addEventListener('click', () => {
    let hexStyle = '#'
    for (let i = 0; i < 6; i++) {
        let hexColor = parseInt(Math.random() * listHex.length)
        hexStyle += listHex[hexColor]
    }
    body.style.backgroundColor = hexStyle
    hex.innerHTML = hexStyle
    showHex.value = hexStyle
    body.style.transition = '1s linear'
    console.log(hexStyle)
})
copy.addEventListener('click', () => {
    navigator.clipboard.writeText(showHex.value);
    alert(`hexStyle: ${showHex.value}`)
})