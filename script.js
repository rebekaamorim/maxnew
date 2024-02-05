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

// Serviços

const info = document.querySelector('.fundo_caixa');
info.style.pointerEvents = 'none';

info.addEventListener('click', abrirInfosClicado);

// Função para abrir ou fechar as informações
function abrirInfosClicado() {
    const img = document.querySelector('.caixa');
    img.classList.toggle('visivel');
    info.classList.toggle('visivel');
}

function fecharInfos(){
    informacoesDiv.style.opacity = '0';
    info.style.pointerEvents = 'none';
}

const informacoesDiv = document.getElementById('informacoesDiv');


function abrirInfos(tipo) {
    function obterInformacoes(tipo) {
        switch(tipo){
            case 'Pintura':
                return{
                    titulo:'PINTURA',
                    descricao: 'Executamos com critério todas as etapas de tratamento e preparação antes da pintura, assim podemos garantir a qualidade e eficácia dos nossos serviços. Nosso compromisso é com você! Profissionais qualificados, material de alto padrão de qualidade (Premium). Qualidade Garantida!',                
                    imagem: 'img/pintura.jpg'
                };
            
            case 'Restauração':
                return{
                    titulo:'RESTAURAÇÃO',
                    descricao: 'Para assegurar a durabilidade da conservação do prédio e a frescura da pintura, seguimos rigorosamente todas as etapas de restauração. Inicialmente, realizamos limpeza nas fachadas para identificar trincas, fissuras, rebocos soltos. Isso preserva o patrimônio e a qualidade da pintura. Compromisso: restauração genuína',
                    imagem: 'img/restauracao.jpg'
                };
            case 'Hidrojateamento':
                return{
                    titulo:'HIDROJATEAMENTO',
                    descricao: 'A Max New, com equipe experiente, garante remoção eficaz de resíduos e detritos em fachadas prediais. Seja na preparação para revestimentos ou concreto endurecido, oferecemos soluções personalizadas, atendendo às necessidades de cada cliente com eficácia.',
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


    const informacoes = obterInformacoes(tipo);
    const conteudoHTML = `

          <div id="InformacoesDiv">
          <h2>${informacoes.titulo}</h2>
          <h1>${informacoes.descricao}</h1>
          
          <!-- imagem -->
          <div id= "img-infos" style="background-image: url(${informacoes.imagem})"></div>

          <button onclick= "fecharInfos()" id="voltar">Voltar</button>
          </div>
      `;
  
      // Atribuir o conteúdo HTML à div de informações
      informacoesDiv.innerHTML = conteudoHTML;
      
      const btn_voltar = document.querySelector('#voltar');
      btn_voltar.addEventListener('click', fecharInfos);
      
      
      // Mostrar a div de informações
      informacoesDiv.style.opacity = '1';
      info.style.pointerEvents = 'auto';
     
      
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

