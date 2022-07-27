
let bloco1 = document.getElementById('bloco1');
let bloco2 = document.getElementById('bloco2');
let bloco3 = document.getElementById('slideshow-visita-virtual');
let bloco4 = document.getElementById('bloco4');

let mapa = document.getElementById('mapa');
let contactos = document.getElementById('contactos');
let canvas_mapa = document.getElementById('canvas_mapa');
let gmap_canvas = document.getElementById('gmap_canvas');
let container_slideshow = document.getElementById('container_slideshow');
let visita_virtual = document.getElementById('visita_virtual');

let titulo1 = document.getElementById('titulo1');
let titulo2 = document.getElementById('titulo2');
let titulo3 = document.getElementById('titulo3');
let titulo4 = document.getElementById('titulo4');

let livro = document.getElementById('livro');
let livro1 = document.getElementById('livro1');
let livro2 = document.getElementById('livro2');
let livro3 = document.getElementById('livro3');
let livro4 = document.getElementById('livro4');
let livro5 = document.getElementById('livro5');
let livro6 = document.getElementById('livro6');
let livro7 = document.getElementById('livro7');

let mostra_livros = document.getElementById('mostra_livros');

titulo1.addEventListener('click', function(){collapse(bloco1)});
titulo2.addEventListener('click', function(){collapse2(bloco2)});
titulo3.addEventListener('click', function(){collapse3(bloco3)});
titulo4.addEventListener('click', function(){collapse4(bloco4)});

window.onresize = function() {

  if( window.innerWidth <= 704 && window.innerWidth >= 600 )
  {
    bloco1.style.minHeight = "23.5vh";
    bloco1.style.maxHeight = "23.5vh";
    bloco2.style.minHeight = "23.5vh";
    bloco2.style.maxHeight = "23.5vh";
    bloco3.style.minHeight = "23.5vh";
    bloco3.style.maxHeight = "23.5vh";
    bloco4.style.minHeight = "23.5vh";
    bloco4.style.maxHeight = "23.5vh";

    container_slideshow.style.display = "none";

    mapa.style.display = "none";
    canvas_mapa.style.display = "none";
    gmap_canvas.style.display = "none";
    contactos.style.display = "none";

    mostra_livros.style.display = "none";

    livro.style.display = "none";
    livro1.style.display = "none";
    livro2.style.display = "none";
    livro3.style.display = "none";
    livro4.style.display = "none";
    livro5.style.display = "none";
    livro6.style.display = "none";
    livro7.style.display = "none";
  }

  else if( window.innerWidth >= 705 )
  {
    container_slideshow.style.display = "block";

    mapa.style.display = "flex";
    canvas_mapa.style.display = "flex";
    gmap_canvas.style.display = "flex";
    contactos.style.display = "flex";

    bloco1.style.minHeight = "130vh";
    bloco1.style.maxHeight = "130vh";
    bloco2.style.minHeight = "130vh";
    bloco2.style.maxHeight = "130vh";
    bloco3.style.minHeight = "130vh";
    bloco3.style.maxHeight = "130vh";
    bloco4.style.minHeight = "1050vh";
    bloco4.style.maxHeight = "1050vh";

    mostra_livros.style.display = "flex";

    livro.style.display = "block";
    livro1.style.display = "block";
    livro2.style.display = "block";
    livro3.style.display = "block";
    livro4.style.display = "block";
    livro5.style.display = "block";
    livro6.style.display = "block";
    livro7.style.display = "block";
  }
 }

function collapse(e)
{
  if(window.innerWidth <= 704)
  {
    if( e.style.minHeight == "23.5vh")
  {
    bloco1.style.minHeight = "23.5vh";
    bloco1.style.maxHeight = "23.5vh";
    bloco2.style.minHeight = "23.5vh";
    bloco2.style.maxHeight = "23.5vh";
    bloco3.style.minHeight = "23.5vh";
    bloco3.style.maxHeight = "23.5vh";
    bloco4.style.minHeight = "23.5vh";
    bloco4.style.maxHeight = "23.5vh";

    container_slideshow.style.display = "none";

    e.style.margin = "0";
    e.style.minHeight = "80vh";
    e.style.maxHeight = "80vh";
    e.style.height = "80vh";

    mapa.style.display = "none";
    canvas_mapa.style.display = "none";
    gmap_canvas.style.display = "none";
    contactos.style.display = "none";

    mostra_livros.style.display = "none";

    livro.style.display = "none";
    livro1.style.display = "none";
    livro2.style.display = "none";
    livro3.style.display = "none";
    livro4.style.display = "none";
    livro5.style.display = "none";
    livro6.style.display = "none";
    livro7.style.display = "none";
  }

  else
  {
    e.style.minHeight = "23.5vh";
    e.style.maxHeight = "23.5vh";
  }
  }
}

function collapse2(e)
{
  if(window.innerWidth <= 704)
  {
    if( e.style.minHeight == "23.5vh")
  {
    bloco1.style.minHeight = "23.5vh";
    bloco1.style.maxHeight = "23.5vh";
    bloco3.style.minHeight = "23.5vh";
    bloco3.style.maxHeight = "23.5vh";
    bloco4.style.minHeight = "23.5vh";
    bloco4.style.maxHeight = "23.5vh";

    e.style.margin = "0";
    e.style.minHeight = "90vh";
    e.style.maxHeight = "90vh";
    e.style.height = "90vh";

    container_slideshow.style.display = "none";

    mapa.style.display = "flex";
    canvas_mapa.style.display = "flex";
    gmap_canvas.style.display = "flex";
    contactos.style.display = "flex";
    contactos.style.marginTop = "10px";
    contactos.style.marginBottom = "10px";
    contactos.style.marginLeft = "5px";
    contactos.style.marginRight = "5px";
    contactos.style.width = "80vw";
    contactos.style.margin = "10px auto";
    contactos.style.maxWidth = "562px";

    mostra_livros.style.display = "none";

    livro.style.display = "none";
    livro1.style.display = "none";
    livro2.style.display = "none";
    livro3.style.display = "none";
    livro4.style.display = "none";
    livro5.style.display = "none";
    livro6.style.display = "none";
    livro7.style.display = "none";
  }

  else
  {
    e.style.minHeight = "23.5vh";
    e.style.maxHeight = "23.5vh";

    mapa.style.display = "none";
    canvas_mapa.style.display = "none";
    gmap_canvas.style.display = "none";
    contactos.style.display = "none";
  }
  }
}

function collapse3(e)
{
  if(window.innerWidth <= 704)
  {
      container_slideshow.addEventListener('click', function(){ return; });
      if( e.style.maxHeight == "23.5vh")
    {
      bloco1.style.minHeight = "23.5vh";
      bloco1.style.maxHeight = "23.5vh";
      bloco2.style.minHeight = "23.5vh";
      bloco2.style.maxHeight = "23.5vh";
      bloco4.style.minHeight = "23.5vh";
      bloco4.style.maxHeight = "23.5vh";

      e.style.margin = "0";
      e.style.minHeight = "80vh";
      e.style.maxHeight = "80vh";
      e.style.height = "80vh";

      container_slideshow.style.display = "block";

      mapa.style.display = "none";
      canvas_mapa.style.display = "none";
      gmap_canvas.style.display = "none";
      contactos.style.display = "none";

      mostra_livros.style.display = "none";
  
      livro.style.display = "none";
      livro1.style.display = "none";
      livro2.style.display = "none";
      livro3.style.display = "none";
      livro4.style.display = "none";
      livro5.style.display = "none";
      livro6.style.display = "none";
      livro7.style.display = "none";
    }

    else
    {
      e.style.maxHeight = "23.5vh";
      e.style.minHeight = "23.5vh";

      container_slideshow.style.display = "none";
    }
  }
}

function collapse4(e)
{
  if(window.innerWidth <= 704)
  {
      if( e.style.maxHeight == "23.5vh")
    {
      bloco1.style.minHeight = "23.5vh";
      bloco1.style.maxHeight = "23.5vh";
      bloco2.style.minHeight = "23.5vh";
      bloco2.style.maxHeight = "23.5vh";
      bloco3.style.minHeight = "23.5vh";
      bloco3.style.maxHeight = "23.5vh";

      container_slideshow.style.display = "none";

      mapa.style.display = "none";
      canvas_mapa.style.display = "none";
      gmap_canvas.style.display = "none";
      contactos.style.display = "none";

      mostra_livros.style.display = "block";

      livro.style.display = "block";
      livro1.style.display = "block";
      livro2.style.display = "block";
      livro3.style.display = "block";
      livro4.style.display = "block";
      livro5.style.display = "block";
      livro6.style.display = "block";
      livro7.style.display = "block";

      //titulo4.style.marginTop = "10vh";

      e.style.margin = "0";
      e.style.maxHeight = "670vh";
      e.style.minHeight = "670vh";
      //e.style.Height = "900vh";
    }

    else
    {
      e.style.maxHeight = "23.5vh";
      e.style.minHeight = "23.5vh";

      livro.style.display = "none";
      livro1.style.display = "none";
      livro2.style.display = "none";
      livro3.style.display = "none";
      livro4.style.display = "none";
      livro5.style.display = "none";
      livro6.style.display = "none";
      livro7.style.display = "none";

      mostra_livros.style.display = "none";

      //titulo4.style.marginTop = "10px";
    }
  }
}

/*function fechatudo {
  
    bloco1.style.minHeight = "23.5vh";
    bloco1.style.maxHeight = "23.5vh";
    bloco2.style.minHeight = "23.5vh";
    bloco2.style.maxHeight = "23.5vh";
    bloco3.style.minHeight = "23.5vh";
    bloco3.style.maxHeight = "23.5vh";
    bloco4.style.minHeight = "23.5vh";
    bloco4.style.maxHeight = "23.5vh";

    container_slideshow.style.display = "none";

    mapa.style.display = "none";
    canvas_mapa.style.display = "none";
    gmap_canvas.style.display = "none";
    contactos.style.display = "none";
}*/



function aparecer_vert_esq() {
    var x = document.getElementById("menu-vert-esq");
      if (x.style.display === "flex") {
        x.style.display = "none";
        document.body.style.overflow = "auto";
      } else {
        x.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



// delay possible clicks until page is turned
document.getElementById('book').addEventListener('click', function() { pagina_livro(this) })

document.getElementById('book1').addEventListener('click', function() { pagina_livro(this) })

document.getElementById('book2').addEventListener('click', function() { pagina_livro(this) })

document.getElementById('book3').addEventListener('click', function() { pagina_livro(this) })

document.getElementById('book4').addEventListener('click', function() { pagina_livro(this) })

document.getElementById('book5').addEventListener('click', function() { pagina_livro(this) })

document.getElementById('book6').addEventListener('click', function() { pagina_livro(this) })

document.getElementById('book7').addEventListener('click', function() { pagina_livro(this) })

function pagina_livro(e)
{
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
}

/*
function modoNoturno() {
   //var element = document.getElementsByTagName("h1");
   var wrapper = document.getElementById("wrapper");
   //var headerElement = document.getElementsByClassName("a");
   var headerElement = document.getElementsByTagName("li");
   var header = document.getElementsByTagName("header");
   //var corpo = document.getElementsByClassName("corpo");
   //element[1].classList.toggle("dark-mode");
   wrapper.classList.toggle("dark-mode");
   header[0].classList.toggle("dark-mode");
   headerElement[0].classList.toggle("dark-mode");
   headerElement[1].classList.toggle("dark-mode");
   headerElement[2].classList.toggle("dark-mode");
   headerElement[3].classList.toggle("dark-mode");
   headerElement[4].classList.toggle("dark-mode");
   headerElement[5].classList.toggle("dark-mode");
   headerElement[6].classList.toggle("dark-mode");
   headerElement[7].classList.toggle("dark-mode");
   headerElement[8].classList.toggle("dark-mode");
   headerElement[9].classList.toggle("dark-mode");
}*/