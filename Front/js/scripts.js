/*SLIDER INICIO*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // La imagen cambia cada 3 segundos
}
/*SLIDER FIN*/


/* En este codico se encuentra como se cambia el contenido de las tarjetas de la 
seccion de informacion*/

const info = [
    {
        imagen: 'url(/Front/picture/Laeeb.jpg)',
        titulo: "¡Hola, soy La'eeb™!",
        texto: "Soy tu mejor compañero de fútbol del  verso de las mascotas. Aquí para dar la bienvenida al mundo, inspirar a los jóvenes aficionados, animar la acción y celebrar cada gol en Qatar 2022™. La'eeb™ es mi nombre, una palabra árabe que significa jugador súper habilidoso, y me encanta el hermoso juego. También me encanta apoyar, y no solo desde las gradas. ¡Me encanta apoyar a todos los que tienen una visión, trabajan duro y se proponen alcanzar sus sueños!"
    },
    {
        imagen: 'url(/Front/picture/AL-RIHLA.jpg)',
        titulo: 'AL RIHLA',
        texto: 'PELOTA OFICIAL DE LA COPA MUNDIAL 2022™. Al Rihla es la pelota oficial de la Copa Mundial Catar 2022, que llega con el logo oficial de la Copa Mundial de la FIFA™, además de la certificación Certificación FIFA Quality Pro, que garantiza un juego perfecto. Al Rihla significa "el viaje". Esta es la pelota que da comienzo a todo. Cada toque es una nueva historia. El 1% de las ventas netas globales de nuestras pelotas de fútbol se destinará a Common Goal hasta 2023.'
    }
     
]

// guardamos los items que nos interesan
const img = document.getElementById('img-contenedor')
const tit = document.getElementById('info-titulo');
const desc = document.getElementById('info-desc');

const btnIzq = document.querySelector(".btn-izq");
const btnDer = document.querySelector(".btn-der");
let noInfo = 0;
//img.style.background = info[0].imagen;

window.addEventListener("DOMContentLoaded", function (){
   
    img.style.backgroundImage = info[noInfo].imagen;
    tit.innerText = info[noInfo].titulo;
    desc.innerText = info[noInfo].texto;
    console.log(img.style.backgroundImage)
})

btnIzq.addEventListener('click', function(){
   noInfo++;
   console.log(noInfo)
   if(noInfo>info.length-1){
    noInfo = 0
   }
   cambiarInfo(noInfo);
})

btnDer.addEventListener('click', function(){
    noInfo--;
    if(noInfo < 0){
        noInfo = info.length-1;
    }
  cambiarInfo(noInfo);
})

function cambiarInfo(noInfo){
    img.style.backgroundImage = info[noInfo].imagen;
    tit.innerText = info[noInfo].titulo;
    desc.innerText = info[noInfo].texto; 
}