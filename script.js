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
/*
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
        
          <div id="informacoesDiv">
         
                <div class="d-flex">
                    <div id= "img-infos" style="background-image: url(${informacoes.imagem})"></div>
                <div style="padding:20px">
                 <h2>${informacoes.titulo}</h2>
                 <h1>${informacoes.descricao}</h1>
                </div>
                
                </div>

                
                
        
            <div class="d-flex justify-content-end"><button onclick= "fecharInfos()" id="voltar">Voltar</button></div>
          
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

/*Formulário*/

const form = document.getElementById("form");
const namecli = document.getElementById("namecli");
const emailcli = document.getElementById("emailcli");
const telcli = document.getElementById("telcli");
const assunto = document.getElementById("assunto");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    checkInputNomeCli();
    checkInputEmailCli();
    checkInputTelCli();
    checkInputAssunto();
})

function checkInputNomeCli(){
    const nomecliValue = namecli.value;
    if(nomecliValue === ""){
        errorInput(namecli, "Preencha o Nome!")
    } else{
        const formItem = namecli.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmailCli(){
    const emailValue = emailcli.value;

    if(emailValue === ""){
        errorInput(emailcli, "Preencha o E-mail!");
    } else{
        const formItem = emailcli.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputTelCli(){
    const telcliValue = telcli.value;
    if(telcliValue === ""){
        errorInput(telcli, "Preencha o Telefone!")
    } else{
        const formItem = telcli.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputAssunto(){
    const assuntoValue = assunto.value;
    if(assuntoValue === ""){
        errorInput(assunto, "Preencha o Assunto!")
    } else{
        const formItem = assunto.parentElement;
        formItem.className = "form-content";
    }
}


function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error";
}

// parte do portifólio


const conteudo_port = document.querySelector(".conteudo_port");
const conteudoslide = document.querySelector(".slide_port");
const arrowBtns = document.querySelectorAll(".conteudo_port i");
const firstCardWidth = conteudoslide.querySelector(".card").offsetWidth;
const carouselChildrens = [...conteudoslide.children];

let isDragging = false, startX, startScrollLeft, timeoutId;
let cardPerView = Math.round(conteudoslide.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    conteudoslide.insertAdjacentHTML("afterbegin",card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    conteudoslide.insertAdjacentHTML("beforeend",card.outerHTML);
});

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () =>{
        conteudoslide.scrollLeft += btn.id === "esquerda" ? -firstCardWidth : firstCardWidth;
    })
    
})
const dragStart = (e) => {
    isDragging = true;
    conteudoslide.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = conteudoslide.scrollLeft;
    
}

const dragging = (e) => {
    if(!isDragging) return;
    conteudoslide.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    conteudoslide.classList.remove("dragging");
}

const autoPlay = () => {
    if(window,innerWidth < 800) return;
    timeoutId = setTimeout(() => conteudoslide.scrollLeft += firstCardWidth, 2500);
}
autoPlay()
const infiniteScroll = () => {
    if(conteudoslide.scrollLeft === 0 ) {
        conteudoslide.classList.add("no-transition");
        conteudoslide.scrollLeft = conteudoslide.scrollWidth - ( 2 * conteudoslide.offsetWidth);
        conteudoslide.classList.remove("no-transition");
    } else if(Math.ceil(conteudoslide.scrollLeft) === conteudoslide. scrollWidth - conteudoslide.offsetWidth){
        conteudoslide.classList.add("no-transition");
        conteudoslide.scrollLeft = conteudoslide.offsetWidth;
        conteudoslide.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!conteudo_port.matches(":hover")) autoPlay();
}
conteudoslide.addEventListener("mousemove", dragging);
conteudoslide.addEventListener("mousedown", dragStart);
document.addEventListener("mouseup", dragStop);
conteudoslide.addEventListener("scroll", infiniteScroll);
conteudo_port.addEventListener("mouseenter", () => clearTimeout(timeoutId));
conteudo_port.addEventListener("mouseleave", autoPlay);

//abrir referencias da tela portifólio

function openModal(imageSrc, nomeport, details) {
    var modal = document.getElementById("modal-porti");
    var modalImg = document.getElementById("modal-image");
    var modaltitulo = document.getElementById("caption")
    var detailsList = document.getElementById("details");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    modaltitulo.innerText = nomeport;

    detailsList.innerHTML = '';
    
    // Adiciona cada detalhe como um item de lista
    details.forEach(detail => {
        var listItem = document.createElement('li');
        listItem.innerText = detail;
        detailsList.appendChild(listItem);

    });
}



function closeModal() {
    var modal = document.getElementById("modal-porti");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('#header'); // Seleciona a navbar
    const footer = document.querySelector('footer'); // Seleciona o footer

    window.addEventListener('scroll', function () {
        const footerTop = footer.getBoundingClientRect().top; // Distância do topo do footer
        const windowHeight = window.innerHeight; // Altura da janela visível

        if (footerTop <= windowHeight) {
            // Se o footer estiver visível na janela, a navbar desaparece
            navbar.style.opacity = '0';
            navbar.style.transition = 'opacity 0.5s'; // Animação para suavizar o desaparecimento
        } else {
            // Caso contrário, a navbar reaparece
            navbar.style.opacity = '1';
        }
    });
});
