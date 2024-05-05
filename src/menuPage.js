function renderMenu() {
  const mainDishes = [
    { name: "Pierogi", price: "15zł" },
    { name: "Kotlet schabowy", price: "25zł" },
    { name: "Zupa pomidorowa", price: "10zł" },
  ];
  const drinks = [
    { name: "Woda", price: "5zł" },
    { name: "Kawa", price: "10zł" },
    { name: "Herbata", price: "8zł" },
  ];
  const desserts = [
    { name: "Szarlotka", price: "15zł" },
    { name: "Lody", price: "12zł" },
    { name: "Sernik", price: "18zł" },
  ];
  const menu = [mainDishes, drinks, desserts];
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.style.justifyContent = "center";
  content.style.gap = "0rem";
  const menuTitle = document.createElement("h1");
  menuTitle.id = "menu-title";
  menuTitle.textContent = "Menu";
  content.append(menuTitle);
  const menuContent = document.createElement("div");
  menuContent.id = "main-content";
  menuContent.className = "menu-content";
  content.append(menuContent);
  const sections = ["Dania głowne", "Napoje", "Desery"];
  sections.forEach((section, i) => {
    const menuSection = document.createElement("div");
    (menuSection.className = `section`), (menuSection.id = `section-${i + 1}`);
    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = section;
    const sectionItems = document.createElement("div");
    sectionItems.className = "items";
    menu[i].forEach((item, index) => {
      const product = document.createElement("p");
      product.textContent = `${index + 1}. ${item.name}:  ${item.price}`;
      sectionItems.append(product);
    });

    menuSection.append(sectionTitle);
    menuSection.append(sectionItems);
    menuContent.append(menuSection);
  });
}
export { renderMenu };
