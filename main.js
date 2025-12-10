/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard),\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\n\nclass Ship {\n    constructor(length) {\n        this.length = length;\n        this.damage = 0;\n        this.sunk = false;\n        this.location = [];\n    }\n\n    hit(){\n        this.damage++;\n    }\n\n    isSunk(){\n        if(this.damage >= this.length){\n            this.sunk = true;\n        }\n        else{\n            this.sunk = false;\n        }\n    }\n}\n\nclass Gameboard {\n    constructor(){\n        this.board = new Array(10).fill().map(() => Array(10).fill(''));\n        this.ships = [];\n        this.missedShots = [];\n\n    }\n\n    //place Methods\n    place(start,end){\n       \n        \n        let length = this.getLength(start,end);\n\n        let ship = new Ship(length);\n\n        this.ships.push(ship);\n\n        let locations = this.getLocation(start,end,length);\n        ship.location.push(...locations);\n       \n        let isPossible = true;\n        \n        locations.forEach((location) => {\n            let [x,y] = location;\n            \n            if(this.board[x][y] !== ''){\n                isPossible = false;\n                return;\n            }\n            this.board[x][y] = this.ships.length-1;\n\n        })\n        if(!isPossible){\n            this.ships.pop();\n        }\n        return isPossible;\n    }\n\n    getLength(start,end){\n            \n        let [startX,startY] = start;\n            \n        let [endX,endY] = end;\n            \n        let length = 0;\n            \n        if(startX === endX) {\n                \n            length = endY - startY;\n            \n        }\n            \n        else {\n                \n            length = endX - startX;\n            \n        }\n            \n        return length+1;\n    }\n\n    getLocation(start, end, length) {\n        let [startX,startY] = start;\n            \n        let [endX,endY] = end;\n\n        let locations = [];\n\n        if(startX === endX) {\n            locations.push(start);\n            for(let i=0; i< length-2; i++){\n                startY++;\n                locations.push([startX,startY]);\n            }\n            locations.push(end);\n            \n        }\n            \n        else {\n                \n            locations.push(start);\n            for(let i=0; i< length-2; i++){\n                startX++;\n                locations.push([startX,startY]);\n            }\n            locations.push(end);\n            \n        }\n\n        return locations;\n    }\n\n    recieveAttack (hitLocation) {\n        \n        let ship = this.isHit(hitLocation);\n        \n        if(ship){\n            ship.hit();\n            this.board[hitLocation[0]][hitLocation[1]] = 'X';\n        }\n        else {\n            this.missedShots.push(hitLocation.toString());\n            this.board[hitLocation[0]][hitLocation[1]] = 'X';\n        }\n    }\n\n    isHit(hitLocation) {\n        \n        let hit = false;\n        this.ships.forEach((ship) => {\n            \n            ship.location.forEach((location) => {\n                \n                if(location.toString() === hitLocation.toString()){\n                    hit = ship;\n                }\n\n            })\n        })\n\n        return hit;\n    }\n\n    allSunk() {\n\n        let isAllSunk = true;\n        this.ships.forEach((ship) => {\n            ship.isSunk();\n            if(!ship.sunk){\n                isAllSunk = false;\n            }\n        })\n\n        return isAllSunk;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmF0dGxlc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsYUFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzPzVhZTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gW107XG4gICAgfVxuXG4gICAgaGl0KCl7XG4gICAgICAgIHRoaXMuZGFtYWdlKys7XG4gICAgfVxuXG4gICAgaXNTdW5rKCl7XG4gICAgICAgIGlmKHRoaXMuZGFtYWdlID49IHRoaXMubGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEFycmF5KDEwKS5maWxsKCkubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKCcnKSk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuXG4gICAgfVxuXG4gICAgLy9wbGFjZSBNZXRob2RzXG4gICAgcGxhY2Uoc3RhcnQsZW5kKXtcbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLmdldExlbmd0aChzdGFydCxlbmQpO1xuXG4gICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgbGV0IGxvY2F0aW9ucyA9IHRoaXMuZ2V0TG9jYXRpb24oc3RhcnQsZW5kLGxlbmd0aCk7XG4gICAgICAgIHNoaXAubG9jYXRpb24ucHVzaCguLi5sb2NhdGlvbnMpO1xuICAgICAgIFxuICAgICAgICBsZXQgaXNQb3NzaWJsZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBsb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBbeCx5XSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmJvYXJkW3hdW3ldICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgaXNQb3NzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSB0aGlzLnNoaXBzLmxlbmd0aC0xO1xuXG4gICAgICAgIH0pXG4gICAgICAgIGlmKCFpc1Bvc3NpYmxlKXtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzUG9zc2libGU7XG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKHN0YXJ0LGVuZCl7XG4gICAgICAgICAgICBcbiAgICAgICAgbGV0IFtzdGFydFgsc3RhcnRZXSA9IHN0YXJ0O1xuICAgICAgICAgICAgXG4gICAgICAgIGxldCBbZW5kWCxlbmRZXSA9IGVuZDtcbiAgICAgICAgICAgIFxuICAgICAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICBpZihzdGFydFggPT09IGVuZFgpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGxlbmd0aCA9IGVuZFkgLSBzdGFydFk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgbGVuZ3RoID0gZW5kWCAtIHN0YXJ0WDtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGxlbmd0aCsxO1xuICAgIH1cblxuICAgIGdldExvY2F0aW9uKHN0YXJ0LCBlbmQsIGxlbmd0aCkge1xuICAgICAgICBsZXQgW3N0YXJ0WCxzdGFydFldID0gc3RhcnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgbGV0IFtlbmRYLGVuZFldID0gZW5kO1xuXG4gICAgICAgIGxldCBsb2NhdGlvbnMgPSBbXTtcblxuICAgICAgICBpZihzdGFydFggPT09IGVuZFgpIHtcbiAgICAgICAgICAgIGxvY2F0aW9ucy5wdXNoKHN0YXJ0KTtcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPCBsZW5ndGgtMjsgaSsrKXtcbiAgICAgICAgICAgICAgICBzdGFydFkrKztcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnMucHVzaChbc3RhcnRYLHN0YXJ0WV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goZW5kKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhdGlvbnMucHVzaChzdGFydCk7XG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTwgbGVuZ3RoLTI7IGkrKyl7XG4gICAgICAgICAgICAgICAgc3RhcnRYKys7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25zLnB1c2goW3N0YXJ0WCxzdGFydFldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2F0aW9ucy5wdXNoKGVuZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2NhdGlvbnM7XG4gICAgfVxuXG4gICAgcmVjaWV2ZUF0dGFjayAoaGl0TG9jYXRpb24pIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBzaGlwID0gdGhpcy5pc0hpdChoaXRMb2NhdGlvbik7XG4gICAgICAgIFxuICAgICAgICBpZihzaGlwKXtcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2hpdExvY2F0aW9uWzBdXVtoaXRMb2NhdGlvblsxXV0gPSAnWCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1pc3NlZFNob3RzLnB1c2goaGl0TG9jYXRpb24udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2hpdExvY2F0aW9uWzBdXVtoaXRMb2NhdGlvblsxXV0gPSAnWCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0hpdChoaXRMb2NhdGlvbikge1xuICAgICAgICBcbiAgICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2hpcC5sb2NhdGlvbi5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGxvY2F0aW9uLnRvU3RyaW5nKCkgPT09IGhpdExvY2F0aW9uLnRvU3RyaW5nKCkpe1xuICAgICAgICAgICAgICAgICAgICBoaXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gaGl0O1xuICAgIH1cblxuICAgIGFsbFN1bmsoKSB7XG5cbiAgICAgICAgbGV0IGlzQWxsU3VuayA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5pc1N1bmsoKTtcbiAgICAgICAgICAgIGlmKCFzaGlwLnN1bmspe1xuICAgICAgICAgICAgICAgIGlzQWxsU3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBpc0FsbFN1bms7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/battleship.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _battleship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./battleship */ \"./src/battleship.js\");\n\n\nconst gameBoard = new _battleship__WEBPACK_IMPORTED_MODULE_0__.Gameboard();\n\ngameBoard.place([0,2],[0,3]);\n\nconsole.log(gameBoard.ships);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBdUM7O0FBRXZDLHNCQUFzQixrREFBUzs7QUFFL0I7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYW1lYm9hcmR9IGZyb20gJy4vYmF0dGxlc2hpcCc7XG5cbmNvbnN0IGdhbWVCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuZ2FtZUJvYXJkLnBsYWNlKFswLDJdLFswLDNdKTtcblxuY29uc29sZS5sb2coZ2FtZUJvYXJkLnNoaXBzKTtcblxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;