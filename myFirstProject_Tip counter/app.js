//get value
let inputVal

//get inputed price from html:
//the function gets implemented on the click of any button

function getInputValue() {
    inputVal = document.getElementById("price").value
    return inputVal
}

// another function to get inputed custom %
function getPercValue() {
    inputPerc = (document.getElementById('perc').value) / 100
    return inputPerc
}

// get the buttons from the html
let btns = document.querySelectorAll('.btn')
const custom = document.querySelector('.custom')
//console.log(custom)

btns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {
        const event = e.currentTarget.classList
        if (event.contains('15')) {
            fullPrice = inputVal * 1.15
            text.textContent = 'Your final bill is:'
            value.textContent = fullPrice.toFixed(2)
        }
        if (event.contains('20')) {
            fullPrice = inputVal * 1.2
            text.textContent = 'Your final bill is:'
            value.textContent = fullPrice.toFixed(2)
        }
        if (event.contains('custom')) {
            custom.classList.toggle('show-custom')
        }
        if (event.contains('enter')) {
            fullPrice = inputVal * (inputPerc + 1)
            text.textContent = 'Your final bill is:'
            value.textContent = fullPrice.toFixed(2)
        }
    })
})

//it works now! 

//Bugs
//First bug - if entered custom % and pressed 'enter' more than once, the final price would be counted from the last finalPrice
//fix - change the name of the showned value to different one than 'inputVal'
//Second bug - if you enter the price, get custom % and then enter different price and press 'enter' - it doesnt work, you have to press 'custom %' button
//fix - put two onclick events (getInputValue(); and getPercValue) on 'enter' button, not on 'choose custom %' value. 

