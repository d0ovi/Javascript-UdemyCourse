//set initial count
let count = 0

//get the value from the html
let value = document.querySelector('#value')
// get the buttons from the html
let btns = document.querySelectorAll('.btn')
//querySelectorAll gets the nodeList. We can use forEach with nodeLists
//console.log(btns)

//when using forEach on the buttons, we cicle around all the buttons, so the action event should be inside the loop
btns.forEach(function (btn) {
    //console.log(btn) inside the forEach we are accesing every item in the nodeList
    btn.addEventListener('click', function (e) {
        const event = e.currentTarget.classList
        if (event.contains('decrease')) {
            count--
        }
        else if (event.contains('increase')) {
            count++
        }
        else {
            count = 0
        }
        value.textContent = count
    })
})