import Background from "./img/background3.jpg";
function loadPage() {
  const content = document.getElementById("content");
  content.style.backgroundImage = `url(${Background})`;
  content.innerHTML = `<p> Siema test </p>`;
}
export { loadPage };
