// traversing the dom
// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
//     //I dont really understand again how it works :( okay, i'll need to do one more time in different setting it. 
// })

//using selectors inside the element

const questions = document.querySelectorAll('.question')

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn')

    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            //item is the same question, just not to confuse the names, lets name it item
            //console.log(item !== question)
            if (item !== question) {
                //so itesm is the article, we are checkin if it is the same as the one open
                //if not, then remove the show text class and close other questions
                //does it make sense? does it not ? 
                item.classList.remove('show-text')
            }

        })
        question.classList.toggle('show-text')
    })
})
