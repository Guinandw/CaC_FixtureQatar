/* Menu Hamburguesa */
function hamburguesa() {
    var x = document.getElementById("idMenu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

document.getElementById("idheader").innerHTML =  `
<div class="logo">FIXTURE INTERACTIVO QATAR 2022</div>            
<div class="menu" id="idMenu">
    <a href="javascript:void(0);" class="icono_h" onclick="hamburguesa()"><i class="fa-solid fa-bars fa-xl"></i></a>    
    <a href="calendario.html">CALENDARIO</a>
    <a href="fixture.html">FIXTURE</a>  
    <a href="estadios.html">ESTADIOS</a>
    <a href="index.html#grupos">GRUPOS</a>
    <a href="index.html">INICIO</a>
</div>`;

document.getElementById("idfooter").innerHTML =  `<div class="logo">FIXTURE INTERACTIVO QATAR 2022</div>            
<div class="menu">
               
</div>`;

