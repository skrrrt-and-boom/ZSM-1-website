const mainLogo = document.getElementsByClassName("main-logo");
const body = document.querySelector("body");
const span = document.querySelectorAll("span");

let control = 1;
//  add aktualności after click
mainLogo[0].addEventListener("click", () => {
  //  delating animation
  for (let i = 0; i < span.length; i++) {
    span[i].classList.remove("main-span");
  }
  //  function with aktualności;
  if (control === 1) {
    addAktualności();
    appendFooter();
    control += 1;
  }
});

//  add Aktualności
function addAktualności() {
  const cont = document.getElementsByClassName("contener");
  const akt = document.getElementsByClassName("Aktualności");
  let addAktualności = document.querySelectorAll(".contener_top");
  for (let i = 0; i < cont.length; i++) {
    addAktualności[i].removeAttribute("hidden");
    akt[0].removeAttribute("hidden");
    cont[i].removeAttribute("hidden");
  }
}

let showHide = 1;

//  show/hide content when click
function showAktualności() {
  const containerTop = document.getElementsByClassName("contener_top");
  const containerContent = document.getElementsByClassName("contener_tresc");
  for (let i = 0; i < containerTop.length; i++) {
    containerTop[i].addEventListener("click", () => {
      if (control > 1 && showHide % 2 != 0) {
        containerContent[i].removeAttribute("hidden");
        showHide += 1;
      } else if (control > 1 && showHide % 2 == 0) {
          containerContent[i].setAttribute("hidden", false);
          showHide += 1;
      }
    });
  }
}

showAktualności();

//  add footer
function appendFooter() {
  const addFooter = document.createElement("div");
  addFooter.classList.add("Footer");
  addFooter.innerHTML = '<div class="menu"><img src="Pictures/logo.png"><div>Zespół Szkół Mechanicznych Nr 1 im. Szczepana Humberta w Krakowie<br> al. Mickiewicza 5, 31-120 Kraków<br>tel. &nbsp;(12) 422-68-04<br> &nbsp;(12) 422-64-43<br> fax. (12) 634-30-46 <br><br> e-mail: zsm1krakow@iap.pl<br> http://www.zsm1krakow.pl</div></div>';
  return body.appendChild(addFooter);
}

//  delate scrollbar
const styleElement = document.createElement("style");
styleElement.id = "remove-scroll";
styleElement.textContent = "html::-webkit-scrollbar{display:none !important}" + "body::-webkit-scrollbar{display:none !important}";
body.appendChild(styleElement);

//  awsome style
const face = document.getElementsByClassName("secret");
face[0].addEventListener("click", () => {
  face[0].textContent = "@_@";
});

//  menu  activate
function menuActive() {
  const menu = document.getElementsByClassName("Menu");
  menu[0].addEventListener("click", () => {
    const esence = document.createElement("div");
    esence.classList.add("menu-content");
    esence.innerHTML = '<div class="uczniowie">Informacje dla uczniów</div><div class="rodzice">Informacje dla rodziców</div><div class="zawody">Zawody realizowane na terenie szkoły</div><div class="rekrutacja">rekrutacja</div><div class="projekty">Projekty</div><div class="współpraca">Współpraca międzynarodowa</div>';
    body.appendChild(esence);
    menuDiactivate();
  });
}

menuActive();

//  menu  diactivate
function menuDiactivate() {
  let afterMenu = document.querySelector(".menu-content");
    window.addEventListener("scroll", () => {
      if (body.contains(afterMenu)) {
        body.removeChild(afterMenu);
      }
  });
}

//  Galery add

function addGalery() {
  const galButton = document.getElementsByClassName("Galery");
  galButton[0].addEventListener("click", () => {
    const slideshow = document.getElementsByClassName("slideshow");
    const prev = document.createElement("a");
    prev.classList.add("prev");
    prev.onclick = function() {plusSlides(-1);};
    console.log(prev.onclick);
    prev.textContent = "❮";
    slideshow[0].appendChild(prev);
    const next = document.createElement("a");
    next.classList.add("next");
    next.onclick = function() {plusSlides(1);};
    next.textContent = "❯";
    slideshow[0].appendChild(next);
  });
}

addGalery();
//  how galery works

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
