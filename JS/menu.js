const Menu = document.querySelector('.IconoMenu')
const MenuNav = document.querySelector('.menu-navegacion')

console.log(Menu)
console.log(MenuNav)

Menu.addEventListener('click', ()=>{/*Funcio de flecha*/
    MenuNav.classList.toggle("spreed")/*Lo que hace esta funcion es que le agrega es clase a la otra clase, en este caso a la 
    clase Menu navegacion, le agregagomos el spreed para que cuando hagamos click se muestre el menu nav, que lo teniamos oculto*/
    /*toggle, le agrega o le saca una clase a otra dependiendo si la tiene o no nashei*/
})