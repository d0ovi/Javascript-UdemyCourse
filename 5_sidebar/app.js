const toggleBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const closeBtn = document.querySelector('.close-btn')

//show menu if toggle button is clicked: 
toggleBtn.addEventListener('click', function () {
    /*     if (sidebar.classList.contains('show-sidebar')) {
            sidebar.classList.remove('show-sidebar')
        }
        else {
            sidebar.classList.add('show-sidebar')
        } */
    //ooor this could be done in one line: 
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar')
})


