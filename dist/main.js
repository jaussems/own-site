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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const dialog = document.querySelector(\"dialog\");\nconst contact = document.getElementById(\"contact\");\nconst closeButton = document.getElementById(\"dialog-close-btn\");\nconst navLinks = document.querySelectorAll(\".page__header__list__item\");\nconst navLinksMobile = document.querySelectorAll(\".page__mobile-menu__list__item\");\nconst nameInput = document.getElementsByClassName(\"name-input\");\nconst mobileIcon = document.querySelector(\"div.page__mobile-menu__icon\");\nconst mobileMenuList = document.querySelector(\"ul.page__mobile-menu__list\");\nlet isShownMenu = false;\nconst storySection = document.querySelector(\"div.page__story\");\nconst skillsSection = document.querySelector(\"div.page__skills\");\nconst portfolioSection = document.querySelector(\"div.page__portfolio\");\n\ncontact.addEventListener(\"click\", () => {\n  dialog.showModal();\n  document.getElementById(\"dialog\").scrollIntoView();\n});\n\ncloseButton.addEventListener(\"click\", () => {\n  dialog.close();\n});\n\nconst handleNavLinkClick = (navlink) => {\n  const navlinkName = navlink.attributes.getNamedItem(\"name\").value;\n  \n  switch (navlinkName) {\n    case \"story\":\n      storySection.scrollIntoView({ behavior: \"smooth\", block: \"start\", inline: \"start\" });\n      break;\n    case \"skills\":\n      skillsSection.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n      break;\n    case \"portfolio\":\n      portfolioSection.scrollIntoView({ behavior: \"smooth\", block: \"start\" });\n      break;\n  }\n};\n\nnavLinks.forEach((navlink) => {\n  navlink.addEventListener(\"click\", () => {\n    handleNavLinkClick(navlink);\n  });\n});\n\nnavLinksMobile.forEach((navlink) => {\n  navlink.addEventListener(\"click\", () => {\n    handleNavLinkClick(navlink);\n  });\n});\n\nvar isInViewport = function (elem) {\n  var bounding = elem.getBoundingClientRect();\n  return (\n      bounding.top >= 0 &&\n      bounding.left >= 0 &&\n      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&\n      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)\n  );\n};\n\nconst skillsElement = document.querySelector(\".page__skills__list\");\nfunction handleScrollDebounce() {\n  if(isInViewport(skillsElement)) {\n    skillsElement.classList.add('animation--skills-list');\n  } else {\n    skillsElement.classList.remove('animation--skills-list');\n  }\n}\n\nlet debounceTimer;\nwindow.addEventListener('scroll', () => {\n  clearTimeout(debounceTimer);\n  debounceTimer = setTimeout(handleScrollDebounce, 400);\n}, false);\n\nmobileIcon.addEventListener(\"click\", () => {\n  isShownMenu = !isShownMenu;\n\n  console.log(`Chjecking ${navLinksMobile.length}`)\n  if(isShownMenu) \n  {\n    mobileMenuList.classList.add(\"page__mobile-menu__list--show\");\n  }\n  else {\n    mobileMenuList.classList.remove(\"page__mobile-menu__list--show\");\n  }\n})\n\n//# sourceURL=webpack://own-site/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;