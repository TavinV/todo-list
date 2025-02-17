const html = document.querySelector('html')
const toggle_darkmode = document.getElementById('change-mode')
const open_github = document.getElementById("open-github")

toggle_darkmode.addEventListener('click', () => {
    html.classList.toggle('light-mode')
})

open_github.addEventListener('click', () => {
    window.open("https://github.com/TavinV/todo-list")
})


// Fazer a renderização das tarefas pelos dados armazenados

let tarefas = fetch_tarefas();

let ids_renderizados = [];
ultimo_id = 0;

const ul_tarefas = document.querySelector('ul')

function render_tarefas(){
    ul_tarefas.innerHTML = ''

    tarefas.forEach(tarefa => {
        ultimo_id = Number(tarefa.id)
        
        li_tarefa = document.createElement("li")
        
        if (ids_renderizados.includes(tarefa.id) == false){
            // Caso seja uma nova tarefa, não uma antiga que foi renderizada novamente
            ids_renderizados.push(tarefa.id)
            li_tarefa.innerHTML = `
            <div id="${tarefa.id}" class="tarefa_n">
            <span class="nome-da-tarefa">
            <button onclick="tarefa_feita(${tarefa.id})" class="tarefa-feita"><i id="check" class="fa-solid fa-check"></i></button>
            <h2 class="titulo-tarefa">${tarefa.titulo}</h2>
            </span>
            
            <span class="controlar-tarefa">
            <button class="editar-tarefa"> <i id="pen-icon" class="fa-solid fa-pen-to-square"> </i> </button>
            <button onclick="apagar_tarefa(${tarefa.id})" clas="apagar-tarefa"><i id="trash-icon" class="fa-solid fa-trash"></i></button>
            </span>
            
            </div>
            `
        } else {
            li_tarefa.innerHTML = `
            <div id="${tarefa.id}" class="tarefa">
            <span class="nome-da-tarefa">
            <button onclick="tarefa_feita(${tarefa.id})" class="tarefa-feita"><i id="check" class="fa-solid fa-check"></i></button>
            <h2 class="titulo-tarefa">${tarefa.titulo}</h2>
            </span>
            
            <span class="controlar-tarefa">
            <button class="editar-tarefa"> <i id="pen-icon" class="fa-solid fa-pen-to-square"> </i> </button>
            <button onclick="apagar_tarefa(${tarefa.id})" clas="apagar-tarefa"><i id="trash-icon" class="fa-solid fa-trash"></i></button>
            </span>
            
            </div>
            `
        }

        if (tarefa.feito == true){
            li_tarefa.className = "tarefa-concluida"
        }

        ul_tarefas.append(li_tarefa)
    });
    salvar_tarefas()
}
            
render_tarefas()

// Eventos que irão adicionar uma tarefa nova (apertar enter no input ou apertar o botão)
const input_adicionar = document.getElementById("add_input")
const botao_adicionar = document.getElementById("add_button")

input_adicionar.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        // Agora adicionar uma tarefa nova
        
        let value = input_adicionar.value.trim()
        push_nova_tarefa(value)
    }
})

botao_adicionar.addEventListener('click', () => {
    
    let value = input_adicionar.value.trim()
    push_nova_tarefa(value)
    
})

// Funções utilitárias

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function buscar_index_da_tarefa(id) {
    index_da_tarefa = -1
    
    index = 0
    tarefas.forEach(tarefa => {
        if (tarefa.id == id) {
            index_da_tarefa = index
        } else {
            index++
        }
    });

    return index_da_tarefa
}


// Apagar tarefa

async function apagar_tarefa(id){
    console.log(tarefas)
    index_da_tarefa = buscar_index_da_tarefa(id)
    
    if(index_da_tarefa != (-1)) {
        tarefas.splice(index_da_tarefa,1)
        const tarefa_liEL = document.getElementById(id)
        tarefa_liEL.style.animation = 'fade-out .5s ease'
        
        await delay(500);
        render_tarefas()
        console.log(tarefas)
    }
    salvar_tarefas()
}


// Marcar tarefa como feita

async function tarefa_feita(id){ 
    index_da_tarefa = buscar_index_da_tarefa(id)
    
    if (index_da_tarefa != -1){
        tarefas[index_da_tarefa].feito = !tarefas[index_da_tarefa].feito
    }
    render_tarefas()
}

// Salvar o status das tarefas

function salvar_tarefas(){
    const json_Tarefas = JSON.stringify(tarefas)
    localStorage.setItem("tarefas", json_Tarefas)
}
function fetch_tarefas(){
    const tarefas_recebidas = localStorage.getItem("tarefas") || "[]"
    return JSON.parse(tarefas_recebidas)
}

function push_nova_tarefa(titulo){
    const nova_tarefa = {
        "id" : ultimo_id + 1,
        "titulo" : titulo,
        "feito" : false
    }
    tarefas.push(nova_tarefa)
    render_tarefas()
}