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
  let addAktualności = document.querySelectorAll(".contener_top");
  for ( i of addAktualności) {
    i.removeAttribute("hidden");
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
