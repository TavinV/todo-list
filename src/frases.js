let frase_motivacional = document.getElementById("frase_motivacional")
let frases = [
    'Apreciando cada passo, mas já sonhando com as próximas conquistas!',
    'Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.',
    'Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores!',
    'Só tenho a agradecer a cada um dos desafios que me trouxeram até aqui, que me fizeram crescer e aprender tantas coisas!',
    'Tenho uma profunda gratidão por cada lição que aprendi no passado. Afinal, foram elas que me permitiram chegar até aqui!',
    'A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!',
    'Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!',
    'Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!',
    'Sucesso é um esporte coletivo. Demonstre gratidão a todos os que colaboram com suas vitórias.'
]

let frase_aleatoria = frases[Math.floor((Math.random()*frases.length))];
frase_motivacional.innerText = frase_aleatoria