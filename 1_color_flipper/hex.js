const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    // ! hex is going to change, so you need to have let, not const
    //and we need to hard code '#', cos it is just what it is. the hex. 
    let hexColor = '#'
    for (i = 0; i < 6; i++) {
        hexColor += hex[getRndHex()]
        console.log(hexColor)
    }
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
    color.style.color = hexColor
})

//function to get random hex numbers: 
function getRndHex() {
    return Math.floor(Math.random() * hex.length)
}