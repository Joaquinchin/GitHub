const imagenes = [...document.querySelectorAll('.img-galeria')];
const imagenes1 = [ ...document.querySelectorAll('.img-galeria1')];
const imagenesLight = document.querySelector('.agregar-imagen'); // Selecciona el elemento individual
const contenedorLight = document.querySelector('.imagen-light'); // Selecciona el elemento individual
const closeLight = document.querySelector('.close');

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
});

imagenes1.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
});

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== contenedorLight) { // Verifica si el clic ocurrió en el contenedorLight
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        Menu.style.opacity = '1';
    }
});

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    Menu.style.opacity = '0';
};


