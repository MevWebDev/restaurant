import "./style.scss";
import { renderMain } from "./mainPage.js";
import { renderMenu } from "./menuPage.js";
import { renderAbout } from "./aboutPage.js";
import Background from "./img/background3.jpg";
import logoImg from "./img/logo.png";
const logo = document.getElementById("logo-img");
logo.src = logoImg;
(function renderAll() {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", renderMenu);

  const homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", renderMain);

  const aboutButton = document.getElementById("about-button");
  aboutButton.addEventListener("click", renderAbout);
  renderMain();
})();
