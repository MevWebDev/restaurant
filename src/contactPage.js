function renderContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.style.justifyContent = "flex-start";
  content.style.gap = "2rem";
  const aboutTitle = document.createElement("h1");
  aboutTitle.id = "menu-title";
  aboutTitle.textContent = "O nas";

  content.append(aboutTitle);
  const aboutGreet = document.createElement("p");
  aboutGreet.textContent = `Jesteśmy restauracją, która powstała z pasji do jedzenia.
  `;
  content.append(aboutGreet);
  const aboutContent = document.createElement("div");
  aboutContent.id = "main-content";
  aboutContent.style.margin = "2rem 0 0 0";
  aboutContent.style.display = "grid";
  aboutContent.style.gridTemplateColumns = "1fr 1fr 1fr";
  aboutContent.style.gridTemplateRows = "1fr 1fr 1fr";
  aboutContent.style.alignItems = "flex-start";
  aboutContent.style.justifyContent = "center";
  aboutContent.style.gap = "2rem";

  const openingHours = document.createElement("div");
  const openingHoursTitle = document.createElement("h3");
  openingHoursTitle.textContent = `Godziny otwarcia:`;
  const hours1 = document.createElement("p");
  hours1.textContent = `Poniedziałek - Piątek: 10:00 - 22:00`;
  const hours2 = document.createElement("p");
  hours2.textContent = `Sobota - Niedziela: 12:00 - 23:00`;
  openingHours.append(openingHoursTitle, hours1, hours2);

  const location = document.createElement("div");
  const locationTitle = document.createElement("h3");
  locationTitle.textContent = `Lokalizacja:`;
  const address = document.createElement("p");
  address.textContent = `Aleja Grunwaldzka 270
  80-266 Gdańsk`;
  location.append(locationTitle, address);

  const contact = document.createElement("div");
  const contactTitle = document.createElement("h3");
  contactTitle.textContent = `Kontakt:`;
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = `Telefon: 123 456 789`;
  const email = document.createElement("p");
  email.textContent = `Email: biuro@manekin.pl`;
  contact.append(contactTitle, phoneNumber, email);

  aboutContent.append(openingHours, location, contact);
  content.append(aboutContent);
}

export { renderContact };
