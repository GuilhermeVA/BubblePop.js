let totalEstouradas = 0;
const elementoContador = document.getElementById('contador');

const botao = document.getElementById("botao");
botao.addEventListener("click", trocar_cor);

let cores = 0;
ordem_cores = [{"minhaDiv": "background-color"}, {"botao" : "background-color"}, {"botao": "border-color"}, {"botao:hover" : "background-color"},
    {"botao": "color"}, {"body" : "background-color"}, {"contador" : "color"}, {"bolha" : "background-color"}
 ];

const paleta_cores = [ 
    ["#B4C5E4", "#3066BE", "#3066BE",  "#254e91", "#FBFFF1", "#FBFFF1", "#3066BE", "#B4C5E4" ],
    ["#A41623", "#F85E00", "#F85E00", "#A33F00", "#FFD29D", "#FFD29D", "#F85E00",  "#A41623"]
]

function criarBolha() {
    const bolha = document.createElement('div');
    bolha.classList.add('bolha');

    // Tamanho aleatório entre 10px e 50px
    const tamanho = Math.random() * 40 + 10 + "px";
    bolha.style.width = tamanho;
    bolha.style.height = tamanho;

    // Posição horizontal aleatória
    bolha.style.left = Math.random() * 100 + "vw";

    // Duração da animação aleatória (entre 4s e 8s)
    const duracao = Math.random() * 4 + 8 + "s";
    bolha.style.setProperty('--duracao', duracao);

    // Adicionamos o evento de estourar em cada bolha assim que ela nasce!
    bolha.addEventListener('click', function() {
    // 1. Aumentamos o valor da variável
    totalEstouradas++;
        
    // 2. Atualizamos o texto que aparece na tela
    elementoContador.innerText = totalEstouradas;
    
// 1. Descobrimos a posição exata dela na tela no momento do clique
    const rect = bolha.getBoundingClientRect();
    const yAtual = rect.top - window.innerHeight; // Posição relativa ao fundo

    // 2. Passamos essa posição para o CSS
    bolha.style.setProperty('--y-atual', `${yAtual}px`);

    // 3. Adicionamos a classe que faz a animação de "Pop"
    bolha.classList.add('estourando');
        setTimeout(() => {
            bolha.remove(); // Remove do HTML
        }, 200);
    });

    document.body.appendChild(bolha);

    // Remove a bolha do HTML depois que a animação acaba para não pesar o PC
    setTimeout(() => {
        bolha.remove();
    }, 8000);
}

// Cria uma bolha a cada 300 milissegundos
setInterval(criarBolha, 300);


function trocar_cor(){
    if (cores > paleta_cores.length()){
        cores = 0;
    }
    else{
        cores++;
    }

    div = document.getElementById("mihaDiv");
    botao = document.getElementById("botao");
    contador = document.getElementById("contador");
    bolha = document.getElementsByClassName("bolha");


}


