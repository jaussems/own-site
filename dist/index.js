/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"style.css\");\n\n//# sourceURL=webpack://own-site/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const dialog = document.querySelector(\"dialog\");\nconst contact = document.getElementById(\"contact\");\nconst closeButton = document.getElementById(\"dialog-close-btn\");\nconst navLinks = document.querySelectorAll(\".page__header__list__item\");\nconst navLinksMobile = document.querySelectorAll(\".page__mobile-menu__list__item\");\nconst nameInput = document.getElementsByClassName(\"name-input\");\nconst mobileIcon = document.querySelector(\"div.page__mobile-menu__icon\");\nconst mobileMenuList = document.querySelector(\"ul.page__mobile-menu__list\");\nlet isShownMenu = false;\nconst storySection = document.querySelector(\"div.page__story\");\nconst skillsSection = document.querySelector(\"div.page__skills\");\nconst portfolioSection = document.querySelector(\"div.page__portfolio\");\n\ncontact.addEventListener(\"click\", () => {\n  dialog.showModal();\n  document.getElementById(\"dialog\").scrollIntoView();\n});\n\ncloseButton.addEventListener(\"click\", () => {\n  dialog.close();\n});\n\nconst handleNavLinkClick = (navlink) => {\n  const navlinkName = navlink.attributes.getNamedItem(\"name\").value;\n  \n  switch (navlinkName) {\n    case \"story\":\n      storySection.scrollIntoView({ behavior: \"smooth\", block: \"start\", inline: \"start\" });\n      break;\n    case \"skills\":\n      skillsSection.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n      break;\n    case \"portfolio\":\n      portfolioSection.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n      break;\n  }\n};\n\nnavLinks.forEach((navlink) => {\n  navlink.addEventListener(\"click\", () => {\n    handleNavLinkClick(navlink);\n  });\n});\n\nnavLinksMobile.forEach((navlink) => {\n  navlink.addEventListener(\"click\", () => {\n    handleNavLinkClick(navlink);\n  });\n});\n\nvar isInViewport = function (elem) {\n  var bounding = elem.getBoundingClientRect();\n  return (\n      bounding.top >= 0 &&\n      bounding.left >= 0 &&\n      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)\n  );\n};\n\nconst skillsElement = document.querySelector(\".page__skills__list\");\nfunction handleScrollDebounce() {\n  if(isInViewport(skillsElement)) {\n    skillsElement.classList.add('animation--skills-list');\n  } else {\n    skillsElement.classList.remove('animation--skills-list');\n  }\n}\n\nlet debounceTimer;\nwindow.addEventListener('scroll', () => {\n  clearTimeout(debounceTimer);\n  debounceTimer = setTimeout(handleScrollDebounce, 400);\n}, false);\n\nmobileIcon.addEventListener(\"click\", () => {\n  isShownMenu = !isShownMenu;\n\n  console.log(`Chjecking ${navLinksMobile.length}`)\n  if(isShownMenu) \n  {\n    mobileMenuList.classList.add(\"page__mobile-menu__list--show\");\n  }\n  else {\n    mobileMenuList.classList.remove(\"page__mobile-menu__list--show\");\n  }\n})\n\n//# sourceURL=webpack://own-site/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/style.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;