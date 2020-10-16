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

    })
})

let individual = document.querySelector('.individual')


document.getElementById('individual').addEventListener("click", addInput);

/*function addInput() {
    var demo = document.getElementById('demo');
    demo.insertAdjacentHTML('beforeend', '<input type="number" class="percenteges" id="perc"> <br>');

}*/
var num = 1;
function addInput() {
    var demo = document.getElementById('demo');
    demo.insertAdjacentHTML('beforeend', '<div class="form-holder" style="width: 30%;"><a class="form-label">Billet type</a> <br><select name="ttype' + num + '"><option value="normal">Standard Billet</option><option value="add-on">Tilkøbs Billet</option></select></div><div class="form-holder" style="width: 31%; margin-left: 0.6%;"><a class="form-label">Billet navn</a> <br><input name="tname' + num + '" type="text" placeholder="F.eks. Entré Billet" style="width: 100%;" /></div><div class="form-holder" style="float: right; width: 18%; margin-left: 1%;"><a class="form-label">Antal</a> <br><input name="tquan' + num + '" type="text" placeholder="F.eks. 500" style="width: 100%;" /></div><div class="form-holder" style="float: right; width: 18%;"><a class="form-label">Pris (DKK)</a> <br><input name="tprice' + num + '" type="text" placeholder="F.eks. 100" style="width: 100%;" /></div> <br>');
    num++;
}