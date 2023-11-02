const Menu = document.querySelector('.IconoMenu')
const MenuNav = document.querySelector('.menu-navegacion')

console.log(Menu)
console.log(MenuNav)

Menu.addEventListener('click', ()=>{/*Funcion de flecha*/
    MenuNav.classList.toggle("spread")/*Lo que hace esta funcion es que le agrega es clase a la otra clase, en este caso a la 
    clase Menu navegacion, le agregagomos el spreed para que cuando hagamos click se muestre el menu nav, que lo teniamos oculto*/
    /*toggle, le agrega o le saca una clase a otra dependiendo si la tiene o no nashei*/
})

window.addEventListener('click', e=>{/*Le asignamos e al click*/
    /*console.log(e.target) Esta accion nos sirve para ver que estamos haciendo click en la pantalla, lo muestra en el console*/
    if(MenuNav.classList.contains('spread')
     && e.target != MenuNav && e.target != Menu) {/*Hace que si el el menuNav tiene la clase spread, el click es en otro lugar que en 
    el MenuNav y al icono de menu, entonces se la cierra*/
        MenuNav.classList.toggle("spread")/*En este caso el toggle en vez de agregar el spread como antes ahora lo estamos sacando  
        entonces se cierra*/
     }
})
//Funciones para rediccionar a otras paginas
function redireccionar() {
    window.open ('https://www.mercedes-benz.com.ar/passengercars.html?group=all&subgroup=see-all&view=BODYTYPE, _blank'); //Se nos abre en una pgina en blanco

  }
  
  function redireccionar(url) {
    window.open(url, '_blank');
}
