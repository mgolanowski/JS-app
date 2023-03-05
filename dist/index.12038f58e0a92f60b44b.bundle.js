/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

function sum(a, b) {
  return a + b;
}

module.exports = {
  sum: sum
};

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sum2": () => (/* binding */ sum2)
/* harmony export */ });
function sum2(a, b) {
  return a + b;
}

/***/ })
/******/ 	]);
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sum2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var sum = (__webpack_require__(1).sum);

 // import { style } from './css/index.scss';
// import Icon from "./assets/img/proba.png";

console.log("Hello pati");
var flightsFrom = document.getElementById("flightsFrom");
var flightsTo = document.getElementById("flightsTo");
var OptionValue = document.getElementById("flightsFrom").replaceChild;
console.log(OptionValue); // function Check(option1, option2) {}
//   flightsTo.innerHTML += `<option value=${el.id}> ${el.name} </option>`;

fetch("https://raw.githubusercontent.com/PatrycjaMik/BuyFlightsApp/main/db.json").then(function (resp) {
  return resp.json();
}) // Transform the data into json
.then(function (data) {
  data.data.forEach(function (el) {
    flightsFrom.innerHTML += "<option id=".concat(el.id, "> ").concat(el.name, " </option>");
    flightsTo.innerHTML += "<option id=".concat(el.id, "> ").concat(el.name, " </option>");
  });
});
document.getElementById("flightsFrom").addEventListener("change", function () {
  console.log("You selected: ", this.value);
});
document.getElementById("flightsTo").addEventListener("change", function () {
  console.log("You selected: ", this.value);
}); ///trash

var heading = document.querySelector("#demo"),
    sumValue = sum(10, 5);
heading.innerText = "10+10= ".concat(sumValue);
var myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").append(myIcon);
document.querySelector("div").classList.add("change");
})();

/******/ })()
;
//# sourceMappingURL=index.12038f58e0a92f60b44b.bundle.js.map