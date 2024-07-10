const html = document.querySelector('html')
const toggle_darkmode = document.getElementById('change-mode')
const open_github = document.getElementById("open-github")


toggle_darkmode.addEventListener('click', () => {
    html.classList.toggle('light-mode')
})

open_github.addEventListener('click', () => {
    window.open("https://github.com/TavinV")
})

// Adicionar tarefas do json

const tarefas = document.querySelector('ul')

fetch('./tarefas.json')
    .then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(tarefa => {
                tarefas.innerHTML += `<li>
                    <div id="${tarefa.id}" class="tarefa">
                        <span class="nome-da-tarefa">
                            <button class="tarefa-feita"><i id="check" class="fa-solid fa-check"></i></button>
                            <h2>${tarefa.titulo}</h2>
                        </span>
                        
                        <span class="controlar-tarefa">
                            <button class="editar-tarefa"> <i id="pen-icon" class="fa-solid fa-pen-to-square"> </i> </button>
                            <button clas="apagar-tarefa"><i id="trash-icon" class="fa-solid fa-trash"></i></button>
                        </span>
                    </div>
                </li>`
            });
        })