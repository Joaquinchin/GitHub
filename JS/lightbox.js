const imagenes = [...document.querySelectorAll('.img-galeria')];/*Usamos el spread operator xa convertirlo a arrays xq nose xq no lo tomaba como constante sino*/
const imagenes1 = [...document.querySelectorAll('.img-galeria1')];
const imagenesLight = [...document.querySelectorAll('.agregar-imagen')];
const imagenesLight2 = [...document.querySelectorAll('.imagen-light')];


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
        /*alert("ola linda")*/
        aparecerImagen(imagen.getAttribute('src'))
    })
})
imagenes1.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
        alert("Uribe la concha de tu madre")
    })
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src= imagen;

}