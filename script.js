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

