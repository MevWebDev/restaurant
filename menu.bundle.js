/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });
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
  menuContent.className = "main-content";
  menuContent.id = "menu-content";
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0EsTUFBTSxnQ0FBZ0M7QUFDdEMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSx3Q0FBd0M7QUFDOUM7QUFDQTtBQUNBLE1BQU0sNEJBQTRCO0FBQ2xDLE1BQU0sNkJBQTZCO0FBQ25DLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNLGtDQUFrQztBQUN4QyxNQUFNLDZCQUE2QjtBQUNuQyxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLE1BQU07QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxVQUFVLEtBQUssV0FBVztBQUN2RTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudVBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJmdW5jdGlvbiByZW5kZXJNZW51KCkge1xuICBjb25zdCBtYWluRGlzaGVzID0gW1xuICAgIHsgbmFtZTogXCJQaWVyb2dpXCIsIHByaWNlOiBcIjE1esWCXCIgfSxcbiAgICB7IG5hbWU6IFwiS290bGV0IHNjaGFib3d5XCIsIHByaWNlOiBcIjI1esWCXCIgfSxcbiAgICB7IG5hbWU6IFwiWnVwYSBwb21pZG9yb3dhXCIsIHByaWNlOiBcIjEwesWCXCIgfSxcbiAgXTtcbiAgY29uc3QgZHJpbmtzID0gW1xuICAgIHsgbmFtZTogXCJXb2RhXCIsIHByaWNlOiBcIjV6xYJcIiB9LFxuICAgIHsgbmFtZTogXCJLYXdhXCIsIHByaWNlOiBcIjEwesWCXCIgfSxcbiAgICB7IG5hbWU6IFwiSGVyYmF0YVwiLCBwcmljZTogXCI4esWCXCIgfSxcbiAgXTtcbiAgY29uc3QgZGVzc2VydHMgPSBbXG4gICAgeyBuYW1lOiBcIlN6YXJsb3RrYVwiLCBwcmljZTogXCIxNXrFglwiIH0sXG4gICAgeyBuYW1lOiBcIkxvZHlcIiwgcHJpY2U6IFwiMTJ6xYJcIiB9LFxuICAgIHsgbmFtZTogXCJTZXJuaWtcIiwgcHJpY2U6IFwiMTh6xYJcIiB9LFxuICBdO1xuICBjb25zdCBtZW51ID0gW21haW5EaXNoZXMsIGRyaW5rcywgZGVzc2VydHNdO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnRlbnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICBjb250ZW50LnN0eWxlLmdhcCA9IFwiMHJlbVwiO1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIG1lbnVUaXRsZS5pZCA9IFwibWVudS10aXRsZVwiO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgY29udGVudC5hcHBlbmQobWVudVRpdGxlKTtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGVudC5jbGFzc05hbWUgPSBcIm1haW4tY29udGVudFwiO1xuICBtZW51Q29udGVudC5pZCA9IFwibWVudS1jb250ZW50XCI7XG4gIGNvbnRlbnQuYXBwZW5kKG1lbnVDb250ZW50KTtcbiAgY29uc3Qgc2VjdGlvbnMgPSBbXCJEYW5pYSBnxYJvd25lXCIsIFwiTmFwb2plXCIsIFwiRGVzZXJ5XCJdO1xuICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uLCBpKSA9PiB7XG4gICAgY29uc3QgbWVudVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIChtZW51U2VjdGlvbi5jbGFzc05hbWUgPSBgc2VjdGlvbmApLCAobWVudVNlY3Rpb24uaWQgPSBgc2VjdGlvbi0ke2kgKyAxfWApO1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBzZWN0aW9uO1xuICAgIGNvbnN0IHNlY3Rpb25JdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VjdGlvbkl0ZW1zLmNsYXNzTmFtZSA9IFwiaXRlbXNcIjtcbiAgICBtZW51W2ldLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBwcm9kdWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBwcm9kdWN0LnRleHRDb250ZW50ID0gYCR7aW5kZXggKyAxfS4gJHtpdGVtLm5hbWV9OiAgJHtpdGVtLnByaWNlfWA7XG4gICAgICBzZWN0aW9uSXRlbXMuYXBwZW5kKHByb2R1Y3QpO1xuICAgIH0pO1xuXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kKHNlY3Rpb25JdGVtcyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kKG1lbnVTZWN0aW9uKTtcbiAgfSk7XG59XG5leHBvcnQgeyByZW5kZXJNZW51IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=