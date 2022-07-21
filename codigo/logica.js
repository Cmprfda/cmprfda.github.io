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
document.getElementById('book').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

document.getElementById('book1').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

document.getElementById('book2').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

document.getElementById('book3').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

document.getElementById('book4').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

document.getElementById('book5').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

document.getElementById('book6').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})

document.getElementById('book7').addEventListener('click', function(e) {
  e = this
  e.style.pointerEvents = "none"
  setTimeout(function(){
    e.style.pointerEvents = ""
  }, 2000)
})
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