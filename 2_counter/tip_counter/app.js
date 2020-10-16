//get value
let inputVal

//get inputed price from html:
//the function gets implemented on the click of any button

function getInputValue() {
    inputVal = document.getElementById("price").value
    return inputVal
}

// get the buttons from the html
let btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {
        const event = e.currentTarget.classList
        if (event.contains('15')) {
            inputVal = inputVal * 1.15
            text.textContent = 'Your final bill is:'
            value.textContent = inputVal.toFixed(2)
        }
        if (event.contains('20')) {
            inputVal = inputVal * 1.2
            text.textContent = 'Your final bill is:'
            value.textContent = inputVal.toFixed(2)
        }
        if (event.contains('25')) {
            inputVal = inputVal * 1.25
            text.textContent = 'Your final bill is:'
            value.textContent = inputVal.toFixed(2)
        }
    })
})