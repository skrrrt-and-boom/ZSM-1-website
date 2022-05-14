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
  const addAktualności = document.createElement("div");
  addAktualności.classList.add("Aktualności");
  //  function with aktualnościami;
  if (control == 1) {
    body.appendChild(addAktualności);
    control += 1;
  }
});

//  delate scrollbar
const styleElement = document.createElement("style");
styleElement.id = "remove-scroll";
styleElement.textContent = "html::-webkit-scrollbar{display:none !important}" + "body::-webkit-scrollbar{display:none !important}";
body.appendChild(styleElement);
