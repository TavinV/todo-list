const html = document.querySelector('html')
const toggle_darkmode = document.getElementById('change-mode')
const open_github = document.getElementById("open-github")


toggle_darkmode.addEventListener('click', () => {
    html.classList.toggle('light-mode')
})

open_github.addEventListener('click', () => {
    window.open("https://github.com/TavinV")
})
