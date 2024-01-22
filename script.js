/** Comportamento navbar **/
window.addEventListener("scroll", function(){
    var header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})


/* Animação hamburger */
const menuDiv = document.getElementById('nav_mobile')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
    const btn = document.getElementById('btn_menu')
    btn.classList.toggle('hamburguer')
    menuDiv.classList.toggle('abrir')
}

// Seleciona a div de fundo_caixa
const info = document.querySelector('.fundo_caixa');
info.style.pointerEvents = 'none';

// Adiciona um evento de clique à div de fundo_caixa
info.addEventListener('click', abrirInfos);

// Função para abrir ou fechar as informações
function abrirInfos() {
    // Seleciona a div com a classe 'caixa'
    const img = document.querySelector('.caixa');
    
    // Torna a classe 'caixa' visível ou invisível
    img.classList.toggle('visivel');

    // Torna a classe 'fundo_caixa' visível ou invisível
    info.classList.toggle('visivel');
    
}


const informacoesDiv = document.getElementById('informacoesDiv');

function abrirInfos(tipo) {
    function obterInformacoes(tipo) {
    switch(tipo){
        case 'Pintura': {
            return{
                titulo:'PINTURA',
                descricao: 'Executamos com critério todas as etapas de tratamento e preparação antes da pintura, assim podemos garantir a qualidade e eficácia dos nossos serviços. Nosso compromisso é com você! Profissionais qualificados, material de alto padrão de qualidade (Premium). Qualidade Garantida!',                
                imagem: 'img/pintura.jpg'
            };
        }
        case 'Restauração':
            return{
                titulo:'RESTAURAÇÃO',
                descricao: 'Para assegurar a durabilidade da conservação do prédio e a frescura da pintura por mais tempo, é essencial seguir rigorosamente todas as etapas da restauração. Inicialmente, realiza-se uma limpeza nas fachadas para identificar anomalias, como trincas, fissuras, rebocos soltos ou desplacados. Isso garante a preservação do patrimônio e a qualidade da pintura. Nossa garantia: restauração genuína!',
                imagem: 'img/restauracao.jpg'
            };
        case 'Hidrojateamento':
            return{
                titulo:'HIDROJATEAMENTO',
                descricao: 'Com uma equipe altamente capacitada e experiente, a Max New atua de forma eficiente e segura, garantindo a remoção eficaz de resíduos, detritos e incrustações em fachadas prediais. Seja para preparação de superfícies antes da aplicação de revestimentos ou remoção de concreto endurecido, a empresa oferece soluções personalizadas para atender às necessidades específicas de cada cliente.',
                imagem:'img/hidro.png'
            };
        case 'Impermeabilização':
            return{
                titulo: 'IMPERMEABILIZAÇÃO',
                descricao:'A impermeabilização em fachadas protege edifícios contra danos causados por clima e umidade, prevenindo infiltrações e danos estruturais. Essa prática mantém a integridade do prédio, contribui para sua durabilidade, reduzindo riscos de corrosão e mofo, e assegura um ambiente interno mais seguro e saudável.',
                imagem:'img/Impermeabilização.jpg'
            };
    }
}
      // Obter informações específicas para o tipo atual
      
      const informacoes = obterInformacoes(tipo);
      // Criar uma estrutura HTML com base nas informações obtidas

            
      const conteudoHTML = `

          <div id="InformacoesDiv">
          <h2>${informacoes.titulo}</h2>
          <h1>${informacoes.descricao}</h1>
          
          <!-- Exemplo de imagem -->
          <img id= "img-infos"src="${informacoes.imagem}" alt="${informacoes.titulo}">

          <button onclick= "fecharInfos()" id="voltar">Voltar</button>
          </div>
      `;
  
      // Atribuir o conteúdo HTML à div de informações
      informacoesDiv.innerHTML = conteudoHTML;
  
      // Mostrar a div de informações
      informacoesDiv.style.opacity = '1';
      info.style.pointerEvents = 'auto';
      const btn_voltar = document.querySelector("#voltar")

            btn_voltar.addEventListener('click', fecharInfos)
            function fecharInfos(){
                informacoesDiv.style.opacity = '0';
                info.style.pointerEvents = 'none';
            }

}

/*Compotamento caixas destaques */
function expandirDest(id) {
    const blocos = document.querySelectorAll('.bloco');

    blocos.forEach(bloco => {
        if (bloco.id === id) {
            bloco.classList.toggle('expandido');
        } else {
            bloco.classList.remove('expandido');
        }
    });
}  

