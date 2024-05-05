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
  mainImg.style.maxWidth = "50%";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTSxnQ0FBZ0M7QUFDdEMsTUFBTSx3Q0FBd0M7QUFDOUMsTUFBTSx3Q0FBd0M7QUFDOUM7QUFDQTtBQUNBLE1BQU0sNEJBQTRCO0FBQ2xDLE1BQU0sNkJBQTZCO0FBQ25DLE1BQU0sK0JBQStCO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNLGtDQUFrQztBQUN4QyxNQUFNLDZCQUE2QjtBQUNuQyxNQUFNLCtCQUErQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLE1BQU07QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxVQUFVLEtBQUssV0FBVztBQUN2RTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCK0M7QUFDVjtBQUNNO0FBQzNDO0FBQ0EsV0FBVywwQ0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxpREFBVSxDQUFDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQ0FBTztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG9EQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpblBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgY29uc3QgbWFpbkRpc2hlcyA9IFtcbiAgICB7IG5hbWU6IFwiUGllcm9naVwiLCBwcmljZTogXCIxNXrFglwiIH0sXG4gICAgeyBuYW1lOiBcIktvdGxldCBzY2hhYm93eVwiLCBwcmljZTogXCIyNXrFglwiIH0sXG4gICAgeyBuYW1lOiBcIlp1cGEgcG9taWRvcm93YVwiLCBwcmljZTogXCIxMHrFglwiIH0sXG4gIF07XG4gIGNvbnN0IGRyaW5rcyA9IFtcbiAgICB7IG5hbWU6IFwiV29kYVwiLCBwcmljZTogXCI1esWCXCIgfSxcbiAgICB7IG5hbWU6IFwiS2F3YVwiLCBwcmljZTogXCIxMHrFglwiIH0sXG4gICAgeyBuYW1lOiBcIkhlcmJhdGFcIiwgcHJpY2U6IFwiOHrFglwiIH0sXG4gIF07XG4gIGNvbnN0IGRlc3NlcnRzID0gW1xuICAgIHsgbmFtZTogXCJTemFybG90a2FcIiwgcHJpY2U6IFwiMTV6xYJcIiB9LFxuICAgIHsgbmFtZTogXCJMb2R5XCIsIHByaWNlOiBcIjEyesWCXCIgfSxcbiAgICB7IG5hbWU6IFwiU2VybmlrXCIsIHByaWNlOiBcIjE4esWCXCIgfSxcbiAgXTtcbiAgY29uc3QgbWVudSA9IFttYWluRGlzaGVzLCBkcmlua3MsIGRlc3NlcnRzXTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgY29udGVudC5zdHlsZS5nYXAgPSBcIjByZW1cIjtcbiAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtZW51VGl0bGUuaWQgPSBcIm1lbnUtdGl0bGVcIjtcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnRlbnQuYXBwZW5kKG1lbnVUaXRsZSk7XG4gIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRlbnQuaWQgPSBcIm1haW4tY29udGVudFwiO1xuICBtZW51Q29udGVudC5jbGFzc05hbWUgPSBcIm1lbnUtY29udGVudFwiO1xuICBjb250ZW50LmFwcGVuZChtZW51Q29udGVudCk7XG4gIGNvbnN0IHNlY3Rpb25zID0gW1wiRGFuaWEgZ8WCb3duZVwiLCBcIk5hcG9qZVwiLCBcIkRlc2VyeVwiXTtcbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaSkgPT4ge1xuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAobWVudVNlY3Rpb24uY2xhc3NOYW1lID0gYHNlY3Rpb25gKSwgKG1lbnVTZWN0aW9uLmlkID0gYHNlY3Rpb24tJHtpICsgMX1gKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gc2VjdGlvbjtcbiAgICBjb25zdCBzZWN0aW9uSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb25JdGVtcy5jbGFzc05hbWUgPSBcIml0ZW1zXCI7XG4gICAgbWVudVtpXS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgcHJvZHVjdC50ZXh0Q29udGVudCA9IGAke2luZGV4ICsgMX0uICR7aXRlbS5uYW1lfTogICR7aXRlbS5wcmljZX1gO1xuICAgICAgc2VjdGlvbkl0ZW1zLmFwcGVuZChwcm9kdWN0KTtcbiAgICB9KTtcblxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZChzZWN0aW9uSXRlbXMpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZChtZW51U2VjdGlvbik7XG4gIH0pO1xufVxuZXhwb3J0IHsgcmVuZGVyTWVudSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IEJhY2tncm91bmQgZnJvbSBcIi4vaW1nL2JhY2tncm91bmQzLmpwZ1wiO1xuaW1wb3J0IGxvZ29JbWcgZnJvbSBcIi4vaW1nL2xvZ28ucG5nXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudVBhZ2UuanNcIjtcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ28taW1nXCIpO1xubG9nby5zcmMgPSBsb2dvSW1nO1xuZnVuY3Rpb24gcmVuZGVyTWFpbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7QmFja2dyb3VuZH0pYDtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5pZCA9IFwibWFpbi1jb250ZW50XCI7XG4gIGNvbnN0IG1haW5JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgbWFpbkltZy5zcmMgPSBsb2dvSW1nO1xuICBtYWluSW1nLnN0eWxlLm1heFdpZHRoID0gXCI1MCVcIjtcbiAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWFpblRleHQudGV4dENvbnRlbnQgPSBgQk9HQVRFIFNNQUtJIEkgTklFUE9XVEFSWkFMTkUgV07EmFRSWkEuXG5cbiAgS0HFu0RZIE1BIFNXw5NKIE9EUsSYQk5ZIENIQVJBS1RFUi5cbiAgXG4gIE1BTkVLSU4gVE8gQ0/FmiBXScSYQ0VKIE5JxbsgSkVEWkVOSUUsIFRPIFNUWUwgQllDSUEuXG4gIFxuICBQT1NaVUtBSiBTV09KRUdPIFVMVUJJT05FR08gLi4uYDtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kKG1haW5JbWcsIG1haW5UZXh0KTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uaWQgPSBcIm1lbnUtYnV0dG9uLW1haW5cIjtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3ByYXdkxbogbWVudVwiO1xuICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJNZW51KTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kKG1lbnVCdXR0b24pO1xuICBjb250ZW50LmFwcGVuZChtYWluQ29udGVudCk7XG59XG5leHBvcnQgeyByZW5kZXJNYWluIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=