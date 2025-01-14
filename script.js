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

      // Informações para cada seção
      const infos = {
        Pintura: {
            texto: "Executamos com critério todas as etapas de tratamento e preparação antes da pintura, assim podemos garantir a qualidade e eficácia dos nossos serviços. Nosso compromisso é com você! Profissionais qualificados, material de alto padrão de qualidade (Premium). Qualidade Garantida!",
            imagem: "img/pintura.jpg"
        },
        Restauração: {
            texto: "Para assegurar a durabilidade da conservação do prédio e a frescura da pintura, seguimos rigorosamente todas as etapas de restauração. Inicialmente, realizamos limpeza nas fachadas para identificar trincas, fissuras, rebocos soltos. Isso preserva o patrimônio e a qualidade da pintura. Compromisso: restauração genuína",
            imagem: "img/restauracao.jpg"
        },
        Hidrojateamento: {
            texto: "A Max New, com equipe experiente, garante remoção eficaz de resíduos e detritos em fachadas prediais. Seja na preparação para revestimentos ou concreto endurecido, oferecemos soluções personalizadas, atendendo às necessidades de cada cliente com eficácia.",
            imagem: "img/hidro.png"
        },
        Impermeabilização: {
            texto: "A impermeabilização em fachadas protege edifícios contra danos causados por clima e umidade, prevenindo infiltrações e danos estruturais. Essa prática mantém a integridade do prédio, contribui para sua durabilidade, reduzindo riscos de corrosão e mofo, e assegura um ambiente interno mais seguro e saudável.",
            imagem: "img/Impermeabilização.jpg"
        }
    };
    
    // Função para carregar a modal dinamicamente
    function carregarModal(chave) {
        const modalTitle = document.getElementById('infoModalLabel');
        const modalBodyImage = document.getElementById('infoModalImage');
        const modalBodyText = document.getElementById('infoModalText');
    
        // Carregar informações dinâmicas
        const info = infos[chave];
    
        modalTitle.textContent = chave;
        modalBodyText.textContent = info.texto;
    
        // Atualizar imagem e torná-la visível
        modalBodyImage.src = info.imagem;
        modalBodyImage.style.display = "block";
    }
    