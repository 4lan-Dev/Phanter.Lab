// MENU HAMBURGUER

const menuToggle =
document.getElementById("menu-toggle");

const menu =
document.getElementById("menu");

menuToggle.addEventListener("click", () => {

menu.classList.toggle("active");

});

// FECHAR POPUP

const closeModal =
document.getElementById("closeModal");

const promoModal =
document.getElementById("promoModal");

closeModal.addEventListener("click", () => {

promoModal.style.display = "none";

});

// FECHAR MENU AO CLICAR

const links =
document.querySelectorAll(".menu a");

links.forEach(link => {

link.addEventListener("click", () => {

menu.classList.remove("active");

});

});

// ANIMAÇÃO AO ROLAR

const elementos =
document.querySelectorAll(
".card, .sobre, .contato, .titulo"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("mostrar");

}

});

},{
threshold:0.2
});

elementos.forEach(elemento=>{

elemento.classList.add("animar");

observer.observe(elemento);

});