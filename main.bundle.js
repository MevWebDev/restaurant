/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ }),

/***/ "./src/img/background3.jpg":
/*!*********************************!*\
  !*** ./src/img/background3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2aa058109ce0a14f93ac.jpg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de08e2bac73f2c25b5a3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMain: () => (/* binding */ renderMain)
/* harmony export */ });
/* harmony import */ var _img_background3_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/background3.jpg */ "./src/img/background3.jpg");
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");



const logo = document.getElementById("logo-img");
logo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
function renderMain() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.style.justifyContent = "center";
  content.style.backgroundImage = `url(${_img_background3_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  const mainImg = new Image();
  mainImg.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;
  const mainText = document.createElement("p");
  mainText.textContent = `BOGATE SMAKI I NIEPOWTARZALNE WNĘTRZA.

  KAŻDY MA SWÓJ ODRĘBNY CHARAKTER.
  
  MANEKIN TO COŚ WIĘCEJ NIŻ JEDZENIE, TO STYL BYCIA.
  
  POSZUKAJ SWOJEGO ULUBIONEGO ...`;
  mainContent.append(mainImg, mainText);
  const menuButton = document.createElement("button");
  menuButton.id = "menu-button-main";
  menuButton.textContent = "Sprawdź menu";
  menuButton.addEventListener("click", _menuPage_js__WEBPACK_IMPORTED_MODULE_2__.renderMenu);
  mainContent.append(menuButton);
  content.append(mainContent);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTSxnQ0FBZ0M7QUFDdEMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSx3Q0FBd0M7QUFDOUM7QUFDQTtBQUNBLE1BQU0sNEJBQTRCO0FBQ2xDLE1BQU0sNkJBQTZCO0FBQ25DLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNLGtDQUFrQztBQUN4QyxNQUFNLDZCQUE2QjtBQUNuQyxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLE1BQU07QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxVQUFVLEtBQUssV0FBVztBQUN2RTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCK0M7QUFDVjtBQUNNO0FBQzNDO0FBQ0EsV0FBVywwQ0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpREFBVSxDQUFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxvREFBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW5QYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGNvbnN0IG1haW5EaXNoZXMgPSBbXG4gICAgeyBuYW1lOiBcIlBpZXJvZ2lcIiwgcHJpY2U6IFwiMTV6xYJcIiB9LFxuICAgIHsgbmFtZTogXCJLb3RsZXQgc2NoYWJvd3lcIiwgcHJpY2U6IFwiMjV6xYJcIiB9LFxuICAgIHsgbmFtZTogXCJadXBhIHBvbWlkb3Jvd2FcIiwgcHJpY2U6IFwiMTB6xYJcIiB9LFxuICBdO1xuICBjb25zdCBkcmlua3MgPSBbXG4gICAgeyBuYW1lOiBcIldvZGFcIiwgcHJpY2U6IFwiNXrFglwiIH0sXG4gICAgeyBuYW1lOiBcIkthd2FcIiwgcHJpY2U6IFwiMTB6xYJcIiB9LFxuICAgIHsgbmFtZTogXCJIZXJiYXRhXCIsIHByaWNlOiBcIjh6xYJcIiB9LFxuICBdO1xuICBjb25zdCBkZXNzZXJ0cyA9IFtcbiAgICB7IG5hbWU6IFwiU3phcmxvdGthXCIsIHByaWNlOiBcIjE1esWCXCIgfSxcbiAgICB7IG5hbWU6IFwiTG9keVwiLCBwcmljZTogXCIxMnrFglwiIH0sXG4gICAgeyBuYW1lOiBcIlNlcm5pa1wiLCBwcmljZTogXCIxOHrFglwiIH0sXG4gIF07XG4gIGNvbnN0IG1lbnUgPSBbbWFpbkRpc2hlcywgZHJpbmtzLCBkZXNzZXJ0c107XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gIGNvbnRlbnQuc3R5bGUuZ2FwID0gXCIwcmVtXCI7XG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbWVudVRpdGxlLmlkID0gXCJtZW51LXRpdGxlXCI7XG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBjb250ZW50LmFwcGVuZChtZW51VGl0bGUpO1xuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250ZW50LmlkID0gXCJtYWluLWNvbnRlbnRcIjtcbiAgbWVudUNvbnRlbnQuY2xhc3NOYW1lID0gXCJtZW51LWNvbnRlbnRcIjtcbiAgY29udGVudC5hcHBlbmQobWVudUNvbnRlbnQpO1xuICBjb25zdCBzZWN0aW9ucyA9IFtcIkRhbmlhIGfFgm93bmVcIiwgXCJOYXBvamVcIiwgXCJEZXNlcnlcIl07XG4gIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24sIGkpID0+IHtcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgKG1lbnVTZWN0aW9uLmNsYXNzTmFtZSA9IGBzZWN0aW9uYCksIChtZW51U2VjdGlvbi5pZCA9IGBzZWN0aW9uLSR7aSArIDF9YCk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XG4gICAgY29uc3Qgc2VjdGlvbkl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWN0aW9uSXRlbXMuY2xhc3NOYW1lID0gXCJpdGVtc1wiO1xuICAgIG1lbnVbaV0uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHByb2R1Y3QudGV4dENvbnRlbnQgPSBgJHtpbmRleCArIDF9LiAke2l0ZW0ubmFtZX06ICAke2l0ZW0ucHJpY2V9YDtcbiAgICAgIHNlY3Rpb25JdGVtcy5hcHBlbmQocHJvZHVjdCk7XG4gICAgfSk7XG5cbiAgICBtZW51U2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmQoc2VjdGlvbkl0ZW1zKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmQobWVudVNlY3Rpb24pO1xuICB9KTtcbn1cbmV4cG9ydCB7IHJlbmRlck1lbnUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL2ltZy9iYWNrZ3JvdW5kMy5qcGdcIjtcbmltcG9ydCBsb2dvSW1nIGZyb20gXCIuL2ltZy9sb2dvLnBuZ1wiO1xuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gXCIuL21lbnVQYWdlLmpzXCI7XG5jb25zdCBsb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvLWltZ1wiKTtcbmxvZ28uc3JjID0gbG9nb0ltZztcbmZ1bmN0aW9uIHJlbmRlck1haW4oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke0JhY2tncm91bmR9KWA7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuaWQgPSBcIm1haW4tY29udGVudFwiO1xuICBjb25zdCBtYWluSW1nID0gbmV3IEltYWdlKCk7XG4gIG1haW5JbWcuc3JjID0gbG9nb0ltZztcbiAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWFpblRleHQudGV4dENvbnRlbnQgPSBgQk9HQVRFIFNNQUtJIEkgTklFUE9XVEFSWkFMTkUgV07EmFRSWkEuXG5cbiAgS0HFu0RZIE1BIFNXw5NKIE9EUsSYQk5ZIENIQVJBS1RFUi5cbiAgXG4gIE1BTkVLSU4gVE8gQ0/FmiBXScSYQ0VKIE5JxbsgSkVEWkVOSUUsIFRPIFNUWUwgQllDSUEuXG4gIFxuICBQT1NaVUtBSiBTV09KRUdPIFVMVUJJT05FR08gLi4uYDtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kKG1haW5JbWcsIG1haW5UZXh0KTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uLW1haW5cIjtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3ByYXdkxbogbWVudVwiO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJNZW51KTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kKG1lbnVCdXR0b24pO1xuICBjb250ZW50LmFwcGVuZChtYWluQ29udGVudCk7XG59XG5leHBvcnQgeyByZW5kZXJNYWluIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=