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
                descricao: 'É fundamental seguir com rigor todas as etapas da restauração para garantir por muito mais tempo a conservação do prédio e o aspecto novo da pintura. Antes de mais nada é feito uma limpeza nas fachadas para identificar todas as anomalias a serem corrigidas, como trincas e fissuras, rebocos soltos ou desplacados. Tudo isso para garantir a conservação do seu patrimônio e a qualidade da pintura por muito mais tempo. Nós GARANTIMOS, restauramos de Verdade!',
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

          <button id= "voltar">Voltar</button>
          </div>
      `;
  
      // Atribuir o conteúdo HTML à div de informações
      informacoesDiv.innerHTML = conteudoHTML;
  
      // Mostrar a div de informações
      informacoesDiv.style.display = 'block';
}

