import "./style.scss";
import { loadPage } from "./loadPage";

import logoImg from "./img/logo.png";
const logo = document.getElementById("logo");
logo.innerHTML = `<img src="${logoImg}" alt="logo" />`;

loadPage();
