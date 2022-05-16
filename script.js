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
  addFooter.innerHTML = '<div class="menu"><img src="Pictures/logo.png"><div>Zespół Szkół Mechanicznych Nr 1 im. Szczepana Humberta w Krakowie<br> al. Mickiewicza 5, 31-120 Kraków<br>tel. &nbsp;(12) 422-68-04<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(12) 422-64-43<br> fax. (12) 634-30-46 <br><br> e-mail: zsm1krakow@iap.pl<br> http://www.zsm1krakow.pl</div></div>';
  return body.appendChild(addFooter);
}

//  delate scrollbar
const styleElement = document.createElement("style");
styleElement.id = "remove-scroll";
styleElement.textContent = "html::-webkit-scrollbar{display:none !important}" + "body::-webkit-scrollbar{display:none !important}";
body.appendChild(styleElement);

//  awsome style
const face = document.querySelector("a");
face.addEventListener("click", () => {
  face.textContent = "@_@";
});
