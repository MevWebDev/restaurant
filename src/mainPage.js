import Background from "./img/background3.jpg";
import logoImg from "./img/logo.png";
import { renderMenu } from "./menuPage.js";
const logo = document.getElementById("logo-img");
logo.src = logoImg;
function renderMain() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.style.backgroundImage = `url(${Background})`;
  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  const mainImg = new Image();
  mainImg.src = logoImg;
  const mainText = document.createElement("p");
  mainText.textContent = `BOGATE SMAKI I NIEPOWTARZALNE WNĘTRZA.

  KAŻDY MA SWÓJ ODRĘBNY CHARAKTER.
  
  MANEKIN TO COŚ WIĘCEJ NIŻ JEDZENIE, TO STYL BYCIA.
  
  POSZUKAJ SWOJEGO ULUBIONEGO ...`;
  mainContent.append(mainImg, mainText);
  const menuButton = document.createElement("button");
  menuButton.id = "menu-button-main";
  menuButton.textContent = "Sprawdź menu";
  menuButton.addEventListener("click", renderMenu);
  mainContent.append(menuButton);
  content.append(mainContent);
}
export { renderMain };
